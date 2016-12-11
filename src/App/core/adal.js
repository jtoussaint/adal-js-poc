const config = {
    instance: 'https://login.microsoftonline.com/',
    tenant: '57138e6e-9629-4661-86e3-1e31e09c4d12',
    clientId: '5f1de639-3137-44d8-b63e-479b0a6584ac',
    postLogoutRedirectUri: window.location.origin,
    cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
};

const authContext = new AuthenticationContext(config);

export default authContext;