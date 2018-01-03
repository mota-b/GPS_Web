import React, {Component} from 'react';


import "./Home.css";
export class Home extends Component{
    render (){
        return (    
            <div id="home">
                <div className="jumbotron text-center">
                    <h1>Home Bootstrap</h1>
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
        );
    }
};
