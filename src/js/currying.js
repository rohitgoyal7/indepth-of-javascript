function curry(f1){
	var store = [];
	function internal(){
		let args = Array.prototype.map.call(arguments,function(item){return item})
		store = store.concat(args);
		debugger;
		if(store.length==3){
			return f1(...store)
		}
		else{
			return internal;
		}
	}
	return internal;
}

function alpha(a,b,c){
	return a+b+c;
}


var curried = curry(alpha);