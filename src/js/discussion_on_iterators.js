// Array is an iterator, String is also an iterator
let arr = [1,2,3,4]
console.log(arr)

//Object is not an iterator
let obj = {};
console.log(obj)



// `for-of` for iterators
for(val of arr){
	console.log(val);
}

// if we try `for-of` on obj which is not a iterator
// it will throw an error



// lets talk about `Iterators`
arr = [1,2,3,4]
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());