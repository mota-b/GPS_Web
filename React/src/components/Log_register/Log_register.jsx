import React, {Component} from 'react';


import "./Log_register.css";
export class Log_register extends Component{
    render (){
        return (    
            <div id="log_reg">
                
                <div className="jumbotron text-center">
                    <h1>Log/Reg Bootstrap</h1>
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
