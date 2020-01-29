var os = require('os');

var currentOS = function() {

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


module.exports = new currentOS();
