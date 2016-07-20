'use strict'

const assert = require('chai').assert
const index  = require('./../src/index')

describe('index()', function() {

	it('should return a function', function() {

		const c = index()

		assert.isFunction(c)

	})

})

describe('index()()', function() {

	it('should return the current value when called with zero', function() {

		const c = index(2, 5, 5)

		assert.strictEqual(c(0), 5)

	})

	it('should return the current value when called without modifier', function() {

		const c = index(2, 5, 5)

		assert.strictEqual(c(), 5)

	})

	it('should have a number between min and max when initial is higher than max', function() {

		const c = index(2, 5, 6)

		assert.strictEqual(c(), 2)

	})

	it('should have a number between min and max when initial is lower than min', function() {

		const c = index(2, 5, 1)

		assert.strictEqual(c(), 5)

	})

	it('should increment counter by one', function() {

		const c = index(2, 5, 5)

		assert.strictEqual(c(1), 2)

	})

	it('should decrement counter by one', function() {

		const c = index(2, 5, 5)

		assert.strictEqual(c(-1), 4)

	})

	it('should increment counter by four', function() {

		const c = index(2, 5, 5)

		assert.strictEqual(c(4), 5)

	})

	it('should decrement counter by four', function() {

		const c = index(2, 5, 5)

		assert.strictEqual(c(-4), 5)

	})

	it('should increment counter by one when min value is negative', function() {

		const c = index(-5, 5, -5)

		assert.strictEqual(c(1), -4)

	})

	it('should decrement counter by one when min value is negative', function() {

		const c = index(-5, 5, -5)

		assert.strictEqual(c(-1), 5)

	})

	it('should increment counter by six when min value is negative', function() {

		const c = index(-5, 0, -5)

		assert.strictEqual(c(6), -5)

	})

	it('should decrement counter by six when min value is negative', function() {

		const c = index(-5, 0, -5)

		assert.strictEqual(c(-6), -5)

	})

})