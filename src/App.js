import React, {Component} from 'react';
import HomePage from './components/HomePage.js'
import Settings from './components/Settings.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
    render () {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/Settings" exact component={Settings} />
                    </Switch>
                </Router>
            </div>
        )  
    }
}
export default App;

