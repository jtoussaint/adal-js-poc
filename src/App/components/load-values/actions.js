import { createAction } from 'redux-actions';

import * as WebApi from './web-api';

export const types = {
    GET_VALUES: 'load-values/fetch-values'
};

const loadValues = createAction(types.GET_VALUES, WebApi.fetchValues);

export default {
    loadValues
}