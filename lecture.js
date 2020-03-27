// *************************
// Prototypical Inheritance 
// arrays can take everything functions can do and everything objects can do
// functions can do everything objects can do
// everything in JavaScript is an object 
// *************************

// *************************
// BREAK OUT
// Instructions
// Let’s make a constructor function for two character objects
// Give these objects name, location and phrase
// Make a speak method using .prototype and make the characters say their phrase in the console.

// function person(attributes) {
//   this.name = attributes.name,
//   this.location = attributes.location,
//   this.phrase = attributes.phrase
// }

// person.prototype.speak = function () {
//   return `${this.name} says, ${this.phrase}`;
// }

// const personOne = new person({
//   name: 'Fred',
//   location: 'Colombia',
//   phrase: 'hola, amigo!'
// })

// console.log(personOne.speak());
// *************************

// *************************
// BREAK OUT #2
// Convert your constructor function into a class
// Add a new method called place and make it return your character’s name and where they are from

// class Person{
// constructor (attributes) {
//   this.name = attributes.name,
//   this.location = attributes.location,
//   this.phrase = attributes.phrase
// }

// speak() {
//   return `${this.name} says, ${this.phrase}`;
//   }
// }

// function Child(childAttributes){
//   Person.call(this, childAttributes) // binds child to parent
//   this.isChild = childAttributes.isChild; // this will be a special attribute to child
// }

// Child.prototype = Object.create(Person.prototype);

// const personOne = new Person({
//   name: 'Fred',
//   location: 'Colombia',
//   phrase: '"hola, amigo, que pasa?"'
// })

// const personTwo = new Child({
//   name: 'Anna',
//   location: 'Bolivia',
//   phrase: '"Buenas!"'
// })

// console.log(personOne.speak());
// console.log(personTwo.speak());
// *************************

// *************************
// Classes
// class is not hoisted
// use strict
// methods are a special syntax reserved for classes
// a constructor function is visible

// super and extend combined - do what parent.call and object.create did

// new fancy class way === super and extend
// old boring way === .call and object.create
// *************************

class Parent{
  constructor(attributes){
    // attributes go here
    this.newName = attributes.name,
    this.newLocation = attributes.location,
    this.newJob = attributes.job
  }
  // methods go here
  work(){
    return `${this.newName} is an ${this.newJob}.`;
  }
}// this closes the parent

class Child extends Parent {
  constructor(childAttributes){
    super(childAttributes); // super replaces parent.call
    this.newMajor = childAttributes.major
  }
  study(){
    return `${this.newName} is studying ${this.newMajor}.`
  }
}

class Grandchild extends Child {
  constructor(grandchildAttributes){
    super(grandchildAttributes);
    this.newfavColor = grandchildAttributes.favColor
  }
  color(){
    return `${this.newName} favorite color is ${this.newfavColor}.`
  }
}
const mom = new Parent({
  name: 'Mom',
  location: 'USA',
  job: 'engineer'
})

const daughter = new Child({
  name: 'Sara',
  location: 'USA',
  job: 'student',
  major: 'Computer Science'
})

const grandchild = new Grandchild({
  name: 'Brad',
  location: 'USA',
  job: 'student',
  favColor: 'red'
})

console.log(mom.work());
console.log(daughter.work());
console.log(daughter.study());
console.log(grandchild.color());