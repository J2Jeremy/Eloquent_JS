// ================== while loop ==================
let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
// ================== do while loops ==================
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName); 
// ================== for loops ==================
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
// ================== switch statement ==================
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
// ================== defining functions ==================
const square = function (x) {
    return x * x;
};
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
console.log(power(4)); // → 16
console.log(power(2, 6)); // → 64
// ================== closure =======================
function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5)); // → 10

// ================== recursion =======================
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3)); // → 8

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
console.log(findSolution(24)); // → (((1 * 3) + 5) * 3)
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
// ================== Data structures =======================
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]); // → 5
// ================== properties =======================
array.length
array["length"]
// ================== Methods =======================
// ================== Methods =======================
// ================== Methods =======================
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence); // → [1, 2, 3, 4, 5]
console.log(sequence.pop()); // → 5
console.log(sequence); // → [1, 2, 3, 4]
/* We saw push and pop, which add and remove elements at the end of an array, earlier in this chapter. 
The corresponding methods for adding and removing things at the start of an array are called unshift and shift. */
let todoList = [];
function remember(task) {
    todoList.push(task);
}
function getTask() {
    return todoList.shift(); //to get (and remove) the front item from the queue
}
function rememberUrgently(task) {
    todoList.unshift(task); //function also adds a task but adds it to the front instead of the back of the queue.
}
console.log([1, 2, 3, 2, 1].indexOf(2)); //searches through the array from the start to the end and returns the index at which 
//the requested value was found—or - 1 if it wasn’t found.
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); //search from the end instead of the start
// → 3
//Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching.
console.log([0, 1, 2, 3, 4].slice(2, 4)); //takes start and end indices and returns an array that has only the elements between them
// → [2, 3]
//When the end index is not given, slice will take all of the elements after the start index. You can also omit the start
//index to copy the entire array.
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
// ================== Strings and their properties =======================
// ================== Strings and their properties =======================
// ================== Strings and their properties =======================
console.log("coconuts".slice(4, 7)); // → nut
console.log("coconut".indexOf("u")); // → 5
console.log("one two three".indexOf("ee")); // → 11
//The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string
console.log("  okay \n ".trim()); // → okay
console.log(String(6).padStart(3, "0")); // → 006
//You can split a string on every occurrence of another string with split and join it again with join.
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
console.log("LA".repeat(3));
// → LALALA
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b

// ================== Rest parameters =======================
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2)); // → 9
let numbers = [5, 1, 7];
console.log(max(...numbers)); // → 7
console.log(max(9, ...numbers, 2)) //9
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]

// ================== Math Object =======================

// ================== Objects =======================
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel); // → false
console.log(day1.wolf); // → undefined
day1.wolf = false;
console.log(day1.wolf); // → false

let anObject = {
    left: 1,
    right: 2
};
console.log(anObject.left); // → 1
delete anObject.left;
console.log(anObject.left); // → undefined
console.log("left" in anObject); // → false
console.log("right" in anObject); // → true
// ================== Mutability =======================
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2); // → true
console.log(object1 == object3); // → false

const score = { visitors: 0, home: 0 };
// This is okay
score.visitors = 1;
// This isn't allowed
score = { visitors: 1, home: 1 };
// ================== weresquirrel example =======================
    let journal = [];
    function addEntry(events, squirrel) {
        journal.push({ events, squirrel });
    }
    addEntry(["work", "touched tree", "pizza", "running",
        "television"], false);
    addEntry(["work", "ice cream", "cauliflower", "lasagna",
        "touched tree", "brushed teeth"], false);
    addEntry(["weekend", "cycling", "break", "peanuts",
        "beer"], true);

    // ================== weresquirrel correlation table builder =======================
    function tableFor(event, journal) {
        let table = [0, 0, 0, 0];
        for (let i = 0; i < journal.length; i++) { //loop through all objects in journal array
            let entry = journal[i], index = 0; // entry = to each events array
            if (entry.events.includes(event)) index += 1; //if keyword found in events array, adjust index
            if (entry.squirrel) index += 2; //if weresquirrel is true, adjust array
            table[index] += 1; //update correlation table count
        }
        return table;
    }
    console.log(tableFor("pizza", JOURNAL)); // → [76, 9, 4, 1]

    // ================== weresquirrel final analysis find all types of events =======================
    function journalEvents(journal) {
        let events = [];
        for (let entry of journal) { //simplified array lopop works for strings as well
            for (let event of entry.events) {
                if (!events.includes(event)) {
                    events.push(event);
                }
            }
        }
        return events;
    }
    console.log(journalEvents(JOURNAL)); // → ["carrot", "exercise", "weekend", "bread", …]

    //By going over all the events and adding those that aren’t already in there to the events array, 
    //the function collects every type of event.
    //Using that, we can see all the correlations.
    for (let event of journalEvents(JOURNAL)) {
        console.log(event + ":", phi(tableFor(event, JOURNAL)));
    }
    // → carrot:   0.0140970969
    // → exercise: 0.0685994341
    // → weekend:  0.1371988681
    // → bread:   -0.0757554019
    // → pudding: -0.0648203724
    // and so on...

    //filter for correlation higher than .1
    for (let event of journalEvents(JOURNAL)) {
        let correlation = phi(tableFor(event, JOURNAL));
        if (correlation > 0.1 || correlation < -0.1) {
            console.log(event + ":", correlation);
        }
    }
    // → weekend:        0.1371988681
    // → brushed teeth: -0.3805211953
    // → candy:          0.1296407447
    // → work:          -0.1371988681
    // → spaghetti:      0.2425356250
    // → reading:        0.1106828054
    // → peanuts:        0.5902679812

    //narrowing to solution
    for (let entry of JOURNAL) {
        if (entry.events.includes("peanuts") &&
            !entry.events.includes("brushed teeth")) {
            entry.events.push("peanut teeth");
        }
    }
console.log(phi(tableFor("peanut teeth", JOURNAL)));  // → 1

// ================== destructing =======================
function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
            (n01 + n11) * (n00 + n10));
}
let { name } = { name: "Faraji", age: 23 };
console.log(name);  // → Faraji
// ================== JSON =======================
{
    "squirrel": false,
        "events": ["work", "touched tree", "pizza", "running"]
}
let string = JSON.stringify({
    squirrel: false,
    events: ["weekend"]
});
console.log(string);  // → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);  // → ["weekend"]