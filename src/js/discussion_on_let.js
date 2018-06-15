// blocked scope variable
// Three States- Declaration, Initialization and Assignment


let alpha = 1;


function discussion_about_let_one(){
	console.log(alpha);
}

// let variables are not hoisted 
function discussion_about_let_two(){
	//console.log(beta);        		// Ref Error
	let beta=1;
}

// let variables are hoisted but can not be used before initialization
function discussion_about_let_three(){
	//console.log(alpha);				// Ref Error
	let alpha;
	console.log(alpha);
	alpha = 2;
	console.log(alpha);
}

//With `let` and `const` in ES6, it’s no longer safe to check for an identifier’s existence using `typeof`
function discussion_about_let_four(){
	//console.log(typeof alpha);
	let alpha;	
}


discussion_about_let_one();
discussion_about_let_two();
discussion_about_let_three();
discussion_about_let_four();






// var ---- (Declaration + Initialization) + Assignment
// function ---- (Declaration + Initialization + Assignment) - all at the same time
// let ---- Declaration + Initialization + Assignment - there is a temporal dead zone between declaration and initialization state




// https://dmitripavlutin.com/variables-lifecycle-and-why-let-is-not-hoisted/
// https://stackoverflow.com/questions/34564403/what-is-block-scope-function-ecmascript-6-compare-with-ecmascript-5













// Some snippets of code


/*
function foo(flag) {
    a = 10;
    if (flag) {
        var a = 20;
    }
    return a;
}
console.log(foo(false)); // 10
console.log(foo(true));  // 20
*/


/*
function foo(flag) {
    if (flag) {
        let a = 10;
    }
    return a;           // ReferenceError: a is not defined
}
console.log(foo(true));

*/

