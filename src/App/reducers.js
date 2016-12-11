import { handleActions } from 'redux-actions';

import components from './components';

const defaultState = Object.assign(
    {},
    components.DefaultState
);

const reducers = Object.assign(
    {},
    components.Reducers
);

export default handleActions(reducers, defaultState);