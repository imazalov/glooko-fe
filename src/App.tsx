import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import HomePage from './components/Home';
import LoginPage from './components/Login';
import RegistrationPage from './components/Registration';

const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
                <UserProvider>
                    <div className="App">
                        <Switch>
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegistrationPage} />
                            <Route path="/home" component={HomePage} />
                            <Redirect from="/" to="/login" exact />
                        </Switch>
                    </div>
                </UserProvider>
            </AuthProvider>
        </Router>
    );
};

export default App;
