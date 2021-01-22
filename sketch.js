
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 380, width, 10 , {isStatic:true} );
	World.add(world, ground); 

  leftSide = new Dustbin(600,320,20,100);
  bottomSide = new Dustbin(600,280,200,200);	
	rightSide = new Dustbin(790,320,20,100);
	Paper = new paper(100,370,20) ;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  push();
  fill("yellow");
  rect(width/2, 380, width, 10);
  pop();

  
  leftSide.display();
  rightSide.display();
  bottomSide.addimg();
  Paper.display();

  drawSprites();
 
}

function keyPressed()
{
 if(keyCode === UP_ARROW)
 {
  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:60,y:-70});

 }

}

