/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:9000/',
    token: '3c19f527d55c9163a850d047f2721596bf04b628',
    options: {},
  },
  () => {
    console.log('>> Sonar analysis is done!');
  },
);
