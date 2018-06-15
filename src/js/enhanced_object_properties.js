var x = 0, y = 0
obj = { x, y }
//console.log(obj);




// computed property names
let foo = ()=>2;
let obj1 ={
	x,
	['y'+ foo()]:2
}
//obj1['y'+ foo()] = 2;
console.log(obj1);