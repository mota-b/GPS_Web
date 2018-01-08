import React, {Component} from 'react';

import {NavBar} from '../NavBar/NavBar.jsx'

import "./Log_register.css";
export class Log_register extends Component{
   
    
   


    render (){
        let def_login_form = (
            <form id="log" role="form" className="row col-xs 12" method="post" action="/login/log_me">
                <center> <h3>LogIn Form</h3></center>
                <div className="input-group input-group-sm col-xs-10 col-xs-offset-1">
                    <span className="input-group-addon"><i className="fa fa-lg fa-user-circle" aria-hidden="true"></i></span>
                    <input name="uDAsername" type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon3"/>         
                    <input name="password" type="password" className="form-control" placeholder="Password" aria-describedby="sizing-addon3" required/>
                </div>

                <div className="input-group input-group-sm col-xs-10 col-xs-offset-1">
                    <span className="input-group-addon"><i className="fa fa-lg  fa-lock" aria-hidden="true"></i></span>
                    <input name="password" type="password" className="form-control" placeholder="Password" aria-describedby="sizing-addon3" required/>
                </div>
                <br/>
                <button className="btn btn-success col-xs-10 col-xs-offset-1" type="submit">Log</button>
            </form>
        );
        let def_register_form = (
            <form id="register" role="form" className="row col-xs 12" autoComplete="off">
                <center> <h3>SignUp Form</h3></center>
                <div className="input-group input-group-sm col-xs-10 col-xs-offset-1">
                    <span className="input-group-addon"><i className="fa fa-lg fa-user-circle" aria-hidden="true"></i></span>
                    <input name="pseudo" type="text" className="form-control" placeholder="Pseudo" aria-describedby="sizing-addon3"/>
                </div>

                <div className="input-group input-group-sm col-xs-10 col-xs-offset-1">
                    <span className="input-group-addon"><i className="fa fa-lg fa-user-circle" aria-hidden="true"></i></span>
                    <input name="username" type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon3" required/>
                </div>

                <div className="input-group input-group-sm col-xs-10 col-xs-offset-1">
                    <span className="input-group-addon"><i className="fa fa-lg  fa-lock" aria-hidden="true"></i></span>
                    <input name="password" type="password" className="form-control" placeholder="Password" aria-describedby="sizing-addon3" required/>
                </div>
                <br/>
                <button className="btn btn-success col-xs-10 col-xs-offset-1" type="submit">Log</button>
            </form>
        );
        
        return ( 
            <div className="page" id="log_reg">

                
                <NavBar path={this.props.history.location.pathname}/>

                <div className="section">
                    
                    <div id="main-content" canvas="container">
        
                        <div className="row">
                            
                                <ul>
                                    
                                </ul>
                        
                            <div className="col-xs-12 sec-1">
                                    <div className="left-1 hidden-xs col-sm-6"><center><h1><li id="b_sign" ><a href="#/log">SignUp</a></li></h1></center></div>
                                    <div className="right-1 col-xs-12 col-sm-6">
                                        
                                        {def_login_form}
                                    </div>
                                    
                            </div>
                            <div className="col-xs-12 sec-2">
                                    <div className="left-2 col-xs-12 col-sm-6">
                                        
                                        {def_register_form}
                                    </div>
                                    <div className="right-2 hidden-xs col-sm-6"><center><h1><li id="b_log" ><a href="#/log">LogIn</a></li></h1></center></div>    
                                
                            </div>
                                
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
};
