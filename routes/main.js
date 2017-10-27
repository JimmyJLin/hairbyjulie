const express = require('express');
const data = require('../app/data/data.json');

const main = express.Router();


/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index', { data });
});

main.get('/services', (req, res) => {
  res.render('pages/services');
});

main.get('/appointment', (req, res) => {
  res.render('pages/appointment');
});

main.get('/*', (req, res) => {
  res.render('pages/404');
});

module.exports = main;
