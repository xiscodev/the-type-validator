<div style="display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center;">
  <img style="-webkit-order: 0; -ms-flex-order: 0; order: 0; -webkit-flex: 0 1 auto; -ms-flex: 0 1 auto; flex: 0 1 auto; -webkit-align-self: auto; -ms-flex-item-align: auto; align-self: auto;" src="icon.png" />
</div>

<h1 style="text-align:center;">The type validator</h1>

## Why ?
Javascript does not have a pretty way to prove something belongs to a specific type.

Ex1. checking typeof
```js
typeof null
"object"
typeof undefined
"undefined"
typeof "undefined"
"string"
typeof Object
"function"
typeof object
"undefined"
typeof {}
"object"
typeof null
"object"
```

Ex2. comparing
```js
true == 0
false
true == 1
true
true == 2
false
```

Solid ha?

## Which types can i validate

* Null
* Undefined
* Function
* String
* Number
* Array
* Object
* Promise

## Available methods

* isNull
* isUndefined
* isFunction
* isString
* isNumber
* isInteger
* isFloat
* isArray
* isEmptyArray
* isObject
* isEmptyObject
* isPromise
* isEmpty

## How to use it?

First you need to import it in your project

- The require way

```js
let { isObject } = require("the-type-validator");
```

- The import way

```js
import { isObject } from "the-type-validator";
```
.
.
.

All validator methods returns boolean

```js
import { isObject, isNull, isUndefined } from "the-type-validator";

const aNull = null
const isVarObject = isObject(aNull)
const isVarNull = isNull(aNull)
const isVarUndefined = isUndefined(aNull)

console.log('isVarObject', isVarObject)
false
console.log('isVarNull', isVarNull)
true
console.log('isVarUndefined', isVarUndefined)
false
```

Powered by <a href="https://deepertech.com" target="_blank">Deepertech</a>
