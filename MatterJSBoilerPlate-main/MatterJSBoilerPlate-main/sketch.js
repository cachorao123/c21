
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundObj
var leftSide
var rightSide

function preload()
{
	
}

function setup() {
	createCanvas(1024, 786);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}

	engine = Engine.create();
	world = engine.world;
ball=Bodies.circle(110,100,23, ball_options)
	//Create the Bodies Here.
World.add(world,ball)
groundObj=new Ground(width/2,670,width,20)
leftSide=new Ground(900,600,20,120)
rightSide=new Ground(1000,600,20,120)
	Engine.run(engine);
  
}    


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  Engine.update(engine)
  ellipse(ball.position.x,ball.position.y,23)
  drawSprites();
  groundObj.display();
 leftSide.display()
 rightSide.display()
}


function keyPressed (){
if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:10,y:-7})

}

}