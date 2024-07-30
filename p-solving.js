// 1. ES6 Destructuring
// Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

// ::Answer::

// const person = {
//      firstName: "Qasem",
//      lastName: "Abbas",
//      age: 40
// };
// let {firstName, age}=person;
// console.log(firstName, age);



// 2. ES6 Module
// Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.

// // ::Answer::
// let radius = 5;
// let area =  circleArea(radius);

// function circleArea(radius){
//      return Math.PI * radius * radius;
// }
// console.log(`The area of the circle is: ${area}`);


// 3. ES6 Classes
// Problem: Create a class Rectangle with properties width and height and a method to calculate the area.
// // ::Answer::
// class rectangle{
//      constructor(width, height){
//           this.width = width;
//           this.height =  height;
//      }
//      getArea(){
//           return this.width * this.height;
//      }
//      getParamiter(){
//           return 2 * (this.width + this.height);
//      }
// }
// const myRectangle =  new rectangle(10, 10);
// console.log(`widht: ${myRectangle.width}`);
// console.log(`height: ${myRectangle.height}`);
// console.log(`Area: ${myRectangle.getArea()}`);
// console.log(`paramiter: ${myRectangle.getParamiter()}`);


// 4. Getter and Setter in ES6
// Problem: Create a class Person with a getter and setter for the fullName property.
// // ::Answer::
// const person={
//      firstName: "Qasem",
//      lastName: "Abbas",
//      get fullName(){
//           return this.fullName;
//      }
// }
// console.log(person);

// 5. Class Expressions
// Problem: Create a class expression for a Circle with a method to calculate the circumference.
// // ::Answer::


// 6. JavaScript Computed Properties
// Problem: Create an object with computed property names based on variables.

// // ::Answer::

// let propName = "userName";
// const userInfo={
//      [propName]: "Qasem",
//      email: "qasemjdc@gmail.com",
//      password: "5284675",
//      age: 45
// }
// console.log(userInfo);

// 7. Inheritance
// Problem: Create a base class Animal and a derived class Dog that inherits from Animal.
// // ::Answer::
// class Animal {
//      constructor(name, age) {
//          this.name = name;
//          this.age = age;
//      }
//       speak() {
//          return `${this.name} makes a sound.`;
//      }
//  }
//  class Dog extends Animal {
//      constructor(name, age, breed) {
//          super(name, age);
//          this.breed = breed;
//      }
//      speak() {
//          return `${this.name} barks.`;
//      }
 
//      getBreed() {
//          return `${this.name} is a ${this.breed}.`;
//      }
//  }
//  const myDog = new Dog('Buddy', 3, 'Golden Retriever');
//  console.log(myDog.speak());
//  console.log(myDog.getBreed());
 

// 8. New Target Operators
// Problem: Use new.target to create an abstract class Shape that cannot be instantiated directly.
// // ::Answer::

// function car(name){
//      if(!new.target){
//           throw "This My used car";
//      }
//      this.name = name;    
// }
// let myCar = new car("This My Choice Car:'BMW'");
// console.log(myCar);


// 9. Static Methods
// Problem: Create a class MathUtil with a static method square to calculate the square of a number.
// ::Answer::
// class MathUtil{
//      static square(number){
//           return number * number;
//      }
// }
// let num = 10;
// const squared = MathUtil.square(num);
// console.log(`The square of ${num} is ${squared}`);

// 10. Symbol
// Problem: Create an object with a symbol as a property key and demonstrate accessing it
// // ::Answer::
// const person{
//      firstName: "Qasem",
//      lastName: "Abbas",
//      age: 45
// }
// let id = Symbol("id");
// person[id] = 151342;
// console.log(person);


