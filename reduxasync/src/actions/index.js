import axios from 'axios';

export const ADD_JOKE = 'ADD_JOKE';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';

export const fetchActivity = () => dispatch => {
  dispatch({ type: ADD_JOKE });
  axios
    .get('http://api.icndb.com/jokes/random')
    .then(res => {
      dispatch({
        type: FETCHING_ACTIVITY_SUCCESS,
        payload: res.data.value.joke
      });
    })
    .catch(err => {
      dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
    });
};

//
