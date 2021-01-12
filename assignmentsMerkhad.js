console.log("--------Exercise 01 -------");
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
const islQZero = (num1) => {
    if (num1 <= 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
islQZero(-8);
islQZero(12);

console.log("--------Exercise-------");
//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.


const dogAge = (num2) => {
    let result = num2 * 7;
    console.log(`Your doggy is ${result} years old in dog years!`);
}
dogAge(8);
dogAge(2.5);


console.log("--------Exercise-------");

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.



const calcLifetimeSupply = (perAge, sneckQ) => {
    let calculSneck = (100 - perAge) * 365 * sneckQ;
    console.log(`The snack company should provide you with ${calculSneck} units, until you are a ripe old age of 100. Happy snacking!`);
}
calcLifetimeSupply(30, 3);
calcLifetimeSupply(20, 3);
calcLifetimeSupply(35, 1);



console.log("--------Exercise-------");
//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
//   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
let months = [" ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[3]);
console.log(months[10]);
console.log(months[2]);



console.log("--------Exercise-------");
// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

const countOccurrences = (strg, char) => {
    let j = 0;
    let strToCharr = strg.split("");
    for (let i = 0; i < strToCharr.length; i++)
        if (strToCharr[i] == char) {
            j++
        }
    console.log(j);
}
countOccurrences("a string and a letter", "t");




console.log("--------Exercise-------");
/*  draw this shapes in your console
First shape
T
TT
TTT
TTTT*/
let text = ("");
for (let i = 1; i <= 4; i++) {

    text += "T";

    console.log(text);

}



//Second shape
const drawFunc = (numberOfStars) => {
    for (let i = 0; i < numberOfStars; i++) {
        let text="";

        for (let j = numberOfStars; j > i; j--) {
            text += "*"
        }
        console.log(text);
      

    }
}
drawFunc(4);

 



/*

****
***
**
**/

/*Third shape
1
12
123
1234
12345*/
let textNum = "";
for (let i = 1; i < 6; i++) {
    textNum += i + "";
    console.log(textNum);
}

/*  Finish the following function so it outputs looks like this:
1
12
123
1234
12345*/

const numbersCount = () => {
  
    for (let i = 0; i <= 5; i++) {
         tempVar="";
        for (let j = 1; j <= i; j++) {
            tempVar += j + "";
        }
        console.log(tempVar);
        

    }
};
numbersCount();

/* create a function should that checks if a store contains a specific product in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)*/


const inventoryCheck = (iteme) => {
    let tetxIncludes = ["milk", "salat", "caffe", "breat"]
    let isInIventory=false;
    for (let i = 0; i < tetxIncludes.length; i++) {
        if (tetxIncludes[i] == iteme) {
          isInIventory=true;
        }

    }
    console.log(isInIventory); 
}
inventoryCheck("suger");

console.log("--------Exercise-------");
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

