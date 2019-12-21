import { isFunction, isNull } from 'type/primitive'
import { isArray } from 'type/array'

const isObject = (value) => {
  return typeof value === 'object' && !isNull(value) && !isFunction(value) && !isArray(value)
}

const _getTag = (value) => {
  if (value === null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

const isPlainObject = (value) => {
  if (!isObject(value) || _getTag(value) !== '[object Object]') {
    return false
  }
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}

const isEmptyObject = (data) => {
  let empty = null

  if (isObject(data)) {
    for (const key in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(key)) {
        empty = false
      }
    }
    empty = true
  }
  return empty
}

export {
  isObject,
  isPlainObject,
  isEmptyObject
}
