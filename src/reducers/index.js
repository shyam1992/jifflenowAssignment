import { createStore, applyMiddleware, compose } from 'redux';
import { questions } from './questions';
import thunk from 'redux-thunk';

  
const initialState = {
    questions: [],
    loading: false,
    error: null
  };

const store = createStore(questions,initialState, compose(applyMiddleware(thunk)));

export default store;

