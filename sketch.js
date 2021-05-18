
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,100,300,20);
	
	/*rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter*2, 0);
	rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter*2, 0);
	rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter*2, 0);*/
	bobObject1 = new Bob(300,250,30);
	bobObject2= new Bob(250,250,30);

	rope1 = new Rope(bobObject1.body, roof.body, -120, 0);
	rope2 = new Rope(bobObject2.body, roof.body,-60, 0);

	//bobObject3= new Bob(210,250,20);
	console.log(bobObject1);
	console.log(bobObject2);
	//console.log(bobObject3)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
	
  roof.display();
 
  /*rope3.display();
  rope4.display();
  rope5.display();*/

	bobObject1.display();
  bobObject2.display();

  rope1.display();
  rope2.display();
  //bobObject3.display();



 
}
