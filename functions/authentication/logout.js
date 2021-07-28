const process = require('process');
const validator = require('validator');
const { query, Client } = require('faunadb');
const errorMessage = require('./errorMessage').handler;

const client = new Client({
  secret: process.env.FAUNADB_GUEST_SECRET,
});

const handler = async (event) => {
  try {
    const response = 'This is the logout endpoint';
    console.log('success', response);
    return errorMessage('OK', 200);
  } catch (error) {
    console.log('error', error);
    return errorMessage('Critical server error', 500);
  }
}

module.exports = { handler }