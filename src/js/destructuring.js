// array matching

/*var list = [ 1, 2, 3 ]
let [ a, , b ] = list;
console.log(a,b);
[b,a] = [a,b]
console.log(a,b);*/


// object matching
/*var obj ={
	a:1,
	lhs:2,
	rhs:3
}
var { lhs, rhs } = obj;
console.log(lhs,rhs);
var {lhs:LHS} = obj;
console.log(LHS);*/

// default values
var obj ={
	a:1,
	lhs:2,
	rhs:3
}
var { a, lhs, rhs, b=4 } = obj;
console.log(lhs,rhs,a,b);
var [x,y=2]=[1]
console.log(x,y);