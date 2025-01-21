'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;


function logger() {
    console.log('My name is Jonas');
}

// calling //running // invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
}

fruitProcessor(5, 0);

const num = Number('23');


function calcAge1(birthYear) {
    return 2037 - birthYear;
}
/// function declaration

const age1 = calcAge1(1991);
console.log(age1);

/// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

/// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

///const yearsUntilRetirement = birthyear => {
 //   const age = 2037 - birthYear;
   // const retirement = 65 - age;
    // return retirement;
    //return $(firstName) retires in $(retirement) years;
//}

// cutFruitPieces(fruit) {
  //  return fruit = 4;
//}
function fruitProcessor(apples, orangess) {
    const applepieces = cutFruitPieces(apples);
    const orangepieces = cutFruitpieces(oranges);
}

function fruitProcessor(apples, oranges) {
   const juice = 'juice with ${apples} apples and ${oranges} oranges';
   return juice;
}



const yearsUntilRetirement = function(birthYeah, firstName) {
   // const age = calAge(birthyeah);
   // const retirement = 65 - age;

    if (retirement > 0) {
        console.log('${firstName} retires in ${retirement} years');
        return retirement;
    } else {
        console.log('${firstName} has already retired 🍾')
 //       :
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));



//// challenge 1 code 5

const calAverage = (a, b, c) => (a + b + c) / 3;
console.log(calAverage(3, 4, 5));