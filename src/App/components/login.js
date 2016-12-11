import React from 'react';

import core from '../core';

const onClick = () => {
    core.Adal.login();
};

export const Login = ({}) => {

    return (
        <button onclick={onClick}>Login</button>
    );
};