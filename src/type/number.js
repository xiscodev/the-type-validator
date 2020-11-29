/**
 * @access private
 * @function _isSafe
 * @description Checks if data is a safe number.
 * @param {any} data
 * @returns {boolean}
 */
const _isSafe = (data) => {
  return Number.isSafeInteger(data) && data < Number.MAX_VALUE && data > Number.MIN_VALUE
}

/**
 * @access public
 * @function isNumber
 * @description Checks if data is a number.
 * @param {any} data
 * @returns {boolean}
 */
const isNumber = (data) => {
  return typeof data === 'number' && !isNaN(data) && data === Number(data) && _isSafe(data)
}

/**
 * @access public
 * @function isInteger
 * @description Checks if data is an integer number.
 * @param {any} data
 * @returns {boolean}
 */
const isInteger = (data) => {
  return isNumber(data) && Number.isInteger(data)
}

// TODO validate .0 numbers
/**
 * @access public
 * @function isFloat
 * @description Checks if data is a float number.
 * @param {any} data
 * @returns {boolean}
 */
const isFloat = (data) => {
  return isNumber(data) && data % 1 !== 0
}

export {
  isNumber,
  isInteger,
  isFloat
}
