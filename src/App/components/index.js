import {Actions} from './actions';
import {DefaultState, Reducers} from './reducers';

import currentUser from './current-user';
import loadValues from './load-values';
import login from './login';
import timestamp from './time-stamp';

export default {
    Actions,
    CurrentUser : currentUser.CurrentUser,
    DefaultState,
    LoadValues: loadValues.LoadValues,
    Login: login.Login,
    Reducers,
    Timestamp: timestamp.TimeStamp
}