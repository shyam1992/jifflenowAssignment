import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render(){
        return(
            <div>
                Question Component
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Question);