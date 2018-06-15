// arrow functions are not just syntactical sugar
// over ES5 functions

// benefit 1 - less verbose
// benefit 2 - this is picked from surroundings(lexical), hence no 
// need to bind this


var foo = () => {
  console.log('foo....')
}

//foo();			//toggle comment

let obj1 = {
  myVar: 'foo',
  
  myFunc: function() { 
    console.log(this.myVar)  
  
    setTimeout(() => {
      console.log(this.myVar)
    }, 1000)
  }
}
obj1.myFunc()