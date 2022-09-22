import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SignInAPI, SignUpAPI } from '../Comman/API/auth.API';
import * as ActionTypes from '../Redux/ActionTypes';

function* SignIn(action) {
    try {
        const user = yield call(SignInAPI, action.payload);
        console.log(user);
    } catch (e) {
        console.log(e);
    }
}
function* SignUp(action) {
    try {
        const user = yield call(SignUpAPI, action.payload);
        console.log(user);
        yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

function* watchSignIn() {
    yield takeEvery(ActionTypes.SIGN_IN, SignIn);
}
function* watchSignUp() {
    yield takeEvery(ActionTypes.SIGN_UP, SignUp);
}

export function* SignUpSaga() {
    yield all([
        watchSignIn(),
        watchSignUp()
    ])
}