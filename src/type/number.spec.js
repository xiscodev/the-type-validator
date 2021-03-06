import { isNumber, isInteger, isFloat } from './number'

describe('isNumber', () => {
  it('should exist', () => {
    expect(isNumber).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isNumber())
  })
})

describe('isInteger', () => {
  it('should exist', () => {
    expect(isInteger).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isInteger())
  })
})

describe('isFloat', () => {
  it('should exist', () => {
    expect(isFloat).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isFloat())
  })
})
