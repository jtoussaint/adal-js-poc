import React from 'react';

import components from '../components';

export const Home = ({}) => {

    return (
        <div>
            <components.Timestamp/>
            <hr/>
            <components.Login/>
            <components.LoadValues/>
            <components.CurrentUser />
        </div>
    );
};

Home.propTypes = {

};