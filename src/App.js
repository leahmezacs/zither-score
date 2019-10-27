import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Analytics, Auth } from 'aws-amplify';
import HomePage from './components/HomePage.js'
import Settings from './components/Settings.js'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        Analytics.startSession();
        window.addEventListener('beforeunload', () => {
            Analytics.stopSession();
        })
        Auth.currentAuthenticatedUser().then(user => {
            this.updateCurrentUser(user)
        });
    }

    updateCurrentUser = (user) => {
        this.setState({
            currentUser: user
        })
    }

    onSignOut = async () => {
        await Auth.signOut();
        this.setState({
            currentUser: null
        })
    }

    render () {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" 
                            render = {() => <HomePage onLogin={this.updateCurrentUser} />}
                        />
                        <Route path="/Settings" exact component={Settings} />
                    </Switch>
                </Router>
            </div>
        )  
    }
}
export default App;

