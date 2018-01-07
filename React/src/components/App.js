import React, {Component} from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';

import {Home} from './Home/Home.jsx'
import {User} from './User/User.jsx'
import {Log_register} from './Log_register/Log_register.jsx'

import "./App.css";
export class App extends Component {
    
    render(){
        return (
            <HashRouter>
                <div id="page">
                  <Route  exact path="/" component={Home} />
                  <Route  exact path="/user" component={User} />
                  <Route  exact path="/log" component={Log_register} />
                  <Route  exact path="/register" component={Log_register} />
                </div>
            </HashRouter>
        );
    }
}