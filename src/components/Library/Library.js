import React, { Component } from 'react';
import CreateModal from "../CreateModal/CreateModal";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Dropdown } from "react-bootstrap";
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as queries from '../../graphql/queries';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          userId: '',
          scores: []
        }
        this.handleShow = this.handleShow.bind(this);
    }
    
    handleShow = () => {
        this.setState(prevState => {
          return {
            modal: !prevState.modal
          };
        });
    };

    

    async componentDidMount() {
        const user = await Auth.currentAuthenticatedUser();
        const result = await API.graphql(graphqlOperation(queries.listScores));  
        this.setState({
            scores: result.data.listScores.items,
            userId: user.username
        });
    }

    handleListScores() {
        const temp = this.state.scores;
        let data = [];
        
        for(let i = 0; i < temp.length; ++i){
            if(temp[i].user.id === this.state.userId) data.push(temp[i]);
        } 
        /* console.log(this.state.userId);
        console.log(data); */

        return (
            <div>
                {data.map(function(score, index){
                    return (
                        <div className="tr" key={index}>
                            <div className="td row-title">{score.name}</div>
                            <div className="td row-date">{score.updatedAt}</div>
                            <div className="td row-sharing">{score.status}</div>
                            <div className="td row-options">
                                <Dropdown>
                                    <Dropdown.Toggle className="score_options" id="dropdown-basic">
                                        <MoreVertIcon />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
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

export default Library;