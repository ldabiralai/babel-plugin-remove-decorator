import {transform} from 'babel-core'
import removeDecoratorPlugin from './index.js'

const testCode = `
  const TestDecorator = (target) => {
    target.decoratedProperty = true

    return target
  }

  @TestDecorator
  class TestClass {}

  return TestClass
`

test('has class decorators', () => {
  const {code} = transform(testCode, {
    plugins: ['transform-decorators-legacy'],
    parserOpts: {
      allowReturnOutsideFunction: true,
    }
  })

  const fn = new Function(code)

  expect(new fn().decoratedProperty).toBe(true)
})

test('strips class decorators', () => {
  const {code} = transform(testCode, {
    plugins: [removeDecoratorPlugin, 'transform-decorators-legacy'],
    parserOpts: {
      allowReturnOutsideFunction: true,
    }
  })

  const fn = new Function(code)

  expect(new fn().decoratedProperty).toBe(undefined)
})
