Package.describe({
  name: 'lukemadera:string',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Light weight string functions such as generating a random X length string',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/lukemadera/meteor-string',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.addFiles('string.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lukemadera:string');
  api.addFiles('string-tests.js');
});
