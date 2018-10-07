import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './custombutton';

export default class Home extends Component{
    render(){
        return(
            <div>
                Welcome to Jifflenow test.
                <Link to="/questions"><Button text="Continue" /></Link>
            </div>
        )
    }
}