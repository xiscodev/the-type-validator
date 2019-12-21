const isArray = (data) => {
  return Array.isArray(data)
}

const isEmptyArray = (data) => {
  return isArray(data) && data.length === 0
}

export {
  isArray,
  isEmptyArray
}
