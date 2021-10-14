
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:12
}

 ball=Bodies.circle(250,20,10,ball_options);
 World.add(world,ball);

 groundObj=new ground(width/2,670,width,20);
 leftSide=new ground(700,600,20,120);
 rightSide=new ground(500,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,10);
 groundObj.show();
 leftSide.show();
 rightSide.show();

  drawSprites();
 
}

function KeyPressed(){
	if(KeyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.5});
	}
}

