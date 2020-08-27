const httpStatus = require('http-status');
const CoreService = require('../services/core.service');
const { find, capitalize } = require('lodash');
// const APIError = require('../../utils/APIError');

exports.getcities = async(req, res, next) => {
    try {
        const activecities = await CoreService.getactivecities();
        const city = find(activecities.cities, city => city.name == capitalize(req.query.city));
        if(city === undefined || city === null ){
            res.status(httpStatus.NOT_FOUND).json({ info: 'service is NOT available in your city, Rupeek is hitting your city soon' });
        }
        else
        res.status(httpStatus.OK).json({
            info: `service is available in your city, Customer Support number ${city.csphone}`,
        });
    } catch (error) {
        console.log(error);
        return next(error);
    }
}

exports.vandetails = async(req, res, next) => {
    try {
    } catch (error) {
        console.log(error);
        return next(error);
    }
}