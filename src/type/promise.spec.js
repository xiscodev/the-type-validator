import { isPromise } from './promise'

describe('isPromise', () => {
  it('should exist', () => {
    expect(isPromise).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isPromise())
  })
})
