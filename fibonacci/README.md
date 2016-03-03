#Fibonacci

This is my stylistic implementation of the fibonacci sequence.

It aims for a literate coding style that is easy to read and understand, even for non-coders.  I try to be precise in my variable names and 
explicit in my steps but clean with my comments (except when I'm frustrated).  I think the code should speak for itself.

But at the same time, it tries to be too clever by half.  I avoid creating any unnecessary variables, and then push it onto an array that acc
umulates the total sequence.

I'm a tester, so I'm a bit anal about checking inputs, which I admit should be done outside the core algorithm, but I just can't help myself  
It saves a tiny bit of memory by not using temporary variables, but then builds a huge array.  It saves processing by avoiding recursion (while still being nicely succinct) but then recalculates the sequence length for each iteration, an unnecessary expense.

It is, of course, completely untested.
