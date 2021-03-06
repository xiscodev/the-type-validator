/**
 * @access public
 * @function isPromise
 * @description Checks if data is a promise.
 * @param {any} data the data to check
 * @returns {boolean} true or false wheter data is Promise or not
 */
const isPromise = (data) => {
  return !!(data &&
    typeof data.then === 'function' &&
    typeof data.catch === 'function' &&
    typeof data.finally === 'function')
}

export {
  isPromise,
}
