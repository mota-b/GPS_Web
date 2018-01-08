import React, {Component} from 'react';

import "./NavBar.css";
export class NavBar extends Component{
    constructor(props){
        super(props);
        this.path = this.props.path;
        
    }
    componentDidMount() {
        let path = this.path;
        $("#b_sign,#b_log").click(function(event){
            if(event.currentTarget.id=="b_sign" && $(".sec-2").css("display")=="none"  
                || event.currentTarget.id=="b_log" && $(".sec-1").css("display")=="none"){
                $(".sec-2").slideToggle("slow")
                $(".sec-1").slideToggle("slow")
            }
        })

        $(".nav.navbar-nav li").click(function(){
            let home_anchor = ($(this).text()=="Home" || $(this).text()=="About" || $(this).text()=="Team" || $(this).text()=="Services"); 
            let reg = $(this).text()=="Sign Up"

            if (home_anchor){
                let section;
                if($(this).text()=="Home") section ="#head"
                if($(this).text()=="Services") section ="#services"
                if($(this).text()=="About") section ="#about"
                if($(this).text()=="Team") section ="#team"
                window.location.href = "#/"
                
                $(document).ready(function(){
                    var tag = $(section);
                    $('html,body').animate({scrollTop: tag.offset().top},'slow');
                })
            }else if(path != "/log" && path != "/register" && reg){
                window.location.href = "#/#log"
                $(document).ready(function(){
                    var tag = $("#b_sign");
                    tag.click();
                })
                
            }
            
        })
     }
    
    render (){
        
        let guest_ul;
        if(0<1){
            guest_ul =(
                <ul className="dropdown-menu">
                    <li ><a href="#/log"><span className="glyphicon glyphicon-log-in"></span>Login</a></li>
                    <li><a href="#/register"><span className="glyphicon glyphicon-user"></span>Sign Up</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#/">Privacy Policy</a></li>
                </ul>
            );
        }else{
            guest_ul =(
                <ul className="dropdown-menu">
                    <li><a href="#/logOut"><span className="glyphicon glyphicon-log-out"></span> LogOut</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#/">Privacy Policy</a></li>
                </ul>
            );
        }

        return (    
            
            <div className="container" id="header">
              
                <nav className=" col-xs-12 col-sm-12 navbar navbar-inverse ">
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
                                <li className="active" ><a href="#/#">Home<span className="sr-only"></span></a></li>
                                <li ><a href="#/#">Services</a></li>
                                <li ><a href="#/#">About</a></li>
                                <li  ><a href="#/#">Team</a></li>
                            </ul>

                            <ul className="nav navbar-nav navbar-inverse navbar-right">
                                <li id="guest"><a href="#/user">Guest</a></li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Params<span className="caret"></span></a>
                                    {guest_ul}
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
                
            </div>
        );
    }
};
