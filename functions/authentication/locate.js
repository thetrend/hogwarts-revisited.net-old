const validator = require('validator');
const errorMessage = require('./errorMessage').handler;
const { query, Client } = require('faunadb');

const client = new Client({
  secret: process.env.FAUNADB_GUEST_SECRET
});

const handler = async (event) => {
  const { param, term } = event.queryStringParameters;

  if (!param ||
    !['username', 'email'].includes(param) ||
    !term ||
    !validator.matches(term, /^[0-9a-zA-Z_.-]+$/)
  ) {
    return errorMessage('Missing parameters');
  }

  try {
    const search = await
      client.query(
        query.Count(
          query.Match(
            query.Index(`users_by_${param}`),
            term
          )
        )
      ).then(ret => {
        if (!ret) {
          return false;
        }
        return true;
      });
    return errorMessage(search, 200);
  } catch (error) {
    console.log(error);
    return errorMessage('Critical server error', 500);
  }
}

module.exports = { handler }