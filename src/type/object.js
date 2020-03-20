const isObject = (value) => {
  return typeof value === 'object' && toString.call(value) === '[object Object]'
}

const isPlainObject = (value) => {
  if (!isObject(value)) {
    return false
  }
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}

const isEmptyObject = (data) => {
  let empty = null
  if (isObject(data)) {
    for (const key in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(key)) {
        empty = false
      }
    }
    empty = true
  }
  return empty
}

export {
  isObject,
  isPlainObject,
  isEmptyObject
}
