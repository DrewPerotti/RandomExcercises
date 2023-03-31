/*
Musketeers
Write a program that:

Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
Shows each array element using a for loop.
Adds the "D'Artagnan" value to the array.
Shows each array element using the forEach() method.
Remove poor Aramis.
Shows each array element using a for-of loop.
*/

let musketeers = ['Athos', 'Porthos', 'Aramis']
for(let i = 0; i < musketeers.length; i++){
	console.log(musketeers[i])
}
musketeers.push("D'Artagnan")
musketeers.forEach(musketeer => console.log(musketeer))
musketeers.splice(2,1)
for(let musket of musketeers){
	console.log(musket)
}

/*
Sum of values
Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];
*/

const values = new Array(3, 11, 7, 2, 9, 10);
let sumValues = 0;
for(let value of values){
	sumValues += value
}
console.log(sumValues)

/*
Array maximum
Write a program that creates the following array, then calculates and shows the array's maximum value.

const values = [3, 11, 7, 2, 9, 10];
*/

let max = 0;
for(let i = 0; i< values.length; i++){
	if(i > max){
		max = values[i]
	}
}
console.log(max)

/*
List of words
Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
*/
function pester(){
	let userResponse = prompt("Give me back a word:");
	let responses = [];
	while(!(userResponse === 'stop')){
		responses.push(userResponse);
		userResponse = prompt("Give me back a word:");
	}
	return responses
}
console.log(pester())
