var https = require('https');
var querystring = require('querystring');
var config = require('./config');

var toNumber = process.argv[2];
var message = process.argv[3];
var fromNumber = !process.argv[4] ? config.fromNumber : process.argv[4];
var accountSid = !process.argv[5] ? config.accountSid : process.argv[5];
var authToken = !process.argv[6] ? config.authToken : process.argv[6];

var data = querystring.stringify({
	From: fromNumber,
	To: toNumber,
	Body: message
});

var options = {
    host: 'api.twilio.com',
    port: 443,
    path: '/2010-04-01/Accounts/' + accountSid + '/Messages',
    method: 'POST',
    auth: accountSid + ':' + authToken,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};

var req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
    	if (res.statusCode >= 400) {
        	console.log('body: ' + chunk);
        } else {
        	console.log('Message sent');
        }
    });
});

req.write(data);
req.end();