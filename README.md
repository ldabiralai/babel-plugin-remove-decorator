# babel-plugin-remove-decorator [![CircleCI](https://circleci.com/gh/ldabiralai/babel-plugin-remove-decorator.svg?style=svg)](https://circleci.com/gh/ldabiralai/babel-plugin-remove-decorator)
Babel 6 plugin that removes all decorators, useful when running unit tests

Removes decorators from top level classes, for example:

Before:
```js
@MyDecorator
class Content {}
```
After:
```js
class Content {}
```

I'll happily accept PRs for any further improvements to the project!


## Usage
```bash
$ npm install --save-dev babel-plugin-remove-decorator
```
```bash
$ yarn add --dev babel-plugin-remove-decorator
```

Add to your babelrc:
```json
{
  "env": {
    "test": {
      "plugins": ["remove-decorator"]
    }
  }
}
```
