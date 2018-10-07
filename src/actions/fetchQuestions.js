export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export function fetchQuestions() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("http://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment")
        .then(handleErrors)
        .then(json => {
            console.log(json);
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
if (!response.ok) {
    throw Error(response.statusText);
}
return response;
}

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = questions => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { questions }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});