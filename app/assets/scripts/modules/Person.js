class Person {
   constructor(name, color) {
      this.name = name;
      this.color = color;
   }

   greet() {
      console.log("Hi, my name is " + this.name + " and my favorite color is " + this.color + ".")
   }
}
// function Person(name, color) {
//    this.name = name;
//    this.color = color;
//    this.greet = function () {
//       console.log("Hello, my name is " + this.name + " and my favorite color is " + this.color + ".")
//    }
// }

// module.exports = Person;
export default Person;