import * as actions from './actionTypes';

function reducer(state = [],action) {
    if (action.type === actions.USERNAME_ADDED) {
        return [
            ...state,
            {
              username: action.payload.username
            }
        ];
    }

    return state;
}

export default reducer;