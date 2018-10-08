import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Question extends Component {
    render(){
        let list = this.props.question.options.map((elm) => {
            return <li key={elm}>{elm}</li>;
        });
        return(
            <div className="question">
                <h2>{this.props.question.text}</h2>
                <ul>
                {list}
                </ul>
            </div>
        )
    }
}