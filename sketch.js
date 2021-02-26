var ball;
var box1;
var box2;
var box3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	ground=new Ground(600, 650, 1200, 20);
	ball=new Ball(200, 450, 20);
	box1= new Box(700, 605, 20, 70);
    box2=new Box(760,630,100,20);
    box3=new Box(820,605,20,70);
   
}


function draw() {
  background(0);
  rectMode(CENTER);
 
  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  
  
 
 
}

 function keyPressed() {
	 if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:random(15,75),y:-65})
	 }
 }



