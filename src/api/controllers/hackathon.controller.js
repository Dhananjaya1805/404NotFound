const httpStatus = require('http-status');
const CoreService = require('../services/core.service');
const PaymentService = require('../services/payment.service');
const APIError = require('../utils/APIError');
const { 
    find, 
    capitalize, 
    flatMapDeep,
    filter,
 } = require('lodash');
// const APIError = require('../../utils/APIError');

exports.getcities = async(req, res, next) => {
    try {
        const activecities = await CoreService.getactivecities();
        const city = find(activecities.cities, city => city.name == capitalize(req.query.city));
        if(city === undefined || city === null ){
            res.status(httpStatus.OK).send('service is NOT available in your city, Rupeek is hitting your city soon');
        }
        else
        res.status(httpStatus.OK).send(`service is available in your city, Customer Support number ${city.csphone}`);
    } catch (error) {
        console.log(error);
        return next(error);
    }
}

exports.vandetails = async(req, res, next) => {
    try {
        var vanCreated = true
        const loanpayments = await PaymentService.getcustomerloans(req.body.phone);
        if(loanpayments === undefined || loanpayments === null){
            throw new APIError({ status: httpStatus.OK, message: `LoanRequest not found for loanid`});
        }
        const customerrefid = loanpayments.user.refid;
        const loanrequest = await CoreService.searchloans(customerrefid);
        const loanfrompayments = flatMapDeep(loanpayments.user.loans);
        loanfrompayments.forEach( (loan) => {
            if(loan.statuscode < 5){
                if( loan.razorpayvan === "" || loan.razorpayvan === null ){
                    console.log(loan.coreid)
                    if( loan.coreid === "" || loan.coreid === null ){
                        loanrequest.forEach( (coreloanobj) => {
                            const coreloan = find(coreloanobj.loans, loan => { loan.lploanid === loan.loanid});
                            const reconrecovery = coreloan.loanamount - loan.loanamount; 
                             PaymentService.updateloandiffamt(coreloan.lploanid, reconrecovery)
                             .then((result) => {
                                console.log(result);
                            })
                            .catch((error) => {
                                throw new APIError({
                                    status: (error.response ? error.response.status : httpStatus.INTERNAL_SERVER_ERROR),
                                    message: (error.response ? (error.response.Error || error.response.Usermsg) : error.message),
                                  }); 
                            })

                            PaymentService.createvan(req.body.phone)
                            .then((result) => {
                                console.log(result);
                            })
                            .catch((error) => {
                                throw new APIError({
                                    status: (error.response ? error.response.status : httpStatus.INTERNAL_SERVER_ERROR),
                                    message: (error.response ? (error.response.Error || error.response.Usermsg) : error.message),
                                  }); 
                            })
                        });
                    }
                    else{
                        PaymentService.createvan(req.body.phone)
                        .then((result) => {
                            console.log(result);
                        })
                        .catch((error) => {
                            throw new APIError({
                                status: (error.response ? error.response.status : httpStatus.INTERNAL_SERVER_ERROR),
                                message: (error.response ? (error.response.Error || error.response.Usermsg) : error.message),
                              }); 
                        })
                    }
                }else {
                    vanCreated = false;
                }
           }
        });
        res.json({loanpayments, loanrequest})
        // res.status(httpStatus.OK).send( vanCreated ? 'Van details has been successfully created' : 'Van details is upto date.');
    } catch (error) {
        console.log(error);
        return next(error);
    }
}