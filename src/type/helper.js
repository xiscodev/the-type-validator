import { isEmptyArray } from './array'
import { isEmptyObject } from './object'

/**
 * @access public
 * @function isEmpty
 * @description Checks if data is empty, whether is an array or an object.
 * @param {any} data the data to check
 * @returns {boolean} true or false wheter data is an empty objct or empty array
 */
const isEmpty = (data) => {
  return isEmptyArray(data) || isEmptyObject(data)
}

/**
 * @access public
 * @function getType
 * @description Gets data type.
 * @param {any} data the data to check
 * @returns {string} the type to return
 */
const getType = (data) => {
  return toString.call(data).replace('[object ', '').replace(']', '')
}

export {
  isEmpty,
  getType,
}
