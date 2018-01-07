import React, {Component} from 'react';

import "./Header.css";
export class Header extends Component{
    render (){
        let log;
        if(0>1){
            log =(
                <ul className="dropdown-menu">
                    <li><a href="#/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#/log"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#/">Privacy Policy</a></li>
                </ul>
            );
        }else{
            log =(
                <ul className="dropdown-menu">
                    <li><a href="#/logOut"><span className="glyphicon glyphicon-log-out"></span> LogOut</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#/">Privacy Policy</a></li>
                </ul>
            );
        }
        return (    
            
            <div className="container" id="header">
                <div>
                    <nav className=" col-xs-12 navbar navbar-inverse ">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">React</a>
                            </div>
                
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="#/#">Home <span className="sr-only">(current)</span></a></li>
                                    <li onClick={function(){var tag = $("#services");$('html,body').animate({scrollTop: tag.offset().top},'slow');}}><a href="#/#">Services</a></li>
                                    <li onClick={function(){var tag = $("#about");$('html,body').animate({scrollTop: tag.offset().top},'slow');}}><a href="#/#">About</a></li>
                                    <li onClick={function(){var tag = $("#team");$('html,body').animate({scrollTop: tag.offset().top},'slow');}} ><a href="#/#">Team</a></li>
                                    <li className="dropdown">
                                    
                                </li>
                                </ul>

                                <ul className="nav navbar-nav navbar-inverse navbar-right">
                                    <li id="guest"><a href="#/user">Guest</a></li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Params<span className="caret"></span></a>
                                        {log}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
};
