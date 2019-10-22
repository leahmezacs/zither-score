import React, {Component} from 'react';
import HomePage from './components/HomePage.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



export default class App extends Component {
    render () {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                    </Switch>
                </Router>
            </div>
        )  
    }
}

