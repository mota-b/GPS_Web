import React, {Component} from 'react';

import {Header} from '../Header/Header.jsx'

import "./User.css";
export class User extends Component{
    render (){
        return (    
                
            <div className="page" id="user">
                
                <div className="section">
                    <Header/>
                  
                    <div className="jumbotron text-center">
                        <h1>User Bootstrap</h1>
                        <p>Resize this responsive page to see the effect!</p> 
                    </div>
                
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <h3>Column 1</h3>
                                <p>Lorem ipsum dolor..</p>
                                <p>Ut enim ad..</p>
                            </div>
                            <div className="col-sm-4">
                                <h3>Column 2</h3>
                                <p>Lorem ipsum dolor..</p>
                                <p>Ut enim ad..</p>
                            </div>
                            <div className="col-sm-4">
                                <h3>Column 3</h3> 
                                <p>Lorem ipsum dolor..</p>
                                <p>Ut enim ad..</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
};
