import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Question extends Component {
    render(){
        let list = this.props.question.options.map((elm) => {
            return <li key={elm}>{elm}</li>;
        });
        return(
            <div>
                {this.props.question.text}
                <ul>
                {list}
                </ul>
            </div>
        )
    }
}