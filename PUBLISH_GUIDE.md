# gem build

1. modify version number(bump up) in lib/bwip/version.rb
2. $grunt build
3. $gem build bwip.gemspec
4. $gem push bwip-{version}.gem

# node package build

1. modify version number(bump up) in package.json
2. $grunt build
3. check bwip.js, bwip-min.js
4. npm publish
