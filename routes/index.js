const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('guest/home');
});

router.get('/signup', (req, res) => {
  res.render('guest/signup');
});

router.get('/login', (req, res) => {
  res.render('guest/login');
});

module.exports = router;