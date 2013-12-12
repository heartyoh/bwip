$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "bwip/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "bwip"
  s.version     = Bwip::VERSION
  s.authors     = ["Hearty, Oh"]
  s.email       = ["heartyoh@gmail.com"]
  s.homepage    = "http://github.com/heartyoh/bwip"
  s.summary     = "A simple gem for bwip-js with rails"
  s.description = "This gem provides google code bwip-js for your Rails 3 application."
  s.license     = "MIT"

  s.required_rubygems_version = ">= 1.3.6"
  
  s.add_dependency "railties", ">= 3.0", "< 5.0"
  
  s.files = `git ls-files`.split("\n")
  s.executables  = `git ls-files -- bin/*`.split("\n").map { |f| File.basename(f) }
  s.require_path = 'lib'
end
