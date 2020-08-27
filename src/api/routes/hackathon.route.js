const express = require('express');
const controller = require('../controllers/hackathon.controller');
const router = express.Router();

router
  .route('/vandetails')
  /**
   * @api /api/hackathon/vandetails
   * @apiDescription Fetch Van Details
   * @apiVersion 1.0.0
   * @apiName Van Details
   * @apiGroup hackathon
   * @apiPermission
   *
   * @apiHeader {String} Authorization User's access token
   *
   * @apiSuccess {Array} object of van details
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   */
  .post(controller.vandetails);

router
  .route('/cities')
  /**
   * @api /api/hackathon/cities
   * @apiDescription Fetch active cities
   * @apiVersion 1.0.0
   * @apiName activecities
   * @apiGroup hackathon
   * @apiPermission
   *
   * @apiHeader {String} Authorization User's access token
   *
   * @apiSuccess {Array} object of van details
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   */
  .get(controller.getcities);

module.exports = router;