import {transform} from 'babel-core'
import removeDecoratorPlugin, {decoratableTypes} from './index.js'

const classDecorator = `
  const TestDecorator = (target) => {
    target.decoratedProperty = true

    return target
  }

  @TestDecorator
  class TestClass {}

  return TestClass
`

test('has class decorators', () => {
  const {code} = transform(classDecorator, {
    plugins: ['transform-decorators-legacy'],
    parserOpts: {
      allowReturnOutsideFunction: true,
    }
  })

  const fn = new Function(code)

  expect(new fn().decoratedProperty).toBe(true)
})

test('strips class decorators', () => {
  const {code} = transform(classDecorator, {
    plugins: [removeDecoratorPlugin, 'transform-decorators-legacy'],
    parserOpts: {
      allowReturnOutsideFunction: true,
    }
  })

  const fn = new Function(code)

  expect(new fn().decoratedProperty).toBe(undefined)
})

const classFunctionDecorator = `
  const TestDecorator = (target, prop) => {
    target.decorated = true

    return target
  }

  class TestClass {
    @TestDecorator
    a() {}
  }

  return new TestClass()
`

test('has class function decorator', () => {
  const {code} = transform(classFunctionDecorator, {
    plugins: ['transform-decorators-legacy'],
    parserOpts: {
      allowReturnOutsideFunction: true,
    }
  })

  const fn = new Function(code)

  expect(new fn().decorated).toBe(true)
})

test('strips class function decorator', () => {
  const {code} = transform(classFunctionDecorator, {
    plugins: [removeDecoratorPlugin, 'transform-decorators-legacy'],
    parserOpts: {
      allowReturnOutsideFunction: true,
    }
  })

  const fn = new Function(code)

  expect(fn().a.decorated).toBe(undefined)
})

test('decoratableTypes are as expected', () => {
  expect(decoratableTypes).toEqual([
    "ArrayPattern",
    "AssignmentPattern",
    "ClassExpression",
    "ClassDeclaration",
    "ClassMethod",
    "ClassProperty",
    "Identifier",
    "ObjectMethod",
    "ObjectPattern",
    "ObjectProperty",
    "RestElement"
  ])
})
