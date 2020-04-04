class person{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.speedX = random(-3, 3);
		this.speedY = random(-3, 3);
	};
	
	display(){
		fill(0, 0, 255);
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
}