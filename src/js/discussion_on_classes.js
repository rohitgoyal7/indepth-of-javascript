class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
    print(){
    	console.log('print......');
    }
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
    print(){
    	super.print();				// accessing base class using super
    }
    static name(){
    	console.log('some name ..... ')			// i m a static method
    }
    set _width(width){
    	this.width = width;
    }
    get _width(){
    	return this.width;
    }
}


// ES5 equivalent
/*var Rectangle = function (id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width  = width;
    this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;*/


var shape = new Shape(1,2,2);
var rectangle = new Rectangle(1,2,2,3,4);
console.log(shape);
console.log(rectangle);
rectangle.print();
Rectangle.name();
rectangle._width = 5;
console.log(rectangle._width);









