// default parameter values

function foo (x, y = 7, z = 42) {
    return x + y + z
}
//foo(1) === 50;



// rest operator -- converts into Array
function foo1 (x, y, ...a) {
    return (x + y) * a.length
}
//foo1(1, 2, "hello", true, 7) 


//use case of rest operator
function sum (...args) {
	let count = 0;
    /*arguments.forEach((item)=>{		//will fail since arguments is not an array
    	count = count + item;
    });*/

    /*Array.prototype.forEach.call(arguments,(item)=>{			//verbose
    	count = count + item;
    });*/

    args.forEach((item)=>{					// good approach
    	count = count + item;
    });
    return count;
}

//console.log(sum(1, 2, 3, 4));



//spread operator, its a better apply
var params = [ "hello", true, 7 ];

function f (x, y, ...a) {
    return (x + y) * a.length
}
//console.log(f(1, 2, ...params));



//use case of spread operator

var numbers = [1,2,3,4,5,8];

var max = Math.max.apply(null,numbers);

//var max = Math.max(...numbers);  // good approach
//console.log(max);



// another use case spread operator
var arr1=[1,2];
var arr2 = [3,4];
var arr3 = arr1.concat(arr2) // [1,2,3,4]. -- but a new array is created
var arr4 = [arr1, ...arr2];  // in a single statement 
var arr5 = [...arr1, ...arr2]; // in a single statement 
console.log(arr4);
console.log(arr5);




















