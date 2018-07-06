// Setup constructor to take name and age (default to 0)
// brand new method getDescription - Javier Buitrago is 28 years(s) old.  
 
 
 
 
 
 class Person {
     constructor(name = 'Anonymous', age = 0) {
         this.name = name; 
         this.age = age; 
     }
     getGretting() {
      //   return 'Hi. I am ' + this.name + '!';
      return `Hi. I am ${this.name}!`
     }
     getDescription() {
        //   return 'Hi. I am ' + this.name + '!';
        return `${this.name} is ${this.age} years old.`
       }
 }

 const me = new Person('Javier Buitrago', 28);

 console.log(me.getDescription());


 const other = new Person();
 console.log(other.getDescription());