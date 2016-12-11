import React from 'react';
import { connect } from 'react-redux';

import {default as Actions} from './actions';
import { CurrentUser as Layout } from './current-user';

import core from '../../core'

const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.user
    }
};

const mapDipatchToProps = (dispatch, ownProps) => {

    return {
        onGetCurrentUser: function()  {            
            dispatch(Actions.getCurrentUser());
        }
    }
};

export const CurrentUser = connect(mapStateToProps, mapDipatchToProps)(Layout);