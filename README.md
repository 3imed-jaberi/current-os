# Current-OS ✔️
---

[![Build Status][travis-badge]][travis-url] &nbsp;&nbsp;
[![Coverage Status][coverage-badge]][coverage-url] &nbsp;&nbsp;

[travis-url]: https://travis-ci.org/3imed-jaberi/current-os
[travis-badge]: https://travis-ci.org/3imed-jaberi/current-os.svg?branch=master
[coverage-url]: https://coveralls.io/github/3imed-jaberi/current-os?branch=master
[coverage-badge]: https://coveralls.io/repos/github/3imed-jaberi/current-os/badge.svg?branch=master


### Check the type of current OS 🧐 ..

## Installation 
---

```bash
# npm ..
$ npm install current-os
# yarn .. 
$ yarn add current-os
```

## Usage 
---
The method of use is simple and very easy .. Just follow these steps :

```javascript

var currentOS = require ('current-os'); 

// if you are using Windows OS : 
console.log(currentOS.isWindows); // ==> true
console.log(currentOS.isOSX); // ==> false
console.log(currentOS.isLinux); // ==> false

// if you are using OSX (Mac OS) : 
console.log(currentOS.isWindows); // ==> false
console.log(currentOS.isOSX); // ==> true
console.log(currentOS.isLinux); // ==> false

// if you are using Linux : 
console.log(currentOS.isWindows); // ==> false
console.log(currentOS.isOSX); // ==> false
console.log(currentOS.isLinux); // ==> true

```


#### License
---

[MIT](LICENSE)