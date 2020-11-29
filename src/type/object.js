import { isNull } from 'type/primitive'

/**
 * @access public
 * @function isObject
 * @description Checks if data is an object.
 * @param {any} data
 * @returns {boolean}
 */
const isObject = (data) => {
  return typeof data === 'object' && toString.call(data) === '[object Object]'
}

/**
 * @access public
 * @function isPlainObject
 * @description Checks if data is a plain object. Borrowing definition as stands in
 * https://stackoverflow.com/questions/51722354/the-implementation-of-isplainobject-function-in-redux
 * @param {any} data
 * @returns {boolean}
 */
const isPlainObject = (data) => {
  if (!isObject(data)) {
    return false
  }

  const prototype = Object.getPrototypeOf(data)
  return !isNull(prototype) && Object.getPrototypeOf(prototype) === null
}

/**
 * @access public
 * @function isEmptyObject
 * @description Checks if data is an empty object.
 * @param {any} data
 * @returns {boolean}
 */
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
