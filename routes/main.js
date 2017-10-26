const express = require('express');

const main = express.Router();


/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index');
});

main.get('/services', (req, res) => {
  res.render('pages/services');
});

main.get('/about', (req, res) => {
  res.render('pages/about');
});

main.get('/review', (req, res) => {
  res.render('pages/review');
});

main.get('/contact', (req, res) => {
  res.render('pages/contact');
});

main.get('/appointment', (req, res) => {
  res.render('pages/appointment');
});

main.get('/*', (req, res) => {
  res.render('pages/404');
});

module.exports = main;
