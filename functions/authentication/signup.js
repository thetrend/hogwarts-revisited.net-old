const process = require('process');

const { query, Client } = require('faunadb');

const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const handler = async (event) => {
  const { email, username, password } = JSON.parse(event.body);

  if (!email || !username || !password) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Registration Failure'
      })
    }
  }

  try {
    const response = await
      client.query(
        query.Create(
          query.Collection('users'),
          {
            credentials: { password },
            data: {
              email,
              username,
              registerDate: Date.now()
            }
          }
        )
      );

    console.log('success', response);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    console.log('error', error);
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    }
  }
}

module.exports = { handler }