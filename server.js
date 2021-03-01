const express = require('express');
const app = express();
const port = 3000;
const nunjucks = require('nunjucks');

nunjucks.configure('./templates', {
  autoescape: true,
  express: app
});
app.set('view engine', 'njk');

app.use('/assets', express.static('./static/assets'));

app.use('/', require('./routes'));

app.listen(port, () => {
console.log(`Project listening on port ${port}.`);
});