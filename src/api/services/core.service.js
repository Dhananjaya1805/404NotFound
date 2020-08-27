const axios = require('axios');
const APIError = require('../utils/APIError')
const httpStatus = require('http-status');
const { urls }  = require('../../config/vars');


exports.getactivecities = async() => { 
 try {
    const options = {
        method: 'get',
        url: `${urls.core.endpoint}${urls.core.getworkingcities}`,
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': urls.core.token, 
        }
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

exports.searchloans = async(refid) => {
    try {
    var options = {
        method: 'post',
        url:`${urls.core.endpoint}${urls.core.searchloans}`,
        headers: { 
            Authorization: urls.core.token, 
            'Content-Type': 'application/json', 
        },
        data : {
            customerid: refid
        }
    };
    const reponse = await axios(options);
    return reponse.data  
    } catch (error) {
        throw new APIError({
            status: (error.response ? error.response.status : httpStatus.INTERNAL_SERVER_ERROR),
            message: (error.response ? (error.response.Error || error.response.Usermsg) : error.message),
          }); 
    }
}


