import { isNull, isUndefined, isFunction, isString } from 'type/primitive'
import { isNumber, isInteger, isFloat } from 'type/number'
import { isArray, isEmptyArray } from 'type/array'
import { isObject, isPlainObject, isEmptyObject } from 'type/object'
import { isPromise } from 'type/promise'

const isEmpty = (data) => {
  return isEmptyArray(data) || isEmptyObject(data)
}

const getType = (data) => {
  return toString.call(data).replace('[object ', '').replace(']', '')
}

exports.isNull = isNull
exports.isUndefined = isUndefined
exports.isFunction = isFunction
exports.isString = isString
exports.isNumber = isNumber
exports.isInteger = isInteger
exports.isFloat = isFloat
exports.isArray = isArray
exports.isEmptyArray = isEmptyArray
exports.isObject = isObject
exports.isPlainObject = isPlainObject
exports.isEmptyObject = isEmptyObject
exports.isPromise = isPromise
exports.isEmpty = isEmpty
exports.getType = getType
