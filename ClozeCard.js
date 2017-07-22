var inquirer = require('inquirer');

var ClozeCard = function(text, cloze) {

	if (!text.includes(cloze)) {
		return;
	}
	this.text = text;
	//console.log(text);
	//console.log("=============================");
	this.cloze = cloze;
	// console.log(cloze);
	// console.log("=============================");
	this.fullText = text;
	this.partial = text.replace(cloze,'...');

	
}


var cardOne = new ClozeCard("George Washington was the first president of the United States", "George Washington");
var cardTwo = new ClozeCard("This doesn't work", "oops");
var cardThree = new ClozeCard("'Starry Night' is a famous painting by Van Gogh", "Van Gogh");

console.log(cardOne.fullText);
console.log(cardOne.partial);
console.log(cardTwo.fullText);
console.log(cardTwo.partial);
console.log(cardThree.fullText);
console.log(cardThree.partial);

module.exports = ClozeCard;

// var flashcard = function() {
//     inquirer.prompt([
//       {
//         name: "Question 1",
//         message: " "
//       }, {
//         name: "Question 2",
//         message: " "
//       }, {
//         name: "Question 3",
//         message: " ",
//       }, {
//         name: "Question 4",
//         message: " ",
//       }, {
//         name: "Question 5",
//         message: " "
//       }, {
//         name: "Question 6",
//         message: " "
//       }, {
//         name: "Question 7",
//         message: " ",
//       }, {
//         name: "Question 8",
//         message: " ",
//       }
//     ]).then(function(answers) {
      
//       var creatClozeCard = new ClozeCard(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      
//       createPlayer();
//     });
// }