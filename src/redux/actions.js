import axios from 'axios';
import * as types from './actionTypes';

export const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})

export const loadUser = () => {
    return function(dispatch) {
        axios.get('http://127.0.0.1:3003/students')
        .then((res) => {
            console.log('Response_____',res.data);
            dispatch(getUsers(res.data))
        }).catch(err => {
            console.log(err);
        });
    }
}

