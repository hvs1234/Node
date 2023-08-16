const square = require('./square');
const prompt = require("prompt-sync")();

const value = prompt("Enter the value: ");

const cal = (a)=>
{
    console.log(`Area of ${a} is: ${square.area(a)}`);
    console.log(`Perimeter of ${a} is: ${square.perimeter(a)}`);
}

cal(value);