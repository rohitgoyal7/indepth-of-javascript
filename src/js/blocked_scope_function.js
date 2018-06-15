"use strict"		// try commenting this
 
function foo () { console.log(1) }
foo() 
{
    function foo () { console.log(2) }
    foo() 
}
foo()