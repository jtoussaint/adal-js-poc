import React from 'react';
import ReactDOM from 'react-dom';

import components from 'components';

import core from 'core';

console.log(components);

ReactDOM.render(
    <div>
        <components.Timestamp/>
    </div>,
    document.getElementById('container')
);