import React, { Component } from 'react';
import { Table } from 'react-bootstrap/';
import './Sidebar.css'

class Library extends Component {
    render () {
        return (
            <div>
                <div className="sidebar">
                    <a href="#">Scores</a>
                    <a href="#">New Collection</a>
                    <a href="#">Trash</a>
                </div>
                <div className="main">
                    <h1>Scores</h1>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Modified</th>
                                <th>Sharing</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </div>         
        )
    }
}

export default Library;