var assert = require('assert');
var currentOS = require('..');


describe('Linux Test Cases', function () {

  it('Failed with Windows', function () {
    assert.ok(!currentOS.isWindows);
  });

  it('Failed with MacOS', function () {
    assert.ok(!currentOS.isMacOS);
  });

  it('Success with Linux', function () {
    assert.ok(currentOS.isLinux);
  });
});