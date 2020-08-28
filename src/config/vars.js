const path = require('path');

module.exports = {
    urls: {
        rupeek: {
            endpoint: `http://test.rupeek.com`,
            jwtvalidate: '/api/account/jwtvalidate',
        },
        core: {
            token: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU5YmZiM2ExNmU2ZDg1Mjc3YjU1ZGEyZCIsImNyZWF0ZWRBdCI6IjIwMTctMDktMThUMTE6NTM6MDUuMTI1WiIsImlhdCI6MTU4MTI2NDEzNywiZXhwIjoxNjEyODAwMTM3LCJhdWQiOiJydXBlZWsuY29tIiwiaXNzIjoicnVwZWVrLmNvbSJ9.MisrYfLbncQfu0ofczSS_yLw0WKN8Tbwizt9l90ViWA', 
            //`JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVjYTJmOWJhZDIwYzVhNzIzZmZmNjFkZiIsImNyZWF0ZWRBdCI6IjIwMTktMDQtMDJUMDU6NTc6MTQuNzg1WiIsImlhdCI6MTU5MzI2Mjc1MiwiZXhwIjoxNjI0Nzk4NzUyLCJhdWQiOiJydXBlZWsuY29tIiwiaXNzIjoicnVwZWVrLmNvbSJ9.QOHcN23fGnPiKxD_AWxqWGG3bRbIoEUkKw3NEgmj9uM`,
            endpoint: `https://test.rupeek.com`,
            referralendpoint: `https://test.referral.rupeek.com`,
            getworkingcities: '/api/public/getCities',
            searchloans: '/api/support/searchloans',
            searchusers: '/api/v2/support/searchusers',
            unarchiveuser: `/api/techsupport/unarchiveemployee`,
            setascustomer: '/api/techsupport/edituserroles'
        },
        payments: {
            token: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU5YmZiM2ExNmU2ZDg1Mjc3YjU1ZGEyZCIsImNyZWF0ZWRBdCI6IjIwMTctMDktMThUMTE6NTM6MDUuMTI1WiIsImlhdCI6MTU4MTI2NDEzNywiZXhwIjoxNjEyODAwMTM3LCJhdWQiOiJydXBlZWsuY29tIiwiaXNzIjoicnVwZWVrLmNvbSJ9.MisrYfLbncQfu0ofczSS_yLw0WKN8Tbwizt9l90ViWA', 
            //'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkMTliNDBkZWFhZGJhMzUxNTlmNTZhOSIsImNyZWF0ZWRBdCI6IjIwMTktMDctMDFUMDc6MTk6NDEuNjA4WiIsImlhdCI6MTU4MzMxNTA0NSwiZXhwIjoxNjE0ODUxMDQ1LCJhdWQiOiJydXBlZWsuY29tIiwiaXNzIjoicnVwZWVrLmNvbSJ9.EnzGsb8zFlkp2w6WJDXuZm72yPsr1F2au0x-hWYQbrc',
            endpoint: 'https://api-beta.rupeek.com/pay',
            getcustomerloans: '/api/search/v2/getcustomerloans',
            createvan: 'api/razorpay/createVanNumbers',
            updateloandifference: '/api/admin/updateloandifference',
        },
    }
}