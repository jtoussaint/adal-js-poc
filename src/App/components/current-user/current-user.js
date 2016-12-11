import React from 'react';

export const CurrentUser = ({onGetCurrentUser, userInfo}) => {

    const userJson = JSON.stringify(userInfo, undefined, 2);

    return (
        <span>
            <button onClick={onGetCurrentUser}>Get Current User</button>
            <button>Clear User Info</button>
            <pre>
                {userJson}
            </pre>
        </span>
    );
};

CurrentUser.propTypes = {
    onGetCurrentUser: React.PropTypes.func.isRequired,    
    userInfo: React.PropTypes.object
};