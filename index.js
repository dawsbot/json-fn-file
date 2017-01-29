'use strict';
const fs = require('fs');
const jsonfile = require('jsonfile');

module.exports = function (inputFile, outputFile, fn) {
  if (typeof inputFile !== 'string') {
    throw new TypeError(`inputFile must be string. Found ${typeof inputFile}`);
  }
  if (typeof outputFile !== 'string') {
    throw new TypeError(`outputFile must be string. Found ${typeof outputFile}`);
  }
  if (typeof fn === 'undefined') {
    fn = () => {};
  }

  const jsonContent = jsonfile.readFileSync(inputFile);
  return fs.writeFileSync(outputFile, fn(jsonContent), 'utf8');
};
