import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {
    render(){
        return(
            <div>
            Options
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Options);