const axios = require('axios');
const APIError = require('../utils/APIError')
const httpStatus = require('http-status');
const { urls } = require('../../config/vars');


exports.getactivecities = async () => {
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

exports.searchloans = async (refid) => {
    try {
        var options = {
            method: 'post',
            url: `${urls.core.endpoint}${urls.core.searchloans}`,
            headers: {
                Authorization: urls.core.token,
                'Content-Type': 'application/json',
            },
            data: {
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

exports.searchusers = async (phone) => {
    try {
        var options = {
            method: 'post',
            url: `${urls.core.endpoint}${urls.core.searchusers}`,
            headers: {
                'Authorization': urls.core.token,
                'Content-Type': 'application/json'
            },
            data: {
                "user": phone,
                "selectquery": "phone"
            }
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

exports.unarchiveuser = async (phone) => {
    try {
        var options = {
            method: 'post',
            url: `${urls.core.referralendpoint}${urls.core.unarchiveuser}`,
            headers: {
                'Authorization': urls.core.token,
                'Content-Type': 'application/json'
            },
            data: {
                "phones": [phone]
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

exports.setascustomer = async (userid) => {
    try {
        var options = {
            method: 'post',
            url: `${urls.core.referralendpoint}${urls.core.setascustomer}`,
            headers: {
                'Authorization': urls.core.token,
                'Content-Type': 'application/json'
            },
            data: {
                "userid": userid,
                "roles": [1]
            }
        };
        const response = await axios(response);
        return response.data;
    } catch (error) {
        throw new APIError({
            status: (error.response ? error.response.status : httpStatus.INTERNAL_SERVER_ERROR),
            message: (error.response ? (error.response.Error || error.response.Usermsg) : error.message),
        });
    }
}