# Current-OS ✔️
---

[![Build Status](https://travis-ci.org/3imed-jaberi/current-os.svg?branch=master)](https://travis-ci.org/3imed-jaberi/current-os) &nbsp;&nbsp; [![Coverage Status](https://coveralls.io/repos/github/3imed-jaberi/current-os/badge.svg?branch=master)](https://coveralls.io/github/3imed-jaberi/current-os?branch=master)

### Check the type of current OS 🧐 ..


## Installation 
---

- NPM :
```bash
$ npm install current-os
```

- YARN :
```bash
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