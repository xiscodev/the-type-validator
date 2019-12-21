const isPromise = (data) => {
  return !!(data &&
    typeof data.then === 'function' &&
    typeof data.catch === 'function' &&
    typeof data.finally === 'function')
}

export {
  isPromise
}
