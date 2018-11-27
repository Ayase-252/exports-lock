# exports-lock

A library to protect integrity of packages in Node.js

## Background

JavaScript allows very flexible coding pattern, such as dynamically
changing behavior by alternating the prototype chain of constructor. However, lacking of accessing control incurs vulnerability.

Can you imagine that you can change behavior of a package which is not in your hand? Current module mechanism offers NO PROTECTION for integrity of package. People can change behavior of your package once you put it in public. You cannot promise that package behaves as exactly as document saying, if somebody alternated your implementation silently.

Due to lack of convenient access control, or developers often don't care it. We exposes our code under public domain, and incurs possible malicious attacks. Now, it's pretty clear that to protect ourself, we should protect our code from maliciously changing.

I wrote this library to simply set all method/properties of public interface to `not writable` and `not configurable`. It can prevent unwanted change to your library.

## Usage

Download from npm

```bash
npm install exports-lock
```

Lock your public interface

```javascript
// entry point
const lock = require('exports-lock')

goodFunction: () => 'good function'

module.exports = {
    goodFunction
}

lock(module.exports)

```

If a malicious library attempts to change your code,

```javascript
// malicious library
const goodLib = require('goodLib')

goodLib.goodFunction = () => 'bad'
```

your code will not be affected.

```javascript
// client code
const goodLib = require('goodLib')
const badLib = require('badLib')

console.log(goodLib.goodFunction()) // 'good function'
```