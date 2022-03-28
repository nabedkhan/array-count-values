# array-column

> array-count-values return an object of values from an array as keys and their count as value.

## Install

### Install with [npm](npmjs.org):

```bash
npm i array-count-values
```

## Usage

```js
const arrayCountValues = require("array-count-values");

const arr = [1, "hello", 1, "world", "hello"];

arrayCountValues(arr); // => { '1': 2, hello: 2, world: 1 }
```

## Author

**Nabed Khan**

- [github/nabedkhan](https://github.com/nabedkhan)

## License

Copyright (c) 2022
Released under the MIT license
