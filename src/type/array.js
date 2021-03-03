/**
 * @access public
 * @function isArray
 * @description Checks if data is an array.
 * @param {any} data the data to check
 * @returns {boolean} true or false wheter data is an array or not
 */
const isArray = (data) => {
  return Array.isArray(data) && toString.call(data) === '[object Array]'
}

/**
 * @access public
 * @function isEmptyArray
 * @description Checks if data is an empty array.
 * @param {any} data the data to check
 * @returns {boolean} true or false wheter data is an empty array or not
 */
const isEmptyArray = (data) => {
  return isArray(data) && data.length === 0
}

export {
  isArray,
  isEmptyArray,
}
