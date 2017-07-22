var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

var basicOne = new BasicCard("Who is the first president of the United States?", "George Washington");
console.log(basicOne.front);
console.log("========================");
console.log(basicOne.back);
console.log("========================");

module.exports = BasicCard;