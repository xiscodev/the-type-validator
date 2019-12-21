const isSafe = (data) => {
  return Number.isSafeInteger(data) && data < Number.MAX_VALUE && data > Number.MIN_VALUE
}

const isNumber = (data) => {
  return typeof data === 'number' && !isNaN(data) && data === Number(data) && isSafe(data)
}

const isInteger = (data) => {
  return isNumber(data) && Number.isInteger(data)
}

// TODO validate .0 numbers
const isFloat = (data) => {
  return isNumber(data) && data % 1 !== 0
}

export {
  isSafe,
  isNumber,
  isInteger,
  isFloat
}
