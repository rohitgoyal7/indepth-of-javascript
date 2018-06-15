var obj1 = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
        // We could have also written this:​
        console.log(obj1.firstName + " " + obj1.lastName);
    }
}
//obj1.fullName();		// toggle commment


// when we use strict mode, `this` holds the value of undefined in 
// global functions and in anonymous functions that are not bound to any object





// 1. `this` in callbacks
var obj2 = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}
//$("button").click(obj2.fullName);   		// toggle commment

// reason being fullName is invoked from the callback of click of button,
// so `this` refers to object

// Solution -- use bind
//$("button").click(obj2.fullName.bind(obj2));  		// toggle commment





// 2. `this` in closures
var obj3 = {
    firstName: "Penelope",
    lastName: "Barrymore",
    list:[1,2,3],
    clickHandler: function() {
    	//var self = this;
    	this.list.forEach(function(){
    		console.log(this.firstName);
    	})
    }
}
//obj3.clickHandler();

// reason being `this` is lost in case of anonymous functions, it
// refers to window object in normal mode and `undefined` in strict mode
// also to be noted that closures cant access outer `this`



//3. `this` when method is assigned to a variable
var firstName = 'Cruz'
var obj4 = {
    firstName: "Penelope",
    fullName: function () {
        console.log(this.firstName);
    }
}
//var showFullName = obj4.fullName;
//showFullName();		// toggle comment

// Solution -- use bind

// var showFullName = obj4.fullName.bind(obj4);
// showFullName();					//toggle comment 



//4. While Borrowing Methods




//5. `this` in constructor and prototype or while using `new` keyword
// var myConstructor = function () {
//     this.someMethod = function () {
//         console.log(this);
//     };
// };

// myConstructor.prototype = {
//     somePrototypeMethod: function () {
//         console.log(this);
//     }
// };

// var obj5 = new myConstructor();
// obj5.someMethod();
// obj5.somePrototypeMethod();   // both will refer to constructor




//6. setTimeout mystery
// var obj6 = {};
// obj6.myMethod = function () {
//   console.log(this); // this = obj6
//     setTimeout(function () {
//         console.log(this); // window object :O!!!		// reason since setTimeout is invoked by itself
//     }, 100);
// };
// obj6.myMethod();

// Solution --- use bind or use self = this, 2nd approach is better
//var obj7 = {};
// obj7.myMethod = function () {
//   console.log(this); // this = obj7
//     setTimeout(function () {
//         console.log(this); // this = obj7
//     }.bind(this), 100); // .bind() #ftw
// };
// obj7.myMethod();














