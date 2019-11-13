import {combineReducers} from "redux";
import commentReducer from 'reducers/comments';
import authReducer from './auth';

export default combineReducers({
    comments: commentReducer,
    auth: authReducer
});

