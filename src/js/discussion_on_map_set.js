// Map - alternative for object
// Set - alternative for array

// JS gotcha

const x ={};
const y ={num:1}

const obj={}
obj[x]=1;  // obj['[Object object]'']
obj[y]=2;

//console.log(obj);

// js can store only 1 key, if it encounters the same key again
// it will update the value to the latest one
// to get rid of this we need Map
// also one thing to be noted, map is an iterator so we can use `for-of` loop

// map also we can store unique keys only same as object

const map = new Map();
map.set(x,1).set(y,2).set(x,3);

// delete a key
map.delete(y);
//console.log(map);

// iterate
/*for(let [key,value] of map.entries()){
	console.log(key,value);
}
*/


// MAP vs WEAK MAP
// even if the keys are destroyed or not used it is still
// available in map

/*{
	let alpha={}
	var mapOne = new Map();
	var weakMapOne = new WeakMap();
	mapOne.set(alpha,1);
	weakMapOne.set(alpha,1);
}

console.log(mapOne);        // one entry
console.log(weakMapOne);	// no entry*/



// coming to SET

// set can have only unique values


let myArray =[1,2,3,4];
let mySet = new Set(myArray);

mySet.add(10);			//add
mySet.delete(4);		// delete
console.log(mySet);
console.log(mySet.size);	//size
mySet.clear();			//clear
mySet.has(1)			// has element
console.log(mySet);

// array methods can be applied to set


























