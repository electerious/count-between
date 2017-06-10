# count-between

[![Travis Build Status](https://travis-ci.org/electerious/count-between.svg?branch=master)](https://travis-ci.org/electerious/count-between) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/1by72uvhws2v8fa2?svg=true)](https://ci.appveyor.com/project/electerious/count-between) [![Coverage Status](https://coveralls.io/repos/github/electerious/count-between/badge.svg?branch=master)](https://coveralls.io/github/electerious/count-between?branch=master) [![Dependencies](https://david-dm.org/electerious/count-between.svg)](https://david-dm.org/electerious/count-between#info=dependencies)

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