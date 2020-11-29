/**
 * @access public
 * @function isNull
 * @description Checks if data is null.
 * @param {any} data
 * @returns {boolean}
 */
const isNull = (data) => {
  return data === null && toString.call(data) === '[object Null]'
}

/**
 * @access public
 * @function isUndefined
 * @description Checks if data is undefined.
 * @param {any} data
 * @returns {boolean}
 */
const isUndefined = (data) => {
  return typeof data === 'undefined' && toString.call(data) === '[object Undefined]'
}

/**
 * @access public
 * @function isFunction
 * @description Checks if data is a function.
 * @param {any} data
 * @returns {boolean}
 */
const isFunction = (data) => {
  return typeof data === 'function' && toString.call(data) === '[object Function]'
}

/**
 * @access public
 * @function isString
 * @description Checks if data is a string.
 * @param {any} data
 * @returns {boolean}
 */
const isString = (data) => {
  return typeof data === 'string' && toString.call(data) === '[object String]'
}

export {
  isNull,
  isUndefined,
  isFunction,
  isString
}
