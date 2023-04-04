//https://javascript.info/array-methods#find-and-findindex-findlastindex
/*
Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/

// function camelize(str){
// 	let tempArr = str.split('-');
// 	for(let i = 1; i < tempArr.length; i++){
// 		tempArr[i] = tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1);

// 	}
// 	return tempArr.join('')
// }
// console.log(camelize("background-color"))// == 'backgroundColor';
// console.log(camelize("list-style-image"))// == 'listStyleImage';
// console.log(camelize("-webkit-transition"))// == 'WebkitTransition';
//I looked at the solution after I wrote this and now it makes sense that we would use the map method instead of a for loop
 // function camelize(str){
 // 	return str
 // 		.split('-')
 // 		.map(
 // 			(word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
 // 			)
 // 		.join('')
 // }
 //I tried to recall this from memory as best I could and will put it on an Anki card







/* 
Filter range
importance: 4
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
*/

//  function filterRange(arr, a, b) {
//  	return arr.filter(item => ((item>=a)&&(item<=b))
// )}


//  let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (matching values)

// console.log(arr); // 5,3,8,1 (not modified)
//I was close but there's a better way to write my expression; which is how my answer differed from their solution
//(a <= item && item <= b)






/*
Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
*/

// function filterRangeInPlace(arr, a, b){
// 	arr = arr.filter(item => (a<=item && item<=b))
// }
// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// console.log(arr) // [3, 1]

//I attemplted several ways to use the filter method and replace our beginning array with the outcome within calling it but that did not work as filter() is built to return a new array object.

//below is their code which I will dissect
// function filterRangeInPlace(arr, a, b) {
// 	//the following for loop iterates through the array
//   for (let i = 0; i < arr.length; i++) {
//   	//builds a temp variable which is equal to the current iteration elements value
//     let val = arr[i];

//     // remove if outside of the interval
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//       //checks this current value against the 2 argument values and the questions requirement
//       //if the value is less than a or great than b it get spliced from the array (i being index of current element, 1 being remove 1 value)
//       //the loop iterator variable gets changed if this happens, it gets reduced by 1 because an element was removed from the array
//     }
//   }

// }
//I will add this into my anki as well







/*
Sort in decreasing order
importance: 4
let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10
*/
// let arrSort = [5, 2, 1, -10, 8]
// arrSort.sort((a,b)=>{
// 	if(a>b){return -1};
// 	if(a==b){return 0};
// 	if(a<b){return 1};
// })
// console.log(arrSort); // 8, 5, 2, 1, -10
//I had the return values in ascending results at first and changed them after first test
//Upon further review my code did work but the solution used a not so sloppy way; they had a simplistic expression; (a,b) => b - a;
//again b-a works because sort()'s algo just looks at if a value from b-a is less than 0, is 0, or is greater than 0 and then moves the 2 values in the appropriate order







/*
Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

// function copySorted(arr){
// 	let newArr = arr.slice()
// 	newArr.sort()
// 	return newArr
// }
// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)
//Again my solution was correct but there was another way to input it which results in saving 2 lines of code/space







/*
Create an extendable calculator
importance: 5
Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
*/
// function Calculator(str){
// 	this.str = str
// 	this.calculate = str=>{
// 		let inputs = str.split(' ');
// 		inputs[0] = Number(inputs[0])
// 		inputs[2] = Number(inputs[2])
// 		if(inputs[1] == "+"){
// 			return inputs[0] + inputs[2]
// 		}else{
// 			return inputs[0] - inputs[2]
// 		}
// 	}
//   this.addMethod = (name, function) 
// }

// }
// let calc = new Calculator;

// console.log( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8

//I was very far from solving this one and am going to need to dissect it and add it to my Anki







/*
Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = /* ... your code 

alert( names ); // John, Pete, Mary
*/


// function convertObjNamesToArray(arr){
//   return arr.map(user => user.name)
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = convertObjNamesToArray(users)

// console.log( names ); // John, Pete, Mary
//luckily got this one first try











/*
Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.)
*/
//map with arrow function
// function convertObjectToDepthObj(arr){
//   return arr.map(user => {
//     const container = {};
//     container.fullName = `${user.name} ${user.surname}`
//     container.id = user.id
//     return container;
//   })
// }

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = convertObjectToDepthObj(users);
// console.log(usersMapped)
// /*
// output should be:
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

//this took too much time than I'd like to admit and I had to google a similar problem, and now that I look at the solution given on javascript.info it's even different








/*
Sort users by age
importance: 5
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/
// function sortByAge(users) {
//   users.sort((a, b) => a.age-b.age)
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete
//got this one done without any problems and in a short duration








/*
Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/

// function shuffle(array){
//   return array.sort((a, b) => (a*Math.random())-(b*Math.random()))
// }
// let arr = [1, 2, 3];

// console.log(shuffle(arr));
// // arr = [3, 2, 1]

// console.log(shuffle(arr));
// // arr = [2, 1, 3]

// console.log(shuffle(arr));
// // arr = [3, 1, 2]
// // ...
//somewhat easy








/*
Get average age
importance: 4
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

// function getAverageAge(users){
//   return (users.reduce((sum, item)=> sum + item.age, 0) /3);
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
//wasn't too hard after I found some helpful code on MDN

/*
Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  // your code 
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/

// function unique(arr){
//   let result = [];
//   for(let individual of arr){
//     if(!result.includes(individual)){
//       result.push(individual)
//     }
//   }
//   return result
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O
//I tried to use filter() to build the unique array but gave up and looked at the solution but it makes sense that filter() won't work because we have no way of checking what values are in the array it's building during each iteration




/*
Create keyed object from array
importance: 4
Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution.
*/

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// }

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
//I tried for an hour to get this and am now using their solution and will dissect it elsewhere and put it on an Anki card for future studying.