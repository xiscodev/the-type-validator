import { isNull, isUndefined, isFunction, isString } from './primitive'

describe('isNull', () => {
  it('should exist', () => {
    expect(isNull).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isNull())
  })
})

describe('isUndefined', () => {
  it('should exist', () => {
    expect(isUndefined).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isUndefined())
  })
})

describe('isFunction', () => {
  it('should exist', () => {
    expect(isFunction).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isFunction())
  })
})

describe('isString', () => {
  it('should exist', () => {
    expect(isString).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isString())
  })
})
