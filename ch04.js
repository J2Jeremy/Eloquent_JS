/* 
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to(and including) end.

function range(start, end) {
    let newArray = [];
    for (let i = start; i <= end; i++){
        newArray.push(i);
    }
    return newArray;
};
console.log(range(2, 10)); //[2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
/* Next, write a sum function that takes an array of numbers and returns the sum of these numbers.Run the example program and see whether it does indeed return 55.*/
function sum(array) {
    let sumTotal = 0;
    for (let number of array) {
        sumTotal += number;
    }
    return sumTotal;
}
//console.log(sum(range(1, 10))); //55
/*
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.If no step is given, the elements go up by increments of one, corresponding to the old behavior.The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].Make sure it also works with negative step values so that range(5, 2, -1) produces[5, 4, 3, 2].  */
function range(start, end, step = start < end ? 1 : -1) {
    let newArray = [];
    if (start < end) {
        for (let i = start; i <= end; i+=step) {
            newArray.push(i);
        }
    } else {
        for (let i = start; i >= end; i+=step) {
            newArray.push(i);
        }
    }

    return newArray;
};
//console.log("range array: " + range(1, 10)); 
//console.log("range array: " + range(5, 2, -1)); 
//console.log("range sum: " + sum(range(1, 10, 2))); 

/* Arrays have a reverse method that changes the array by inverting the order in which its elements appear.For this exercise, write two functions, reverseArray and reverseArrayInPlace.The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.Neither may use the standard reverse method. */

function reverseArray(array) {
    let newArray = [];
    for (let i = array.length; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}
//console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
    //console.log("original array: " + array);
    let arrayLength = Math.floor(array.length / 2);
    //console.log(arrayLength);
    for (let i = 0; i < arrayLength; i++) {
        let temp = array[i];
       // console.log("temp:  " + temp);
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
       // console.log("updated array: " + array);
    }
    //console.log("final array: " + array);

    return array;
}


/* let arrayValue = [1,2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); */

//------------------------------------------ Lists -----------------------------------------
/* 
Write a function arrayToList that builds up a list structure like the one shown when given[1, 2, 3] as argument.

Also write a listToArray function that produces an array from a list.Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list(with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth. */

function arrayToList(array) {
    if (array.length == 0){
        return null;
    } else {
        return {
            value: array.shift(),
            rest: arrayToList(array)
        }
    }
}

//console.log(JSON.stringify(arrayToList([10, 20, 30, 40])));
// → {value: 10, rest: {value: 20, rest: null}}

function listToArray(list) {
    var arr1 = [];
    for (let node = list; node; node = node.rest){    
            arr1.push(node.value);
    }
    return arr1;
}
//console.log(listToArray(arrayToList([10, 20, 30])));  // → [10, 20, 30]
/* alt solution

function arrayToList([...arr], n = 0) {
    return (n < arr.length) ? { value: arr[n], rest: arrayToList(arr, n + 1) } : null;
}

function listToArray({ ...list }, arr = []) {
    arr.push(list.value);
    return (list.rest != null) ? listToArray(list.rest, arr) : arr;
} 
function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
*/

function prepend(element, list, newList = {}) {
    newList.value = element;
    newList.rest = list;
    return newList;
}
//console.log(JSON.stringify(prepend(10, prepend(20, null))));
// → {value: 10, rest: {value: 20, rest: null}}

function nth(list, position) {
    let listArray = listToArray(list);
    return listArray[position];
}
//console.log(JSON.stringify(nth(arrayToList([10, 20, 30]), 1)));
// → 20

//------------------------------------------Deep comparison-----------------------------------------
/* Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual. 

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them

*/

const getProps = function (obj) {
    for (let value in obj) {
        if (isObj(obj[value])) {
            getProps(obj[value]);
        } else {
            console.log("obj[value] : " + obj[value]);
            console.log("value : " + value);
        }
    }
};


function deepEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    }
    if (typeof value1 != 'object' || typeof value2 != 'object' || value1 == null || value2 == null) {
        return false;
    }

    let val1Keys = Object.keys(value1);
    let val2Keys = Object.keys(value2);
    if (val1Keys.length != val2Keys.length) {
        return false;
    }

    for (let key of val1Keys) { //for..of loops over values
        if (!val2Keys.includes(key) || !deepEqual(value1[key]), value2[key]) {
            return false;
            }
        }
    return true;
};

   
    
let obj = { here: { is: "an" }, object: 2 };
//console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
//console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true