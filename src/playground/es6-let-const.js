var nameVar = 'Javier';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// Cannot redfine Let variable

let nameLet = 'Mike';
nameLet  = 'Julie';
console.log ('nameJet', nameLet);

// cannot redefine Const, its an immutable variable
// cannot re assign Const, its an immutable variable 

const nameConst = 'Frank';
console.log('nameConst', nameConst);


// Just like var, let and const are function scope

// let and cost are BLOCK LEVEL SCOPING unlike Var which is not


// BLOCK SCOPING

var fullName = 'Javier Buitrago';

if (fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}