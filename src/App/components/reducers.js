import currentUser from './current-user';
import login from './login';

export const DefaultState = Object.assign(
    {},
    currentUser.DefaultState,
    login.DefaultState
);

export const Reducers = Object.assign(
    {},
    currentUser.Reducers,
    login.Reducers
);