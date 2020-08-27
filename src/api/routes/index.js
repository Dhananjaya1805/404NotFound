const express = require('express');
const router = express.Router();
const hackathonAPIs = require('./hackathon.route')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * API Routes 
 */
router.use('/api/hackathon', hackathonAPIs);

module.exports = router;
