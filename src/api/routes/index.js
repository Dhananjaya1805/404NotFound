const express = require('express');
const router = express.Router();
// const vandetails = require('')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * API Routes 
 */

module.exports = router;
