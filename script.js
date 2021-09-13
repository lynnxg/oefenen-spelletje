
class Ball{
  constructor(x,y,w,h,vx,vy,c){
    this.h = h;
    this.w = w;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.c = c;
  }

  draw() {
    fill(this.c);
    ellipse(this.x,this.y,50,50);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x < 25 || this.x >= 475){
      this.vx = this.vx * -1;
    }

    if(this.y < 25 || this.y >= 375){
      this.vy = this.vy * -1;
    }
  }

}
  var ball1, ball2, ball3;

function setup() {
	createCanvas(500, 400);
  ball1 = new Ball (30,200,50,50,3,3, "red");
  ball2 = new Ball(120,210,50,50,2,2,"green");
  ball3 = new Ball(200,150,50,50,1,1, "white");
}

function draw() {
  background(225);

  ball1.draw();
  ball2.draw();
  ball3.draw();
}
