import { isEmpty, getType } from './helper'

describe('isEmpty', () => {
  it('should exist', () => {
    expect(isEmpty).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isEmpty())
  })
})

describe('getType', () => {
  it('should exist', () => {
    expect(getType).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(getType())
  })
})
