import React, {Component} from 'react';

import {Header} from '../Header/Header.jsx'

import "./Home.css";
export class Home extends Component{
    render (){
        return (    
            <div className="page" id="home">
                
                <Header/>

                <div id="head" className="section">

                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">Welcome To Our service!</div>
                            <div className="intro-heading">It's Nice To Meet You</div>
                            <a href="#/#service" className="page-scroll btn btn-xl">Check More !</a>
                        </div>
                
                    </div>
        

                </div>

                <div id="services" className="section">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">TK</h2>
                                <h3 className="section-subheading text-muted">Real Time Geolocation service</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-6">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Responsive Design</h4>
                                <p className="text-muted">Implemented for Computer, Tablette and Phone</p>
                            </div>
                            <div className="col-md-6">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Web Security</h4>
                                <p className="text-muted">We protect your information by preventing, detecting and responding to attacks</p>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-6">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-podcast fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Quick Respond</h4>
                                <p className="text-muted">Real Time Respond Requests</p>
                            </div>
                            <div className="col-md-6">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-eye-slash fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Hidden Data</h4>
                                <p className="text-muted">Only the Admin can see it</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="about" className="section">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">About</h2>
                                <h3 className="section-subheading text-muted">The Technologies We Used !</h3>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="timeline">
                                    <li>
                                        <div className="timeline-image">
                                            <img className="img-circle img-responsive" src="/static/images/about/1.png" alt=""/>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>27-01-2017</h4>
                                                <h4 className="subheading">First Step Beginning</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">We made our research about </p>
                                                <ul>
                                                    <li>Geolocation  </li>
                                                    <li>Triangulation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="img-circle img-responsive" src="/static/images/about/2.jpg" alt=""/>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>27-02-2017</h4>
                                                <h4 className="subheading">Complete the Client Service</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">talking about android service</p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="timeline-image">
                                            <img className="img-circle img-responsive" src="/static/images/about/3.jpg" alt=""/>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>27-03-2017</h4>
                                                <h4 className="subheading">More research</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Nodejs, Express and socketIO </p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="img-circle img-responsive" src="/static/images/about/4.png" alt=""/>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>27-04-2017</h4>
                                                <h4 className="subheading">Complete the Web Server Design</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">web responsive & Multi pages login, profile and real time mapping</p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className="timeline-image">
                                            <img className="img-circle img-responsive" src="/static/images/about/5.jpg" alt=""/>
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                <h4>27-05-2017</h4>
                                                <h4 className="subheading">Final Step</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Create a secure app that work on any device with a real time service</p>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <h4>Be A
                                                <br/>Beta
                                                <br/>Tester!</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="team" className="section bg-light-gray">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">Our Amazing Team</h2>
                                <h3 className="section-subheading text-muted">WELCOME !</h3>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="team-member">
                                    <img src="/static/images/team/1.jpg" className="img-responsive img-circle" alt="" height="225px" width="225px"/>
                                    <h4>BAHRI Aimene</h4>
                                    <p className="text-muted">Junior Developer</p>
                                    <ul className="list-inline social-buttons">
                                        <li><a href="https://twitter.com/PirateAIM"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li><a href="https://www.linkedin.com/in/aimenbahri/"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="team-member">
                                    <img src="/static/images/team/2.jpg" className="img-responsive img-circle" alt="" height="225px" width="225px"/>
                                    <h4>BENHATCHI Moukhtar</h4>
                                    <p className="text-muted">Junior Web/Android Developer</p>
                                    <ul className="list-inline social-buttons">
                                        <li><a href="#"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="https://www.linkedin.com/in/moukhtar-benhatchi-a378a3106/"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-8 col-lg-offset-2 text-center">
                                <p className="large text-muted">Thank's for putting your trust between our hands !s</p>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
};
