import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {
    render(){
        let list = this.props.options.map((elm) => {
            return <button key={elm}>{elm}</button>;
        });
        return(
            <div>
            {list}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.testquestions[state.currentQuestion];
}

export default connect(mapStateToProps)(Options);