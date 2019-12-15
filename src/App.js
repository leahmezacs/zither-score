import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import HomePage from './components/HomePage/HomePage';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Library from './components/Library/Library';
import Dashboard from './components/Dashboard/Dashboard';
import Discovery from './components/Discovery/Discovery';
import EditScore from './components/EditScore/EditScore';
import ViewScore from './components/ViewScore/ViewScore';
import SingleScore from './components/EditScore/ScoreInput';
import ChangePassword from './components/Settings/ChangePassword';
import HelpFAQ from './components/HelpFAQ/HelpFAQ'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
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
        localStorage.clear();
    }

    render () {
        return ( 
            <Router>
                <div className="App">
                    <NavBar loggedInUser={this.state.currentUser} onSignOut={this.onSignOut} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/Login" 
                        render = {() => <Login onLogin={this.updateCurrentUser} />}
                    />
                    <PrivateRoute exact path="/Dashboard" component={Dashboard}/>
                    <PrivateRoute exact path="/Settings" component={Settings}/>
                    <PrivateRoute exact path="/Settings/ChangePassword" component={ChangePassword}/>
                    <PrivateRoute exact path="/Library" component={Library}/>
                    <PrivateRoute exact path="/Discovery" component={Discovery}/>
                    <PrivateRoute exact path="/EditScore" component={EditScore}/>
                    <PrivateRoute exact path="/ScoreInput" component={SingleScore}/>
                    <Route exact path="/ViewScore" component={ViewScore}/> 
                    <Route exact path="/HelpFAQ" component={HelpFAQ}/> 
                </div>
            </Router>
        ); 
    }
}
export default App;

