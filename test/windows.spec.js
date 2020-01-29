var assert = require('assert');
var currentOS = require('..');


describe('Windows Test Cases', function () {

  it('Success with Windows', function () {
    assert.ok(currentOS.isWindows);
  });

  it('Failed with MacOS', function () {
    assert.ok(!currentOS.isMacOS);
  });

  it('Failed with Linux', function () {
    assert.ok(!currentOS.isLinux);
  });
});