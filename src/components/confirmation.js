import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './custombutton';
import { connect } from 'react-redux';

class Confirmation extends Component{
    render(){
        let tbody = this.props.testquestions.map((elm,ind) =>{
            return <tr key={ind}><td>{elm.text}</td><td>{elm.answer}</td><td>{this.props.answersMap[ind]}</td></tr>
        });
        let correctAns = 0;
        for(let k=0;k<this.props.testquestions.length;k++){
            if(this.props.testquestions[k].answer == this.props.answersMap[k]){
                correctAns++;
            }
        }
        let percentage = (correctAns/this.props.testquestions.length) * 100;
        return(
            <div>
                <h2>Congratulations you've completed the test.</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Correct Answer</th>
                            <th>Your Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tbody}
                    </tbody>
                </table>
                <h3>Percentage Completion = {percentage}%</h3>
                <br />
                <Link to="/"><Button enabled={true} text="Retry" onClick={()=>{console.log("reload");this.props.clear()}}/></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        clear : () => dispatch({"type":"CLEAR"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Confirmation);