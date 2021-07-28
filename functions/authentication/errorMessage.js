const handler = (message, code = 400) => {
  return {
    statusCode: code,
    body: JSON.stringify({
      message
    })
  }
};

module.exports = { handler }