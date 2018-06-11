// arguments object - no longer bound with arrow functions 
// this keyword - no longer bound with arrow functions

//const add = (a, b) => {
// console.log(arguments);
//  return a + b;
// };
// console.log(add(55,1));


const user = {
    name: 'Javier',
    cities: ['Barranquilla', 'Miami', ' Santa Marta'],
    printPlacesLived: function (){
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        });
    }
};

user.printPlacesLived();

