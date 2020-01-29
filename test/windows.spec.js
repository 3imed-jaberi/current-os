var assert = require('assert');
var currentOS = require('..');


describe('Windows Test Cases 👻 ..', function () {

  it('Success with Windows ✔️', function () {
    assert.ok(currentOS.isWindows);
  });

  it('Failed with OSX ❌', function () {
    assert.ok(!currentOS.isOSX);
  });

  it('Failed with Linux ❌', function () {
    assert.ok(!currentOS.isLinux);
  });
});