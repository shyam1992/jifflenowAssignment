import { createStore, applyMiddleware, compose } from 'redux';
import { questions } from './questions';
import thunk from 'redux-thunk';

  
const initialState = {
  testquestions: [],
    loading: false,
    error: null,
    currentQuestion: 0,
    nextButtonEnabled: false
  };

const store = createStore(questions,initialState, compose(applyMiddleware(thunk)));

export default store;

