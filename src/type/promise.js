/**
 * @access public
 * @function isPromise
 * @description Checks if data is a promise.
 * @param {any} data
 * @returns {boolean}
 */
const isPromise = (data) => {
  return !!(data &&
    typeof data.then === 'function' &&
    typeof data.catch === 'function' &&
    typeof data.finally === 'function')
}

export {
  isPromise
}
