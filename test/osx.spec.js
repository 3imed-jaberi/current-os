var assert = require('assert');
var currentOS = require('..');


describe('MacOS Test Cases', function () {

  it('Failed with Windows', function () {
    assert.ok(!currentOS.isWindows);
  });

  it('Success with MacOS', function () {
    assert.ok(currentOS.isOSX);
  });

  it('Failed with Linux', function () {
    assert.ok(!currentOS.isLinux);
  });
});