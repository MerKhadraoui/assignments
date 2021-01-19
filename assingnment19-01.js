//AEIOU:
//Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
//i.e. findVowels(“this is a string”) ➞ 4
const countVowel = (str) => {
  let num = 0;
  let result = str.split("");
  // console.log(result);
  for (let i = 0; i < result.length; i++) {
    switch (result[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        num++;
        break;
    }
  }
  console.log(num);
  return result;
};

countVowel("hihdneiieerther");
console.log("++++++++++++++++");

//No Duplicates!
//A set is a collection of unique items.
//  A set can be formed from an array by removing all duplicate items.
//  Create a program which transforms an array into a set of unique values.
//  See the examples below. Example:
// //[1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

const noDup = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(noDup([1, 4, 4, 7, 7, 7]));
console.log(noDup([1, 6, 6, 9, 9]));

/*Dictionary. (take your time on this pls ) also as tip you can use .includes()
 Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
Notes:
If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words.
Examples:
dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []*/
const dictionary = (str, arrDic) => {
  result = [];
  let userInput = str.toLowerCase();
  for (let i = 0; i < arrDic.length; i++) {
    let userData = arrDic[i];
    if (userData.includes(userInput)) {
      result.push(userData);
    }
  }
  return result;
};
console.log(dictionary("bu", ["button", "breakfast", "border"]));
// another way
// const dictionary = (str, arrDic) => {
//   result = [];
//   let userInput = str.toLowerCase();
//   for (let i = 0; i < arrDic.length; i++) {
//     let userData = arrDic[i].split(userInput);
//     if (userData !== userInput) {
//       result.push(userData);
//     }
//
//   }
//   return result;
// };
// console.log(dictionary("bu", ["button", "breakfast", "border"]));
