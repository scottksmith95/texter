#Texter

Send SMS messages using Twilio from Node

##Installation

````
npm install texter -g
````

##Configuration

Included in the package is ````config.js```` that will allow you to configure Texter with the phone number you want to send texts from along with your Twilio Account Sid and Auth Token.

````
module.exports = {
    fromNumber: ''
  , accountSid: ''
  , authToken: ''
}
````

If you would prefer to not configure Texter, you can pass these parameters on the command line when executing a new text message.

##Usage

````
node texter {ToNumber} '{Message}'
````

````
node texter {ToNumber} '{Message}' {FromNumber}
````

````
node texter {ToNumber} '{Message}' {FromNumber} {TwilioAccountSid}
````

````
node texter {ToNumber} '{Message}' {FromNumber} {TwilioAccountSid} {TwilioAuthToken}
````

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
