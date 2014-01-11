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
bwip.awesome(); // "awesome"
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
//= require bwip-canvas-min
```

## Documentation
_(Coming soon)_

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
