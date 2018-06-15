// Object.assign

var dest = { quux: 0 }
var src1 = { foo: 1, bar: 2 }
var src2 = { foo: 3, baz: 4 }
Object.assign(dest, src1, src2);
//console.log(dest);



// find and findIndex --- finds the first element
var elem = [1,3,4,2,5,6].find(x => x > 3) ;
var elemIndex = [1,3,4,2,5,6].findIndex(x => x > 3) 
console.log(elem);
console.log(elemIndex);



// String Searching .includes


// Math.trunc
// Math.sign
