const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

var world,engine;
var groundObj,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	 engine = Engine.create();
	 world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		restitution:0.0001,
        frcition:0,
		density:1
	}
    ball=Matter.Bodies.circle(100,100,15,ball_options);
	World.add(world,ball);

    
	
	groundObj=new ground(width/2,570,width,20);
	leftSide=new ground(900,500,20,120);
	rightSide=new ground(1100,500,20,120);

	//Engine.run(engine);
    rectMode(CENTER);
  ellipseMode(CENTER);
}


function draw() {
  Engine.update(engine);
  

  background(225);
  ellipse(ball.position.x,ball.position.y,30);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  
    
 
}
function keyPressed(){
if(keyCode === UP_ARROW){  
	Matter.Body.applyForce(ball,{x:0,y:0},{x:35,y:-45});
  }
}


