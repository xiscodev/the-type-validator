const isNull = (data) => {
  return data === null && toString.call(data) === '[object Null]'
}

const isUndefined = (data) => {
  return typeof data === 'undefined' && toString.call(data) === '[object Undefined]'
}

const isFunction = (data) => {
  return typeof data === 'function' && toString.call(data) === '[object Function]'
}

const isString = (data) => {
  return typeof data === 'string' && toString.call(data) === '[object String]'
}

export {
  isNull,
  isUndefined,
  isFunction,
  isString
}
