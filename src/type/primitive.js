const isNull = (data) => {
  return data === null
}

const isUndefined = (data) => {
  return typeof data === 'undefined'
}

const isFunction = (data) => {
  return typeof data === 'function'
}

const isString = (data) => {
  return typeof data === 'string'
}

export {
  isNull,
  isUndefined,
  isFunction,
  isString
}
