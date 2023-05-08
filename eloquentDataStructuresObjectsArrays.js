//https://eloquentjavascript.net/04_data.html

/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/
function range(a,b,c=1){
	let resultArr = [];
	//I guessed at this below loop condition, I'm not sure why it works but it does, however I went to look at the hints to this problem and they suggest  creating 2 separate loops, one for counting up from a to b, and one to count down from a to b. I did write some code trying to use 2 different loops but could not get them to work
	for(let i = a; resultArr.length <=Math.abs(a-b); i+=c){
		resultArr.push(i)
	}
	return resultArr
}

function sum(arr){
	let arrSum = arr[0]
	for(let i = 1; i<arr.length-1;i++){
		arrSum+=arr[i]
	}
	return arrSum
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArray(arr){
	let result = []
	for(let i = arr.length-1; i>=0; i--){
		result.push(arr[i])
	}
	return result
}
function reverseArrayInPlace(arr){
	for(let i = 0; i<=Math.floor(arr.length/2); i++){
		let tempValue = arr[i];
		arr[i]=arr[arr.length-1-i]
		arr[arr.length-1-i]=tempValue
	}
	return arr
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]



/*
A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
The resulting objects form a chain, like this:

A linked list
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(arr){
	for(let i = arr.length-1; i >= 0; i--){
		{value: i, rest:}
	}
	return resultList
	//I had to read the hints
}

function listToArray(){
	//creates an array from the "value" key/property's values
}
function prepend(element, list){
	//creates a new list that adds the element argument to the front of the argument list
}
function nth(list, number){
	//returns the element at the given position in the list, 0 referring to the first element, or undefined when there is no such element
}
//^write a recursive version of the nth function


//sadly I've given up on this file for now 