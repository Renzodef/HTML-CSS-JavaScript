/*
A class uses the keyword class and contains a constructor method for initializing.
ES6 introduced a shorthand that does not require the keyword function 
for a function assigned to a method's name.
*/
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(5, 5);
console.log(square.area); // 25

/*
Another type of method is the static method, 
which cannot be called through a class instance. 
Static methods are often used to create utility functions for an application.
*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);
console.log(Point.distance(p1, p2)); // 7.211102550927979