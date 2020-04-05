class person{
	constructor(x, y, label){
		this.x = x;
		this.y = y;
		this.speedX = random(-1.5, 1.5);
		this.speedY = random(-1.5, 1.5);
		this.label = label;
		this.sickDays = 0;
	};
	
	display(){
		if(this.label === 0){
			fill(0, 255, 0)
		}
		else if(this.label === 1){
			fill(255, 0, 0);
		}
		else if(this.label === 2){
			fill(0, 0, 255);
		}
		ellipse(this.x, this.y, 25, 25);
	}
	
	move(){
		this.x += this.speedX;
		this.y += this.speedY;
		if(this.x >= 975 || this.x <= 25){
			this.speedX *= -1; 
		}
		
		if(this.y >= 775 || this.y <= 25){
			this.speedY *= -1;
		}
	}
	
	distance(p){
		let d = sqrt((p.x-this.x) * (p.x-this.x) + (p.y-this.y) * (p.y-this.y));
		return d;
	}
	
	findNeighbors(people){
		let neighborList = []
		for(let i=0; i<people.length; i++){
			let neighbor = people[i];
			if(neighbor.label === 0 && this.distance(neighbor) <= 25){
				neighborList.push(neighbor);
			}
		}
		return neighborList;
	}
	
	recover(){
		this.sickDays ++;
		if(this.sickDays >= 2){
			this.label = 2; 
		}
	}
}