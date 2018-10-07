import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from '../actions/fetchQuestions';


export const questions = (state = {}, action) => {
    console.log(action.payload);
    switch(action.type){
        case 'NEXT': 
        return Object.assign({},state,{"currentQuestion": state.currentQuestion + 1});
        case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          testquestions: action.payload.questions
        };
  
      case FETCH_PRODUCTS_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          testquestions: []
        };
        default :
        return state;
    }
}
  