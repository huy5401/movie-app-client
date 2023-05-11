import { call, take } from "redux-saga/effects";
import { authActions } from "./authSlice";
import { axiosMovieChill } from "../../utils/axiosConfig";

function* handleLogin(payload){
    console.log("handle login: ",payload);
    yield call(axiosMovieChill.post("http://localhost:3001/api/login", payload))
    
}

function* watchLoginFlow(){
    while(true){
        const isLoggedIn = localStorage.getItem('access_token');
        if(!isLoggedIn){
            const action = yield take(authActions.login.type);
            yield call(handleLogin,action.payload);
        }
    }
}

export default function* authSaga(){
    console.log("hello")
}