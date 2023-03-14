// Program Structure
/* Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
####### 
*/
let output="";
do {
    output += "#";
    //console.log(output);
} while (output.length < 7);


/* book solution*/

for (let line = "#"; line.length < 8; line += "#") { }
    //console.log(line); 
    
/* Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions.For numbers divisible by 3, print "Fizz" instead of the number,
    and for numbers divisible by 5(and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that 
are divisible by both 3 and 5(and still print "Fizz" or "Buzz" for numbers divisible 
by only one of those). */

for (let jx = 1; jx <= 100; jx++){
    if (jx % 3 == 0 && jx % 5 == 0) {
        //console.log("FizzBuzz");
    }
    else if (jx % 3 == 0) {
        //console.log("Fizz");
    }
    else if (jx % 5 == 0) {
        //console.log("Buzz");
    }
    else {
        //console.log(jx);
    }
}
/* book solution*/
/* for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
} */
/* chessboard 
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */
let size = prompt("Enter size");
let printBoard = "";
for (let j = 0; j < size; j++){
    for (let b = 0; b < size; b++){
        if (printBoard.length % 2 == 0) {
            printBoard += " ";
        } else {
            printBoard += "#";
        }
    }
    printBoard += "\n";
}
console.log(printBoard);

/* book solution
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board); */