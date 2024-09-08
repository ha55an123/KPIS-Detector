const express = require('express');
const OAuth2 = require('express-oauth2');

const app = express();

const oauth2 = new OAuth2({
  clientId: 'client_id',
  clientSecret: 'client_secret',
  authorizationUrl: 'https://example.com/oauth2/authorize',
  tokenUrl: 'https://example.com/oauth2/token'
});

app.use(oauth2.middleware());

app.get('/protected', oauth2.authenticate(), (req, res) => {
  res.json({ message: 'Hello, authenticated user!' });
});
