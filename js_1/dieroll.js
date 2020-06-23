/*Rolling Dice
Write a script `rollingDice.js` that takes two numbers as arguments.
 The first one represents a quantity of dice and the second one represents a number of faces on the dice. Simulate rolling the dice. Log the result of each dice, the sum and the average of all rolls.

Example usage:

$ node rollingDice.js 3 6

Rolled: 2

Rolled: 1

Rolled: 3

-----------------------------

Average Roll: 2

Total: 6*/


const myArgs = process.argv.slice(2);
console.log(myArgs[0])
//console.log("   Rolled : "+ Math.floor((Math.random()*6)+1));
//console.log(Math.floor((Math.random()*6)+1));
//console.log(myArgs[0]);
//let repeat = myArgs[0];
let Total = 0;
let noondie =0;
for(i=0;i<myArgs[0];i++){
    noondie = Math.floor((Math.random()*6)+1);
    console.log("Rolled : "+ noondie);
    Total += Total + noondie;
}
console.log(Total);
let average_roll = Total/myArgs[0];
