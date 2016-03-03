Array.prototype.add = Array.prototype.push

function fibonacci(iterations = 2) {
	validate.iterations(iterations)
	
	let sequence = [1, 2]

	while(sequence.length < iterations) {
		sequence.add() + sequence[sequence.length - 2])		
	}

	return sequence
}


var validate = {
	iterations: function(iterations) {
		if (! Number.isInteger(iterations) || iterations < 2) { 
			throw Error('fibonacci must be called with a number of iterations (2 or more)')
		}
	}
}

module.exports = fibonacci