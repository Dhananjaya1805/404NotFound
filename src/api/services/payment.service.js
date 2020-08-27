const axios = require('axios');
const httpStatus = require('http-status');
const APIError = require('../utils/APIError')
const { urls }  = require('../../config/vars');

exports.getcustomerloans = async (phone) => {
 try {
    const axios = require('axios');

    const options = {
    method: 'post',
    url: `${urls.payments.endpoint}${urls.payments.getcustomerloans}`,
    headers: { 
        'User-Agent': 'node.js',
        'Content-Type': 'application/json',
        Authorization: urls.payments.token,
    },
    data: { phone }
    };
    const response = await axios(options);
    return response.data
    } catch (error) {
        throw new APIError({
            status: (error.response ? error.response.status : httpStatus.INTERNAL_SERVER_ERROR),
            message: (error.response ? (error.response.Error || error.response.Usermsg) : error.message),
          }); 
    }
}

exports.createvan = async (phone) => {
    try {
        const options = {
            method: 'post',
            url: `${urls.payments.endpoint}${urls.payments.getcustomerloans}`,
            headers: { 
              Authorization: urls.payments.token, 
              'Content-Type': 'application/json', 
            },
            data : { phone }
          };
          const response = await axios(options);
          return response.data;
    } catch (error) {
        throw new APIError({
            status: (error.response ? error.response.status : httpStatus.INTERNAL_SERVER_ERROR),
            message: (error.response ? (error.response.Error || error.response.Usermsg) : error.message),
          }); 
    }
}

exports.updateloandiffamt = async (loanid, loanamountdiff) => {
    try {
        var options = {
            method: 'post',
            url: 'https://test.api.rupeek.com/accounts/api/admin/updateloandifference',
            headers: { 
              'Authorization': urls.payments.token, 
              'Content-Type': 'application/json', 
            },
        };
        const response = await axios(options);
        return response.data;
    } catch (error) {
        throw new APIError({
            status: (error.response ? error.response.status : httpStatus.INTERNAL_SERVER_ERROR),
            message: (error.response ? (error.response.Error || error.response.Usermsg) : error.message),
          }); 
    }
}