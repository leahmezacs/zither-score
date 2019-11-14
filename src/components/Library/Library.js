import React, { Component } from 'react';

class Library extends Component {
    render () {
        return (
            <div className="main-library">
                <div className="side-bar">
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
            
                <div className="main-bar">
                    <div className="library-content">
                        <div className="head-container">
                            <div className="header">
                                <h1>
                                    Scores
                                </h1>
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
                            </div>
                        </div>
                    </div>

                    <div className="right-bar">
                        <div className="inner">
                            <button ></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Library;