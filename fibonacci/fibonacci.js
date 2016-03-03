Array.prototype.add = Array.prototype.push

function fibonacci(iterations = 2) {
	check_iterations(iterations)

	let sequence = [1, 2]

	while(sequence.length < iterations) {
		sequence.add() + sequence[sequence.length - 2])		
	}

	return sequence
}

function check_iterations() {
	if (! Number.isInteger(iterations) || iterations < 2) { 
		throw Error('fibonacci must be called with a number of iterations (2 or more)')
	}
}

module.exports = fibonacci

// tests
var fib = fibonacci
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(10))