'use strict';

function fibonacci(iterations) {
	validate.iterations(iterations)

	// the fibonacci sequence starts here
	let sequence = [1, 2]

	while(sequence.length < iterations) {
		// the next number in the sequence is the sum of the last two 
		let next = sequence.slice(-2).reduce( (y,z)=> { return y+z })
		sequence.append(next)
	}

	return sequence
}

module.exports = fibonacci


// helpers that will not be exported

Array.prototype.append = Array.prototype.push

var validate = {
	iterations: function(iterations) {
		if (! Number.isInteger(iterations) || iterations < 2) { 
			throw Error('fibonacci must be called with a number of iterations (2 or more)')
		}
	}
}

