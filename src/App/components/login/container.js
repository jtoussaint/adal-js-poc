import React from 'react';
import { connect } from 'react-redux';

import {default as Actions} from './actions';
import { Login as Layout } from './login';

const mapStateToProps = (state, ownProps) => {
    return {

    }
};

const mapDipatchToProps = (dispatch, ownProps) => {
    return {
        onLogin: function() {
            return dispatch(Actions.login());
        }
    }
};

export const Login = connect(mapStateToProps, mapDipatchToProps)(Layout);