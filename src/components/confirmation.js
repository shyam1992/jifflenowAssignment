import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './custombutton';

export default class Confirmation extends Component{
    render(){
        return(
            <div>
                Congratulations you've completed the test.
                <Link to="/"><Button text="Retry" /></Link>
            </div>
        )
    }
}