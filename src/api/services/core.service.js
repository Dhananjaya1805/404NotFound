const axios = require('axios');
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


