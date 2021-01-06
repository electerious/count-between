# count-between

![Build](https://github.com/electerious/count-between/workflows/Build/badge.svg) [![Coverage Status](https://coveralls.io/repos/github/electerious/count-between/badge.svg?branch=master)](https://coveralls.io/github/electerious/count-between?branch=master)

Count up and down between two numbers.

## Install

```
npm install count-between
```

## Usage

```js
const c = require('count-between')(2, 5, 5)

c(1) // 2
c(1) // 3
c(3) // 2
c(-2) // 4
c(0) // 4
c() // 4
```

## API

### Parameters

- `min` `{Number}` Minimum number.
- `max` `{Number}` Maximum number.
- `initial` `{Number}` Initial number.

### Returns

- `{Function}({?Number})` [Count-between instance](#instance-api).

## Instance API

### Parameters

- `modifier ` `{?Number}`

### Returns

- `{Number}` Current number.