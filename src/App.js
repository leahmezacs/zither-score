import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Analytics, Auth } from 'aws-amplify';
import HomePage from './components/HomePage.js'
import Settings from './components/Settings.js'
import Login from './components/Login.js'
import NavBar from './components/NavBar'
import AuthContext from './AuthContext';

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
            <AuthContext.Provider value={this.state.currentUser}>
            <Router>
                <div className="App">
                    <NavBar loggedInUser={this.state.currentUser} onSignOut={this.onSignOut} />
                    <Route path="/" component={HomePage} />
                    <Route path="/Login" 
                        render = {() => <Login onLogin={this.updateCurrentUser} />}
                    />
                    <Route path="/Settings" component={Settings} />
                </div>
            </Router>
            </AuthContext.Provider>
        ); 
    }
}
export default App;

