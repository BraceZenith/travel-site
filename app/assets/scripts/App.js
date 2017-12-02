// Goal

// console.log("Hello, my name is John Doe and my favorite color is blue.");
// console.log("Hello, my name is Jane Smith and my favorite color is green.");



// First iteration

// function person(name, favColor) {
// 	console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
// }

// person("John Doe", "blue");
// person("Jane Smith", "green");



// Second iteration

// function person(name, favColor) {
// 	console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
// }

// var johnName = "John Doe";
// var johnFavColor = "blue";

// person(johnName, johnFavColor);
// person("Jane Smith", "green");



// Third iteration

// function person(name, favColor) {
// 	console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
// }

// var john = {
// 	name: "John Doe",
// 	favoriteColor: "blue"
// }

// person(john.name, john.favoriteColor);
// person("Jane Smith", "green");



// Fourth iteration

// var john = {
// 	name: "John Doe",
// 	favoriteColor: "blue",
// 	greet: function() {
// 		console.log("Hello, my name is " + john.name + " and my favorite color is " + john.favoriteColor + ".");
// 	}
// }

// john.greet();



// Fifth and final iteration

// function Person(fullName, favColor) {
// 	this.name = fullName;
// 	this.favoriteColor = favColor;
// 	this.greet = function() {
// 		console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
// 	}
// }

// var john = new Person("John Doe", "blue");
// john.greet();

// var jane = new Person("Jane Smith", "green");
// jane.greet();



// Modules
var $ = require('jquery');
var Person = require('./modules/Person');

alert("ABC 321");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

$("h1").remove();