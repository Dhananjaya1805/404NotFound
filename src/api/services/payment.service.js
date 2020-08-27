const axios = require('axios');
const httpStatus = require('http-status');
const { urls }  = require('../../config/vars');

exports.getcustomerloans = async (phone) => {
 try {
    var axios = require('axios');

    var config = {
    method: 'post',
    url: `${urls.payments.endpoint}${urls.payments.getcustomerloans}`,
    headers: { 
        Authorization: urls.payments.token,
        'Content-Type': 'application/json', 
        Host: urls.payments.host,
    },
    data: { phone }
    };

    } catch (error) {
        throw new APIError({
            status: (error.response ? error.response.status : httpStatus.INTERNAL_SERVER_ERROR),
            message: (error.response ? (error.response.Error || error.response.Usermsg) : error.message),
          }); 
    }
}