import React from 'react';
import { connect } from 'react-redux';

import {default as Actions} from './actions';
import { LoadValues as Layout } from './load-values';

const mapStateToProps = (state, ownProps) => {
    return {

    }
};

const mapDipatchToProps = (dispatch, ownProps) => {
    return {
        onLoadValues: () => dispatch(Actions.loadValues())
    }
};

export const LoadValues = connect(mapStateToProps, mapDipatchToProps)(Layout);