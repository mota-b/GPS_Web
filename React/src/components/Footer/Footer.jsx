import React, {Component} from 'react';

import "./Footer.css";
export class Footer extends Component{
    render (){

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <span className="copyright">Copyright &copy; PFE Website 2016-2017</span>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline social-buttons">
                                <li><a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                                <li><a href="#">Privacy Policy</a>
                                </li>
                                <li><a href="#">Scroll Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );   
    } 
}
            
