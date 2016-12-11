import * as Actions from './actions';

const onGetCurrentUser = (state, action) => Object.assign({}, state, {user: action.payload });

export const DefaultState = {
    user: {}
};

export const Reducers = {
    [Actions.types.GET_CURRENT_USER]: onGetCurrentUser
}