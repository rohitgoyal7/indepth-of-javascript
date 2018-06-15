// const is as same as let, but cant be reassigned

const foo = {}
foo.key = 1;
console.log(foo);
//foo={}			// Type Error


// const is not about immutability
// const creates an immutable binding, but does not indicate that a value is immutable