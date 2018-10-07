import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './question';
import Options from './options';
import { Button as CustomButton } from './custombutton';
import { fetchQuestions } from '../actions/fetchQuestions';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            nextButtonEnabled : false
        }
        this.nextButtonClicked = this.nextButtonClicked.bind(this);
    }
    nextButtonClicked(){
        this.props.next();
    }
    componentDidMount() {
        this.props.fetchQuestions();
    }
    render(){
        return(
            <div>
                <Question />
                <Options />
                <CustomButton text="next" enabled={this.state.nextButtonEnabled} onClick ={() => this.nextButtonClicked}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        next : () => dispatch({type:"NEXT"}),
        answered : () => dispatch({type: "ANSWERED"}),
        fetchQuestions : () => dispatch(fetchQuestions())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);