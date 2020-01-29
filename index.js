var os = require('os');

module.exports = new function currentOS () {

  function Windows () {
    return os.type() === 'Windows_NT';
  }

  function OSX () {
    return os.type() === 'Darwin';
  }

  function Linux () {
    return os.type() === 'Linux';
  }

  this.isWindows = Windows();
  this.isOSX = OSX();
  this.isLinux = Linux();
};
