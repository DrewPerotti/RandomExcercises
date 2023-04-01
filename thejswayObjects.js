//https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md
/*
Adding character experience
Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

// TODO: create the character object here

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
*/
const aurora = {
	name: "Aurora",
	health: 150,
	strength: 25,

	describe() {
		return `${this.name} has ${this.health} health points and ${this.strength} as strength and they have ${this.xp} experience points`;
	}
};
//add xp
aurora.xp = 0;
//edit the property that produces a character description
aurora.describe = () => `${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength and they have ${aurora.xp} XP points`;
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());



/*
Modeling a dog
Complete the following program to add the dog object definition.

// TODO: create the dog object here

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
*/

const dog = {
	name: "Rylee",
	species: "Yorkshire Terrier",
	size: '24"',
	bark() {
		return 'rrr ruff'
	}
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);



/*
Modeling a circle
Complete the following program to add the circle object definition. Its radius value is input by the user.

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
*/

const r = Number(prompt("Enter the circle radius:"));
const circle = {
	circumference() {
		return 2*Math.PI*r
	},
	area(){
		return Math.PI*(Math.pow(r,2))
	}
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);



/*
Modeling a bank account
Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.
*/

const bankAccount = {
	name: 'Alex',
	balance: 0,
	credit(transaction) {
		this.balance += transaction
	},
	describe() {
		return `${this.name}, balance ${this.balance}`
	}
}
console.log(bankAccount.describe())
bankAccount.credit(250)
bankAccount.credit(-80)
console.log(bankAccount.describe())