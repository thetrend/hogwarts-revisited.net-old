const errorMessage = require('./errorMessage').handler;
const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const locate = require('./locate');

const handler = async (event, context) => {
  try {
    const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
    const segments = path.split('/').filter(Boolean);
    const endpoint = segments[segments.length - 1];

    switch (endpoint) {
      case 'signup':
        return signup.handler(event, context);
      case 'login':
        return login.handler(event, context);
      case 'logout':
        return logout.handler(event, context);
      case 'locate':
        return locate.handler(event, context);
      default:
        return errorMessage('Forbidden');
    }
  } catch (error) {
    console.log(error);
    return errorMessage('Critical server error', 500);
  }
}

module.exports = { handler }