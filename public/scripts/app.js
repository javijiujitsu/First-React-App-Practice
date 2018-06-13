"use strict";

// arguments object - no longer bound with arrow functions 
// this keyword - no longer bound with arrow functions

//const add = (a, b) => {
// console.log(arguments);
//  return a + b;
// };
// console.log(add(55,1));
// arrow function does not bind its on this value

//const user = {
// name: 'Javier',
//  cities: ['Barranquilla', 'Miami', ' Santa Marta'],
// printPlacesLived(){
// const cityMessages = this.cities.map((city) => {
//   return this.name + ' has lived in ' + city;


//});
//  return cityMessages;
//  }
// };

// console.log(user.printPlacesLived());

// Challenge area

// numbers - array of numbers
// mutiplyBy - single number
// multiply return a new array where the numbers have mutpilied

var multiplier = {
  multiplyBy: 2,
  numbers: [1, 2, 3, 4, 5],

  multiply: function multiply() {
    var _this = this;

    var multipliedNumbers = this.numbers.map(function (number) {
      return _this.multiplyBy * number;
    });
    return multipliedNumbers;
  }
};

console.log(multiplier.multiply()); // [1 , 2, 3] 2 [ 2, 4, 6]
