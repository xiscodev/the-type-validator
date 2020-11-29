/**
 * @access public
 * @function isArray
 * @description Checks if data is an array.
 * @param {any} data
 * @returns {boolean}
 */
const isArray = (data) => {
  return Array.isArray(data) && toString.call(data) === '[object Array]'
}

/**
 * @access public
 * @function isEmptyArray
 * @description Checks if data is an empty array.
 * @param {any} data
 * @returns {boolean}
 */
const isEmptyArray = (data) => {
  return isArray(data) && data.length === 0
}

export {
  isArray,
  isEmptyArray
}
