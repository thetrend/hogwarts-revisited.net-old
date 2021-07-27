const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');

const handler = async (event, context) => {
  try {
    const method = event.httpMethod;

    const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
    const segments = path.split('/').filter(Boolean);

    const endpoint = segments[segments.length - 1];

    switch (endpoint) {
      case 'signup':
        if (method !== 'POST') {
          return {
            statusCode: 403,
            body: JSON.stringify({
              message: 'Forbidden'
            })
          }
        };
        return signup.handler(event, context);
      case 'login':
        if (method !== 'POST') {
          return {
            statusCode: 403,
            body: JSON.stringify({
              message: 'Forbidden'
            })
          }
        };
        return login.handler(event, context);
      case 'logout':
        // return logout.handler(event, context);
        if (method !== 'GET') {
          return {
            statusCode: 403,
            body: JSON.stringify({
              message: 'Forbidden'
            })
          }
        };
        return {
          statusCode: 200,
          body: JSON.stringify({
            message: 'This is the logout endpoint'
          })
        };
      default:
        return {
          statusCode: 403,
          body: JSON.stringify({
            message: 'Forbidden'
          })
        }
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }