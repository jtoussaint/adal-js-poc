import currentUser from './current-user';
import login from './login';

export const Actions = Object.assign(
    {},
    currentUser.Actions,
    login.Actions
);