function fibonacci(iterations = 2) {
	let sequence = [0, 1]  // every fibonacci sequence starts here

	if (! Number.isInteger(iterations) || iterations < 2) { 
		throw Error('fibonacci must be called with a number of iterations (2 or more)')
	}

	while(sequence.length < iterations) {
		sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])		
	}

	return sequence
}