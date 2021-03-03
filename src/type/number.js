/**
 * @access private
 * @description Regex pattern to match for dot zero floating point numbers
 * @constant {string}
 */
const _dotZeroFloatNumberPattern = /^[+-]?\d+(\.\d+)?$/

/**
 * @access private
 * @function _isSafeNumber
 * @description Checks if data is a safe number.
 * @param {any} data the data to check
 * @returns {boolean} true or false wheter data is a Safe Number or not
 */
const _isSafeNumber = (data) => {
  return data < Number.MAX_SAFE_INTEGER && data > Number.MIN_SAFE_INTEGER
}

/**
 * @access public
 * @function isNumber
 * @description Checks if data is a number.
 * @param {any} data the data to check
 * @returns {boolean} true or false wheter data is Number or not
 */
const isNumber = (data) => {
  return typeof data === 'number' && !isNaN(data) && data === Number(data) && _isSafeNumber(data)
}

/**
 * @access public
 * @function isInteger
 * @description Checks if data is an integer number.
 * @param {any} data the data to check
 * @returns {boolean} true or false wheter data is Integer or not
 */
const isInteger = (data) => {
  return Number.isInteger(data)
}

/**
 * @access public
 * @function isFloat
 * @description Checks if data is a float number.
 * @param {any} data the data to check
 * @returns {boolean} true or false wheter data is Float or not
 */
const isFloat = (data) => {
  return isNumber(data) && (data % 1 !== 0 || _dotZeroFloatNumberPattern.test(data) )
}

export {
  isNumber,
  isInteger,
  isFloat,
}
