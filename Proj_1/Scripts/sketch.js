var p;
var people = [];
function setup(){
	createCanvas(1000, 800);
	background(50);
	for(let i=0; i<500; i++){
		let randomX = random(25, 975);
		let randomY = random(25, 775);
		p = new person(randomX, randomY);
		people.push(p);
	}
}

function draw (){
	background(50);
	for(let i=0; i<people.length; i++){
		p = people[i];
		p.display();
		p.move();
	}
}