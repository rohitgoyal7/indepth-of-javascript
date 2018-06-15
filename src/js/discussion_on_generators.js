// generator does not produce all values at the start like array

/*function *generator(){
	yield 1;
	yield 2;
	yield 3;
	yield 4;
}

var iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/


// infinite loop
/*function *infiniteLoop(){
	let i=0;
	while(true){
		yield i;
		i++;
	}
}

var iterator = infiniteLoop();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

// generator inside generator
/*function *generatorOne(){
	yield 1;
	yield* generatorTwo();
	return 'stop';		// return will stop further execution 
	yield 3;
}

function *generatorTwo(){
	yield 2;
}

var iterator = generatorOne();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

//use case ---- if we need data from earlier call to be passed in the next call
function request(url){
	//make xhr call
}

function *generator(){
	yield request('url1');
	yield request('url1');
}

// we can use `for-of` on iterator or generator();


//https://www.youtube.com/watch?v=pnS2lBQuLGc
















