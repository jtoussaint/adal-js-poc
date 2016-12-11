import React from 'react';

export const TimeStamp = ({}) => {
    const now = new Date();

    return (
        <div>{now.toString()}</div>
    );
};