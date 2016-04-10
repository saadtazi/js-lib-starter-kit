ES2015 Javascript starter kit for library project with code coverage ([nyc](https://github.com/bcoe/nyc)), linting ([eslint](http://eslint.org/) with [`air-bnb` settings](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)), CI ([travis-ci](https://travis-ci.org/)), test ([mocha](http://mochajs.org/)), coverage ([nyc](https://github.com/bcoe/nyc) and [coveralls](https://coveralls.io/)).

## About

nodejs and browser library starter kit with babel (ES2015 and beyond... add your favorite babel loaders).

## Disclaimer

It is NOT an express, koa nor react starter kit... It is a *javascript library starter kit*.

## Instruction

* git clone `&& cd`
* `npm install`
* edit `package.json`: name, description, tags, repo url, licenses...
* edit `README.md`
* edit `src/index.js` and create corresponding tests in `test/`... Create all the files/directories you need **inside `src/`**. Note that if you rename or delete `src/index.js` file, you will have to adjust `main` property in `package.json`
* `npm build`: this will build your code in `dist/` directory (UMD)

## Commands

Check [`package.json`](./package.json) for a complete list of commands.

**Notes**
* after running `npm cov`, you can open `coverage/index.html`.
* to use the generated package (assuming that you named your package `my-lib`):
```
//commonjs: using "regular" node (no ES2015 `import` support)

const myPackage = require('my-lib');
// ES2015 import, if you want to use transpiled version..
import myPackage from 'my-lib';
// ES2015 import, if you want to use the ES2015 version
import myPackage from 'my-lib/src';

// AMD... I think it looks like this.
// It's been so long...
require(..., 'path/to/dist/my-lib', ... function (...) {...});

// browser
<src src="./path/to/dist/my-lib"></script>
```
* edit `main` property in `package.json` to change which directory (`src` or `dist`) is the default `export`ed one.

* If you don't care about UMD/AMD/browser support and want to stick with common.js and ES2015 export, just edit `[.babelrc](./.babelrc)` and remove `transform-es2015-modules-umd` plugin.

* If you do not need commonJS... then why are you reading this? Oh, for code coverage and test setup? Ok. Then you can remove the `npm compile` task from package.json I guess...

## [Travis-CI](https://travis-ci.org/) Integration & [Coveralls.io](https://coveralls.io)

* Make sure you have the proper command(s) in .travis.yml
*

## GIT Integration

This repository uses [`husky`](https://github.com/typicode/husky) npm package to configure git hooks. The 2 configured hooks are `pre-commit` and `pre-push`. Check in `package.json` the `scripts` section.

### How to remove Travis and Coveralls.io Integration

* remove `.travis.yml`
* remove in `package.json` npm script `coveralls` and `travis`
