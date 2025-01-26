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

//const age1 = calcAge1(1991);
//console.log(age1);

/// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

//console.log(age1, age2);

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



//const yearsUntilRetirement = function(birthYeah, firstName) {
 //   const age = calAge(birthyeah);
 //   const retirement = 65 - age;

    //if (retirement > 0) {
        //console.log('${firstName} retires in ${retirement} years');
    //    return retirement;
    //} else {
        //console.log('${firstName} has already retired 🍾')
 //       :
     //   return -1;
    //}
//}
//console.log(yearsUntilRetirement(1991, 'jonas'));
//console.log(yearsUntilRetirement(1950, 'Mike'));






/// challenge 1 code 5
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log('Dolphins win🏆(${avgDolphins} vs. ${avgkoalas})');
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log('koalas win🏆 (${avgkoalas} vs. ${avgDolphins})');
    } else {
        console.log('No team wins....')
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// Test 2
//scoreDolphins = calcAverage(85, 54, 81);
//scoreKoalas = calcAverage(23, 34, 27);
//console.log(scoreDolphins, scoreKoalas);
//checkWinner(scoreDolphins, scoreKoalas);

// Arrays
//const friend1 = "Micheal";
//const friend2 = "Steven";
//const friend3 = "peter";

//const friends = ['Michael', 'steven', 'peter'];
//console.log(friends);
//console.log(friends[0]);

//const years = new Arrays(1991, 1984, 2000, 2020)
//console.log(Arrays);

//console.log(friends.length)
//console.log(friends[friends.length - 1]);

//friends[2] = 'jay';
//console.log(friends);


//const jonas = ['jonas', 'schmedtmann', 2037 - 1991, 'teacher', friends];
//console.log(jonas);

//////

const friends = ['Michael', 'steven', 'peter'];
const newLength = friends.push('jay');
console.log(friends);
console.log(newLength);

friends.unshift('john');
console.log(friends);

/// remove element
friends.pop();  //  Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Frist
console.log(friends);

console.log(friends.indexOf('steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('steven'));
console.log(friends.includes('Bob'));

if (friends.includes('steven')) {
    console.log('You have a friend called steven');
}



// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]),
calcTip(bill[2])];
console.log(bill, tip);