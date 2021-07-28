const process = require('process');
const validator = require('validator');
const { query, Client } = require('faunadb');
const errorMessage = require('./errorMessage').handler;

const client = new Client({
  secret: process.env.FAUNADB_GUEST_SECRET
});

const handler = async (event) => {
    const { email, username, password } = JSON.parse(event.body);

  if (!email || !username || !password) {
    return errorMessage('Registration Attempt Failure');
  } else {
    if (!validator.isEmail(email)) {
      return errorMessage('Invalid email');
    } else if (!validator.matches(username, /^[0-9a-zA-Z_.-]+$/)) {
      return errorMessage('Username can only contain alphanumeric characters, underscores, hyphens, and periods.');
    } else if (!validator.isStrongPassword(password)) {
      return errorMessage(validator.isStrongPassword(password, { returnScore: true }));
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
    if (error.method !== 'POST') {
      return errorMessage('Forbidden');
    } else if (error.errorMessage === 'instance not unique') {
      return errorMessage('Email or username already exists');
    } else {
      return errorMessage('Critical server error', 500);
    }
  }
}

module.exports = { handler }