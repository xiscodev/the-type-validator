const isArray = (data) => {
  return Array.isArray(data) && toString.call(data) === '[object Array]'
}

const isEmptyArray = (data) => {
  return isArray(data) && data.length === 0
}

export {
  isArray,
  isEmptyArray
}
