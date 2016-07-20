'use strict'

/*
 * Count up and down between two numbers.
 * @param {Number} min - Minimum number.
 * @param {Number} max - Maximum number.
 * @param {Number} initial - Initial number.
 * @returns {Function} instance - Count-between instance. Expects the following properties: modifier.
 */
module.exports = function(min, max, initial) {

	const length = max - min + 1

	let index = initial - min

	return (modifier = 0) => {

		index = (index + modifier) % length

		if (index>=0) index = 0 + index
		if (index<0)  index = length + index

		return min + index

	}

}