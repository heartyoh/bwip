# Bwip

This project rocks and uses MIT-LICENSE.

Bwip! For Rails! So great.

This gem provides:

  * bwip-js 0.5

## Installation

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

You're done!

## Contributing

Feel free to open an issue ticket if you find something that could be improved. A couple notes:

* If the bwip-js scripts are outdated (i.e. maybe a new version of bwip-js was released yesterday), feel free to open an issue and prod us to get that thing updated. However, for security reasons, we won't be accepting pull requests with updated bwip-js scripts.

## Acknowledgements

Many thanks are due to all of bwip-js.

Copyright [Hearty, Oh](http://heartyoh.net), released under the MIT License.
