const process = require('process');

const { query, Client } = require('faunadb');

const client = new Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

const handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  if (!email || !password) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Login Failure'
      })
    }
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
    return {
      statusCode: 400,
      body: JSON.stringify(error),
    }
  }
}

module.exports = { handler }