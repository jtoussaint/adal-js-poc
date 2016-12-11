import { createAction } from 'redux-actions';

import core from '../../core'

export const types = {
    LOGIN: 'login/login'
};

const login = createAction(types.LOGIN, function() {
    return core.Adal.login();
});

export default {
    login
}