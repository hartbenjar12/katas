function fibonacci(iterations) {
	validate.iterations(iterations)

	// the fibonacci sequence starts here
	let sequence = [1, 2]

	while(const length = sequence.length < iterations) {
		// the next number in the sequence is the sum of the last two 
		let next = sequence[length - 1] + sequence[length - 2]
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

