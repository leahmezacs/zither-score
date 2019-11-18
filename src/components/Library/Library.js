import React, { Component } from 'react';
import CreateModal from "../CreateModal/CreateModal";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Auth, graphqlOperation, API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
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

    render () {
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
                                    </div>
                                </div>

                                <div infinite-scroll-disabled="infiniteScrollBusy" infinite-scroll-distance="250" className="tbody">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-actions">
                        <div className="inner">
                            <button onClick={this.handleShow} className="btn-lg btn-teal-gradient main-action">Create new score</button>
                        </div>
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