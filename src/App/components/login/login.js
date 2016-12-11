import React from 'react';

export const Login = ({onLogin}) => {

    return (
        <button onClick={onLogin}>Login</button>
    );
};

Login.propTypes = {
    onLogin: React.PropTypes.func.isRequired
};