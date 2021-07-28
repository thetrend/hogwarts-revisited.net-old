const process = require('process');
const { query, Client } = require('faunadb');
const errorMessage = require('./errorMessage').handler;

const client = new Client({
  secret: process.env.FAUNADB_GUEST_SECRET
});

const handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  if (!email || !password) {
    return errorMessage('Login Attempt Failure');
  }

  try {
    const response = await
      client.query(
        query.Login(
          query.Match(
            query.Index('users_by_email'),
            email),
          { password }
        )
      );
    console.log('success', response);
    return {
      statusCode: 200,
      body: JSON.stringify({
        secret: response.secret
      }),
    }
  } catch (error) {
    console.log('error', error);
    return errorMessage('Critical server error', 500);
  }
}

module.exports = { handler }