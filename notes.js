// ================== while loop ==================
/*
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
*/

// ================== do while loops ==================
/* 
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName); 
*/

// ================== for loops ==================
/* 
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
*/

// ================== switch statement ==================
/* 
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
} 
*/

// ================== defining functions ==================
/* 
const square = function (x) {
    return x * x;
};*/

// ================== nested scope ====================

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

// ================== Functions as values ==================
let launchMissiles = function () {
    missileSystem.launch("now");
};

// ================== Declaration notation ==================
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}
// ================== Arrow functions =======================
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
const horn = () => {
    console.log("Toot");
};

// ================== optional arguments functions =======================
function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64

// ================== closure =======================
function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10

// ================== recursion =======================
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3));
// → 8
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

// ================== Growing functions =======================

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
//break up
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
//break up 
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);