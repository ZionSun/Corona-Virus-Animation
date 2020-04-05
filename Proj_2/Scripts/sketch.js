var p;
var people = [];
var timeInterval;
var nS;
var nI;
function setup(){
	createCanvas(1000, 800);
	background(50);
	timeInterval = 1000;
	nS = 0;
	nI = 0;
	for(let i=0; i<500; i++){
		let randomX = random(25, 975);
		let randomY = random(25, 775);
		p = new person(randomX, randomY, 0);
		people.push(p);
	}
	people[2].label = 1;
	setTimeout(update, timeInterval);
}

function update(){
	for(let i=0; i<people.length; i++){
		let p = people[i];
		if(p.label === 1){
			let neighbors = p.findNeighbors(people);
			for(let j=0; j<neighbors.length; j++){
				let ip = neighbors[j];
				ip.label = 1;
			}
			p.recover();
		}
	}
	setTimeout(update, timeInterval);
}

function draw(){
	background(50);
	nS = 0;
	nI = 0;
	for(let i=0; i<people.length; i++){
		let p = people[i];
		if(p.label === 0){
			nS ++;
		}
		if(p.label === 1){
			nI ++;
		}
		p.display();
		p.move();
	}
	console.log(nI);
	if(nS === 0 && nI === 0){
		noLoop();
	}
}

//0 means susceptible, 1 means infected, 2 means recovered