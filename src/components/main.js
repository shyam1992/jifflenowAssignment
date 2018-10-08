import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './question';
import Options from './options';
import { Button as CustomButton } from './custombutton';
import { fetchQuestions } from '../actions/fetchQuestions';
import { Link } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.nextButtonClicked = this.nextButtonClicked.bind(this);
    }
    nextButtonClicked(){
        this.props.next();
    }
    componentDidMount() {
        this.props.fetchQuestions();
    }
    render(){
        console.log(this.props);
        if(this.props.testquestions.length >0 && this.props.currentQuestion === this.props.testquestions.length-1){
            return(
                <div>
                    <Question question ={this.props.testquestions[this.props.currentQuestion]}/>
                    <Options />
                    <div className="nextbtnsection">
                    <Link to="/confirm"><CustomButton text="next" enabled={this.props.nextButtonEnabled} onClick={()=>console.log("done")}/></Link>
                    </div>
                </div>
            )
        } else if(this.props.testquestions.length === 0){
            return (
                <div>Loading...</div>
            )
        } else if(this.props.testquestions.length >0 && this.props.currentQuestion !== this.props.testquestions.length){
            return(
                <div>
                    <Question question ={this.props.testquestions[this.props.currentQuestion]}/>
                    <Options />
                    <div className="nextbtnsection">
                    <CustomButton text="next" enabled={this.props.nextButtonEnabled} onClick={() => this.nextButtonClicked()}/>
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        next : () => dispatch({type:"NEXT"}),
        fetchQuestions : () => dispatch(fetchQuestions())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);