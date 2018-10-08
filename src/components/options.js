import React, { Component } from 'react';
import { connect } from 'react-redux';

class Options extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let buttons = document.querySelectorAll(".optionBtn");
        for(let i=0;i<buttons.length;i++){
            buttons[i].classList.remove("selected");
        }
        e.target.classList.add("selected");
        this.props.answered(e.target.innerHTML);
    }
    componentDidUpdate(){
        let buttons = document.querySelectorAll(".optionBtn");
        for(let i=0;i<buttons.length;i++){
            buttons[i].classList.remove("selected");
        }
    }
    render(){
        let list = this.props.options.map((elm) => {
            return <button key={elm} className="optionBtn" onClick={this.handleClick}>{elm.split(" ")[1].trim()}</button>;
        });
        return(
            <div className="options">
            {list}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.testquestions[state.currentQuestion];
}

const mapDispatchToProps = (dispatch) =>{
    return {
        answered : (option) => dispatch({type: "ANSWERED","option":option})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Options);