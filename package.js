Package.describe({
  name: 'maxkferg:temp',
  summary: 'Create tracked temporary files on the server',
  version: '1.0.0',
  git: 'https://github.com/NitroLabs/meteor-temp'
});

Npm.depends({
	'temp':'0.8.1',
})

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Temp');
  api.addFiles('temp.js','server');
});