# Current-OS ✔️
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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
## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://3imed-jaberi.com"><img src="https://avatars2.githubusercontent.com/u/43971542?v=4" width="100px;" alt=""/><br /><sub><b>imed jaberi</b></sub></a><br /><a href="https://github.com/3imed-jaberi/current-os/commits?author=3imed-jaberi" title="Documentation">📖</a> <a href="https://github.com/3imed-jaberi/current-os/commits?author=3imed-jaberi" title="Code">💻</a> <a href="#infra-3imed-jaberi" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-3imed-jaberi" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://bluelovers.net"><img src="https://avatars0.githubusercontent.com/u/167966?v=4" width="100px;" alt=""/><br /><sub><b>bluelovers</b></sub></a><br /><a href="https://github.com/3imed-jaberi/current-os/commits?author=bluelovers" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!