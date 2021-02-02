
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 100, 500, 30);

	bob1 = new Bob(300, 500, 60);
	bob2 = new Bob(360, 500, 60);
	bob3 = new Bob(420, 500, 60);
	bob4 = new Bob(480, 500, 60);
	bob5 = new Bob(540, 500, 60);

	rope1 = new Rope(bob1.body, roof.body);
	rope2 = new Rope(bob2.body, roof.body);
	rope3 = new Rope(bob3.body, roof.body);
	rope4 = new Rope(bob4.body, roof.body);
	rope5 = new Rope(bob5.body, roof.body);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);


	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}



