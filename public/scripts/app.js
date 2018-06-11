'use strict';

// arguments object - no longer bound with arrow functions 
// this keyword - no longer bound with arrow functions

//const add = (a, b) => {
// console.log(arguments);
//  return a + b;
// };
// console.log(add(55,1));


var user = {
    name: 'Javier',
    cities: ['Barranquilla', 'Miami', ' Santa Marta'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    }
};

user.printPlacesLived();
