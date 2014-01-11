# bwip
 [![Build Status](https://secure.travis-ci.org/heartyoh/bwip.png?branch=master)](http://travis-ci.org/heartyoh/bwip)

This project rocks and uses MIT-LICENSE.

This project is for modular of BWIP library.
It supports packages for nodejs, bower & rails.

As a gem for rails provides:

  * bwip 0.6

As a package for nodejs provides:

  * bwip 0.6

As a package for bower provides:

  * bwip 0.6

## Getting Started
### Install the nodejs module with: `npm install bwip`

```javascript
var bwip = require('bwip');

var bcid = 'code128';
var scale = 4;
var rotate = 'L';
var text = '^FNC1011234567890';
var options = {
	alttext: '(01)01234567890',
	parsefnc: true
};

var png = bwip.png(bcid, text, scale, rotate, options);
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
 function : bwip.png(bcid, text, scale, rotate, options);

 'bcid' is the name of the bwip-js barcode rendering function e.g.

 'text' is the text to be bar coded.

 'scale' is an integer value from 1 .. 10.  Default is 2.

 'rotate' takes the values: 
		N	normal, unrotated (the default)
		R	clockwise, 90 rotation
		L	counter-clockwise, 90 rotation
		I	inverted, 180 rotation

 'options' is the object what can take any of the bar code options defined in the BWIPP documentation.

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

Feel free to open an issue ticket if you find something that could be improved. A couple notes:

* If the bwip-js scripts are outdated (i.e. maybe a new version of bwip-js was released yesterday), feel free to open an issue and prod us to get that thing updated. However, for security reasons, we won't be accepting pull requests with updated bwip-js scripts.

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Hearty, Oh. Licensed under the MIT license.
