const path = require('path');

module.exports = {
    urls: {
        rupeek: {
            endpoint: `http://test.rupeek.com`,
            jwtvalidate: '/api/account/jwtvalidate',
            getgoldpricebydate: '/api/public/getgoldrate',
        },
        core: {
            token: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVjYTJmOWJhZDIwYzVhNzIzZmZmNjFkZiIsImNyZWF0ZWRBdCI6IjIwMTktMDQtMDJUMDU6NTc6MTQuNzg1WiIsImlhdCI6MTU5MzI2Mjc1MiwiZXhwIjoxNjI0Nzk4NzUyLCJhdWQiOiJydXBlZWsuY29tIiwiaXNzIjoicnVwZWVrLmNvbSJ9.QOHcN23fGnPiKxD_AWxqWGG3bRbIoEUkKw3NEgmj9uM`,
            endpoint: `https://core.rupeek.com`,
            getworkingcities: '/api/public/getCities',
        },
        payments: {
            token: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVkMTliNDBkZWFhZGJhMzUxNTlmNTZhOSIsImNyZWF0ZWRBdCI6IjIwMTktMDctMDFUMDc6MTk6NDEuNjA4WiIsImlhdCI6MTU4MzMxNTA0NSwiZXhwIjoxNjE0ODUxMDQ1LCJhdWQiOiJydXBlZWsuY29tIiwiaXNzIjoicnVwZWVrLmNvbSJ9.EnzGsb8zFlkp2w6WJDXuZm72yPsr1F2au0x-hWYQbrc',
            host: 'rupeek.payments-prod.com',
            endpoint: 'https://api.rupeek.com',
            getcustomerloans: '/api/search/v2/getcustomerloans',
        },
    }
}