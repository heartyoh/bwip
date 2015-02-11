# bwip
[![Build Status](https://secure.travis-ci.org/heartyoh/bwip.png?branch=master)](http://travis-ci.org/heartyoh/bwip)

This project rocks and uses MIT-LICENSE.

This project is referencing the bwip-js project (https://code.google.com/p/bwip-js/) version 0.5.

This project is for modular of BWIP library.
It supports packages for nodejs, bower & rails.

As a gem for rails provides:

  * bwip 0.7.1

As a package for nodejs provides:

  * bwip 0.7.1

As a package for bower provides:

  * bwip 0.7.1

## Online Service

We are here to serve : Hatio, Lab.

You just try to show simple barcode image by request.

http://barcode.hatiolab.com:81/?bcid=code128&text=^FNC1011234567890&wscale=4&hscale=4&rotate=L&parsefnc&alttext=(01)01234567890

## Getting Started
### Install the nodejs module with:
`npm install bwip`

```javascript
var bwip = require('bwip');

var bcid = 'code128';
var wscale = 4;
var hscale = 4;
var rotate = 'L';
var text = '^FNC1011234567890';
var options = {
	alttext: '(01)01234567890',
	parsefnc: true
};

var png = bwip.png(bcid, text, wscale, hscale, rotate, options);
```

### Sample Barcode Image Server using nodejs
```
var url = require('url');
var http = require('http');
var bwip = require('bwip');

function error(res, status, message) {
	res.writeHead(status, { 'Content-Type':'text/plain' });
	res.end(message, 'ascii');
}

http.createServer(function(req, res) {

	var args = url.parse(req.url, true).query;

	// Set the defaults
    var wscale  = parseInt(args.wscale, 10) || 2;
    var hscale  = parseInt(args.hscale, 10) || 2;
	var rotate = args.rotate || 'N';
	var bcid   = args.bcid;
	var text   = args.text;

	if (!text)
		return error(res, 400, 'Bar code text not specified.\r\n');
	if (!bcid)
		return error(res, 400, 'Bar code type not specified.\r\n');

	// Remove the non-BWIPP options
    delete args.wscale;
    delete args.hscale;
	delete args.rotate;
	delete args.text;
	delete args.bcid;

	// Return a PNG-encoded image
	var png = bwip.png(bcid, text, wscale, hscale, rotate, args);

	res.writeHead(200, { 'Content-Type':'image/png' });
	res.end(png, 'binary');
}).listen(3030);
```

### Install the rails module with Gemfile

```ruby
gem "bwip"
```

And run `bundle install`. The rest of the installation depends on
whether the asset pipeline is being used.

### Rails 3.1 or greater (with asset pipeline *enabled*)

The bwip files will be added to the asset pipeline and available for you to use. If they're not already in `app/assets/javascripts/application.js` by default, add these lines:

```js
//= require bwip-min
```

## Documentation
### for Node
 function : bwip.png(bcid, text, wscale, hscale, rotate, options);

 'bcid' is the name of the bwip-js barcode rendering function e.g.

 'text' is the text to be bar coded.

 'wscale' is an integer value from 1 .. 10.  Default is 2.

 'hscale' is an integer value from 1 .. 10.  Default is 2.

 'rotate' takes the values: 
		N	normal, unrotated (the default)
		R	clockwise, 90 rotation
		L	counter-clockwise, 90 rotation
		I	inverted, 180 rotation

 'options' is the object what can take any of the bar code options defined in the BWIPP documentation.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

Feel free to open an issue ticket if you find something that could be improved. A couple notes:

* If the bwip-js scripts are outdated (i.e. maybe a new version of bwip-js was released yesterday), feel free to open an issue and prod us to get that thing updated. However, for security reasons, we won't be accepting pull requests with updated bwip-js scripts.

## Release History

### 0.7.1
- Support compressed barcode image

### 0.7.0
- Support width scale and height scale separately (API modified)
```
	[before 0.7] 
    bwip.png(bcid, text, scale, rotate, options)
    bwip.base64(bcid, text, scale, rotate, options)
    
    [after 0.7] 
    bwip.png(bcid, text, wscale, hscale, rotate, options)
    bwip.base64(bcid, text, wscale, hscale, rotate, options)
```

## License
Copyright (c) 2014 Hatio, Lab. Licensed under the MIT license.
