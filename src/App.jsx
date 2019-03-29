import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '@/pages/login/index.jsx'
import Home from '@/pages/home/index.jsx'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;