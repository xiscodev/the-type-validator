import { isObject, isPlainObject, isEmptyObject } from './object'

describe('isObject', () => {
  it('should exist', () => {
    expect(isObject).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isObject())
  })
})

describe('isPlainObject', () => {
  it('should exist', () => {
    expect(isPlainObject).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isPlainObject())
  })
})

describe('isEmptyObject', () => {
  it('should exist', () => {
    expect(isEmptyObject).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isEmptyObject())
  })
})
