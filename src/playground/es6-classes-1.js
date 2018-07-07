// Setup constructor to take name and age (default to 0)
// brand new method getDescription - Javier Buitrago is 28 years(s) old.  
 
 
 
 
 
 class Person {
     constructor(name = 'Anonymous', age = 0) {
         this.name = name; 
         this.age = age; 
     }
     getGreeting() {
      //   return 'Hi. I am ' + this.name + '!';
      return `Hi. I am ${this.name}!`
     }
     getDescription() {
        //   return 'Hi. I am ' + this.name + '!';
        return `${this.name} is ${this.age} years old.`
       }
 }

 class Student extends Person  {
    constructor(name , age , major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;    
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` their major is ${this.major}.`;
        }
        return description;
    }
 }


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super (name, age);
        this.homeLocation = homeLocation;
    }
        hasHomelocation() {
             return !!this.homeLocation;
        } 
    
        getGreeting(){
        let greeting = super.getGreeting();
        if (this.hasHomelocation()){
              greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
         
}




// Traveler -> Person
// add support for homeLocation
//override getGreeting 
// 1. Hi. I am Javier Buitrago. I 'm visiting from Miami.
// 2. Hi. I am Javeir 



 const me = new Traveler ('Javier Buitrago', 28,  'Miami');
 console.log(me.getGreeting());


 const other = new Traveler(undefined, undefined, "Nowhere");
 console.log(other.getGreeting());