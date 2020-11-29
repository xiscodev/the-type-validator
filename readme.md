<div style="display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center;">
  <img style="-webkit-order: 0; -ms-flex-order: 0; order: 0; -webkit-flex: 0 1 auto; -ms-flex: 0 1 auto; flex: 0 1 auto; -webkit-align-self: auto; -ms-flex-item-align: auto; align-self: auto;" src="icon.png" />
</div>

<h1 style="text-align:center;">The type validator</h1>

## Why ?
Javascript does not have a pretty way to prove something belongs to a specific type. (Except for Typescript)

---
Ex1. typeof checking
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
typeof true
"boolean"
typeof (1 < 2)
"boolean"
typeof 1
"number"
typeof 0
"number"
```

---
Ex2. boolean comparisons
| Expresion           | Result  |
| -                   | -       |
| true == 0           | false   |
| true == 1           | true    |
| true == 2           | false   |
| true == (1 < 2)     | true    |
| true == ""          | false   |
| true == "a          | false   |
| true == {}          | false   |
| true == !{}         | false   |
| true == []          | false   |
| true == ![]         | false   |
| true == null        | false   |
| true == !null       | true    |
| true == undefined   | false   |
| true == !undefined  | true    |

---
Ex3. conditionals

if blocks or ternaries comparisons result are "casted" using [ECMA-262](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf) normative.

```js
// FALSE goes to else block
if (0) {
  //
}

// TRUE goes to if block
if (1) {
  //
}

// FALSE goes to else block
if ("") {
  //
}

// TRUE goes to if block
if ("a") {
  //
}

// TRUE goes to if block
if ({}) {
  //
}

// FALSE goes to else block
if (!{}) {
  //
}
```
**Not as intuitive as you would like.**

---

## Which types can be validated

```js
null
undefined
function
[] // Array
{} // Object
Promise
"" // String
```

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

_The require way_

```js
let { isObject } = require("the-type-validator");
```

_The import way_

```js
import { isObject } from "the-type-validator";
```

All validator methods returns boolean


Ex.1 - Checking a null
```js
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

Ex.2 - Checking an object
```js
const anObject = {}
const isVarObject = isObject(aNull)
const isVarArray = isArray(aNull)

console.log('isVarObject', isVarObject)
true
console.log('isVarArray', isVarArray)
false
```

Ex.3 - We can check if object is already empty
```js
const isVarObjectAndEmpty = isEmptyObject(anObject)
const isVarArrayAndEmpty = isEmptyArray(anObject)

console.log('isVarObjectAndEmpty', isVarObjectAndEmpty)
true
console.log('isVarArrayAndEmpty', isVarArrayAndEmpty)
false
```

You can always refer to library documentation [here](api.md)

Powered by <a href="https://deepertech.com" target="_blank">Deepertech</a>
