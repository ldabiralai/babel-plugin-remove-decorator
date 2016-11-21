# babel-plugin-remove-decorator
Babel 6 plugin that removes class decorators, useful when running unit tests

At the moment this only removes decorators from top level classes, for example:

Before: 
```js
@MyDecorator
class Content {}
```
After:
```js
class Content {}
```

I'll happily accept PRs that add support for removing decorators on methods (or any other improvements)


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
