import * as ActionTypes from '../ActionTypes';

export const signInAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGN_IN, payload: data});
}

export const signUpAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP, payload: data }); 
}