const bsCapabilities = require('browserstack-capabilities');

const createCapabilities = bsCapabilities(
  process.env.BROWSERSTACK_USER,
  process.env.BROWSERSTACK_ACCESS_KEY
).create;

const capabilities = createCapabilities([
  {
    browser: 'firefox',
    browser_version: ['59.0'],
    os: ['Windows'],
    os_version: ['10']
  }
]);

capabilities.forEach(capability => {
  capability.resolution = '1280x1024';
});

module.exports = capabilities;
