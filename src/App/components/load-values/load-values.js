import React from 'react';

export const LoadValues = ({onLoadValues}) => {

    return (
        <button onClick={onLoadValues}>Click Me!</button>
    );
};

LoadValues.propTypes = {
    onLoadValues: React.PropTypes.func.isRequired
};