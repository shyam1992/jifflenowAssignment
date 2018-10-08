import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './custombutton';

export default class Home extends Component{
    render(){
        return(
            <div className="homeDiv">
                <h1>Welcome to Jifflenow test.</h1>
                <Link to="/questions"><Button enabled = {true} text="Start the Test" onClick={()=>console.log("load")}/></Link>
            </div>
        )
    }
}