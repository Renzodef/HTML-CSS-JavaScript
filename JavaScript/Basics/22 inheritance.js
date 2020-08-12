/*
Inheritance in ES6
The extends keyword is used in class declarations or class expressions to create a child of a class. 
The child inherits the properties and methods of the parent.
*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}
class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}
let dog = new Dog('Rex');
dog.speak(); // Rex barks.

/*
If there is a constructor present in the subclass, 
it needs to first call super() before using this. 
Also, the super keyword is used to call parent's methods.
*/
class Dog2 extends Animal {
    speak() {
        super.speak(); // Super
        console.log(this.name + ' barks.');
    }
}
let dog2 = new Dog2('Rex');
dog2.speak(); // Rex makes a noise. // Rex barks.