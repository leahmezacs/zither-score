import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import CreateModal from "../CreateModal/CreateModal";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Dropdown } from "react-bootstrap";
import jsPDF from "jspdf";
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import * as subscriptions from '../../graphql/subscriptions';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          userId: '',
          scores: []
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleListScores = this.handleListScores.bind(this);
        this.handlePreviewScore = this.handlePreviewScore.bind(this);
        this.handleDeleteScore = this.handleDeleteScore.bind(this);
        this.handleEditScore = this.handleEditScore.bind(this);

        this.scoreDeletionSubscription = null;
        
    }

    //get list of scores from all users 
    async componentDidMount() {
        const limit = 50;
        const user = await Auth.currentAuthenticatedUser();
        const result = await API.graphql(graphqlOperation(queries.listScores, {limit}));  
        this.setState({
            scores: result.data.listScores.items,
            userId: user.username
        });
        
        this.scoreDeletionSubscription = API.graphql(graphqlOperation(subscriptions.onDeleteScore)).subscribe({
            next: (scoreData) => {
                const scoreId = scoreData.value.data.onDeleteScore.id;
                console.log("deleted score id: " + scoreId);

                const remainingScores = this.state.scores.filter(scoresData => scoresData.id !== scoreId);
                console.log(remainingScores);
                this.setState({
                    scores: remainingScores
                });
            },
        });
    }

    componentWillUnmount() {
        if(this.scoreDeletionSubscription) {
            this.scoreDeletionSubscription.unsubscribe();
        }
    }

    handleShow = () => {
        this.setState(prevState => {
          return {
            modal: !prevState.modal
          };
        });
    };

    async handleDeleteScore(score_name) {
        const deletedScore = await API.graphql(graphqlOperation(mutations.deleteScore,{
            input:{
                id : score_name
            }
        }));
        //console.log(deletedScore);
        //console.log(this.state.scores);
    }

    handleEditScore(score_name) {
        this.props.history.push({
            pathname: '/EditScore',
            search: score_name,
            state: {
              name: score_name
            }
        });
    }

    handlePreviewScore(score_name) {
        var doc = new jsPDF();
        doc.setProperties({
            title: score_name
        });
        doc.setFontSize(25); doc.setFont("helvetica"); doc.text(20, 35, score_name);
        doc.line(20, 36, 180, 36);
        doc.setFontSize(14); doc.text(20, 44, "By:"+ this.state.userId);
        var addLineBars = function(i) {
            for (var j=0; j <= 4; j++) {
                doc.line( (20+(j*40)), (50+(i*25)),  (20+(j*40)), (65+(i*25))); // horizontal line
            }
        };

        var addNumRow = function(i, arr) {
            doc.setFontSize(11);
            for(var index=0; index < arr.length; index++) {
                if(arr[index].length >= 4){
                    for(var note=0; note < arr[0].length; note++) {
                        doc.text( (23+(note*40)+(index*10)),  (58+(i*25)), arr[index][note]);
                    }
                }
            }
        }

        var my_array=[["1", "2", "3", "4"], ["5", "6", "7", "8"], ["9", "10", "11", "12"], ["13", "14", "15", "16"]];
        addNumRow(0, my_array);
        addLineBars(0);
        addLineBars(1);
        
        doc.output('dataurlnewwindow');
    }

    //list scores in table
    handleListScores() {
        const temp = this.state.scores;
        let data = [];
        
        //filter scores so it only contains current user's scores
        for(let i = 0; i < temp.length; ++i){
            if(temp[i].user.id === this.state.userId) data.push(temp[i]);
        } 
        console.log(this.state.userId);

        return (
            <div>
                {data.map((score, index) => {
                    return (
                        <div className="tr" key={index}>
                            <div className="td row-title">{score.name}</div>
                            <div className="td row-date">{new Date(score.updatedAt).toDateString()}</div>
                            <div className="td row-sharing">{score.status}</div>
                            <div className="td row-options">
                                <Dropdown>
                                    <Dropdown.Toggle className="btn btn-sm btn-light">
                                        <MoreVertIcon />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => this.handlePreviewScore(score.name)}>View</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.handleEditScore(score.name)}>Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.handleDeleteScore(score.name)}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }


    render () {
        //console.log(this.state.scores);
        return (
            <div className="main-library">
                <div className="side-bar">
                    <div className="list-tree">
                        <div className="inner">
                                <a className="list-item">
                                    <span className="t">Scores</span>
                                </a>
                                <div className="sub-item">
                                    <a className="list-item">
                                        <span className="t em">New collection</span>
                                    </a>
                                </div>
                                <a className="list-item">
                                    <span className="t">Trash</span>
                                </a>
                        </div>
                    </div>
                </div>
            
                <div className="main-bar">
                    <div className="library-content">
                        <div className="head-container">
                            <div className="header">
                                <h2>
                                    Scores
                                </h2>
                            </div>
                        </div>
                        
                        <div className="list-container">
                            <div className="library-list">
                                <div className="thead">
                                    <div className="tr">
                                        {/* <div className="th cb">
                                            <input type="checkbox" className="checkbox-morph"></input>
                                        </div> */}
                                        <div className="th row-title sorting">
                                            Name
                                        </div>
                                        <div className="th row-date sorting">
                                            Date Modified
                                        </div>
                                        <div className="th row-sharing">
                                            Sharing
                                        </div>
                                        <div className="th row-options">
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="tbody">
                                    {this.handleListScores()}
                                </div>
                                <div infinite-scroll-disabled="infiniteScrollBusy" infinite-scroll-distance="250" className="tbody"></div>
                            </div>
                        </div>
                    </div>
                    <div className="inner">
                        <button onClick={this.handleShow} className="btn-lg btn-teal-gradient main-action">Create new score</button>
                    </div>          
                </div>
                <CreateModal
                    modal = {this.state.modal}
                    handleShow = {this.handleShow}
                />
            </div>
        )
    }
}

export default withRouter(Library);