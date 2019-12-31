[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/JuanMaRuiz/jqLite/issues)
[![Build Status](https://travis-ci.org/JuanMaRuiz/TestingJS.svg?branch=develop)](https://travis-ci.org/JuanMaRuiz/TestingJS)
[![Dependencies Status](https://david-dm.org/JuanMaRuiz/testingjs.svg)](https://david-dm.org/JuanMaRuiz/testingjs.svg)
[![devDependencies Status](https://david-dm.org/JuanMaRuiz/testingjs/dev-status.svg)](https://david-dm.org/JuanMaRuiz/testingjs?type=dev)
[![GitHub license](https://img.shields.io/github/license/JuanMaRuiz/TestingJS.svg)](https://github.com/JuanMaRuiz/TestingJS/blob/master/LICENSE)

# TestingJS
> Helping you to select a Javascript Testing framework/library.

This dummy application is based on the idea of [Todo MVC](http://todomvc.com/) by [Addy Osmani](https://github.com/addyosmani), [Sindre](https://github.com/sindresorhus), and a lot of [awesome developers](https://github.com/tastejs/todomvc#team) but oriented to Testing libraries.

These days there are a lot of Testing frameworks and libraries for testing our Javascript applications. Every framework is focused to use TDD/BDD or both.

To try to help developers to choose the perfect Testing tool, we've created TestingJS. As you alreday know Javascript can be used in the browser and in the backend. For that reason you will find two different and very simple projects:

* A node application (in `node` folder).- Is the typical fizzbuzz kata.
* A front end application (in the `webapp` folder). The testing libraries used in this project are oriented to web applications what means that some of the unit tests are related with DOM manipulations.

Both of these applications are tested using different testing frameworks.

// TODO: Change this to cover all testing frameworks for the front and backend applications.
## How to launch tests

By default, this project is configured to launch [jasmine](http://jasmine.github.io/) tests but it is also prepared to launch a server with different Testing library. In order to see the html report in your browser you can navigate to the root of this folder and execute:

```
npm start <library> // jasmine, mocha, ...
```

Browser is reloaded whenever you change any of the tests or the html.

### Launching node tests

**Jest test**

`npm run test:jest:node` This command will launch the Jest tests for the node application.

## License

> Everything in this repo is MIT License unless otherwise specified.

Copyright 2018 JuanMa Ruiz. See individual libraries for their respective copyrights and licenses.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
