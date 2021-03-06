import { isArray, isEmptyArray } from './array'

describe('isArray', () => {
  it('should exist', () => {
    expect(isArray).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isArray())
  })
})

describe('isEmptyArray', () => {
  it('should exist', () => {
    expect(isEmptyArray).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isEmptyArray())
  })
})
