// we'll need axios
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

export const getCharacter = () => dispatch => {
    dispatch({ type: FETCHING })
    axios
    .get('https://swapi.co/api/people/')
    .then(res => { 
        console.log(res);
        dispatch({ 
            type: SUCCESS,
            payload: res.data.results })
        })
    .catch(err => {
        // STEP X - Handle the error state - dispatch the error action
        // with the error message on the payload
        dispatch({
          type: FAILURE,
          payload: err.response.data.error.message
        })
        })
    };
    


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
