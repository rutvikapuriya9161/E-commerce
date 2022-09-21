import { SignInAPI } from '../Comman/API/auth.API';
import * as ActionTypes from '../Redux/ActionTypes';

function* SignIn(action){
    try{
        const user = yield call(SignInAPI, action.payload);
        console.log(user);
    } catch (e) {
        console.log(e);
    }
}

function* watchSignIn() {
    yield takeEvery(ActionTypes.SIGN_IN, SignIn);
}  

export function* SignUpSaga() {
    yield all ([
        watchSignIn()
    ])
}