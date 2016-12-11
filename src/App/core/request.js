import fetch from 'isomorphic-fetch';

import {default as Adal} from './adal';

const defaults = {
  
};

const requestFactory = (method = 'GET') => (uri, body, opts = {}) => {
  const init = Object.assign({}, defaults, opts, { method });
  init.body = body ? JSON.stringify(body) : undefined;

  //TODO: Wrap in a Promise
  Adal.acquireToken('5f1de639-3137-44d8-b63e-479b0a6584ac', function(error, token) {
    if(error || !token) {
        console.log(error);
        return;
    }

    init.headers = new Headers({
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8',
        'Authorization': `Bearer ${token}`
    });

    fetch(uri, init)
    .then(response => response.json())
    .catch(err => console.log('Error:', err));
  });
};

const request = requestFactory();
request.get = requestFactory();
request.post = requestFactory('POST');
request.put = requestFactory('PUT');
request.delete = requestFactory('DELETE');
request.head = requestFactory('HEAD');

export default request;