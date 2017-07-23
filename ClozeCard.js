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
console.log("==========================");
console.log(cardOne.partial);
console.log("==========================");
console.log(cardTwo.fullText);
console.log("==========================");
console.log(cardTwo.partial);
console.log("==========================");
console.log(cardThree.fullText);
console.log("==========================");
console.log(cardThree.partial);
console.log("==========================");

module.exports = ClozeCard;

