import React from 'react';

import core from '../core';

const onClick = () => {
    core.Adal.login();
};

export const Login = ({userInfo}) => {

    return (
        <div>
            <button onclick={onClick}>Current User</button>
            <button onclick={onClick}>Clear User Info</button>
            <pre>
                {userInfo}
            </pre>
        </div>
    );
};

Login.propTypes = {
    userInfo: React.PropTypes.string
};