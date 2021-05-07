import * as actions from './actionTypes';

export const usernameAdded = username => ({
    type: actions.USERNAME_ADDED,
    payload: {
        username: username
    }
});