import { createAction } from 'redux-actions';

import core from '../../core'

export const types = {
    GET_CURRENT_USER: 'current-user/get-current-user'
};

const getCurrentUser = createAction(types.GET_CURRENT_USER, function() {
    return core.Adal.getCachedUser();
});

export default {
    getCurrentUser
}