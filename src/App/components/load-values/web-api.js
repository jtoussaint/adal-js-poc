import core from '../../core';

export const fetchValues = () => core.Request.get(`/api/values/5`);
