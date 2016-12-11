import React from 'react';

export const Timestamp = ({}) => {
    const now = new Date();

    return (
        <div>{now.toString()}</div>
    );
};