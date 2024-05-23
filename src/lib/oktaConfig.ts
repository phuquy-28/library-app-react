export const oktaConfig = {
    clientId: '0oafdjxv0qQ0C59a85d7',
    issuer: 'https://dev-08116315.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scope: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}