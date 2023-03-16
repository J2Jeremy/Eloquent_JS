//Write a function min that takes two arguments and returns their minimum.

function min(x, y) {
    return (x > y ? y : x);
}
//console.log(min(4, 2));
//console.log(min(12, 1));

/* book solution
function min(a, b) {
  if (a < b) return a;
  else return b;
}*/

/* Here’s another way to define whether a positive whole number is even or odd:
Zero is even.
One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description.The function should accept a single parameter(a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on - 1. Why ? Can you think of a way to fix this ? */

const isEven = num => {
    num = Math.abs(num);
    if (num == 1) {
        return false;
    } else if (num == 0) {
        return true;
    } else {
        return isEven(num - 2);
    }

}
//console.log(isEven(50));
//console.log(isEven(75));
//console.log(isEven(-1));


/* book solution
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
} */

/* Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

    Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted(rather than counting only uppercase “B” characters).Rewrite countBs to make use of this new function. */

const countChar = (aString, aChar) => {
    let uppersFound = 0;
    for (let i = 0; i < aString.length; i++) {
        if (aString[i] === aChar) {
            uppersFound++;
        }
    }
    return uppersFound;
};

console.log("Uppers found: " + countChar("BuTTeryBerTram", "T"));

/* book solution */

/* function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4 */