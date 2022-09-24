
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var ball;

var fan1, fan2, fan3, fan4;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  var ground_options ={
    isStatic: true
  };

  ground = Bodies.rectangle(0,400,400,20,ground_options);
  World.add(world,ground);   

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  fan1 = new Fan(50,50);
  fan2 = new Fan(150,50);
  fan3 = new Fan(250,50);
  fan4 = new Fan(350,50);

    rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,750,20);

  fan1.display();
  fan2.display();
  fan3.display();
  fan4.display();

  Engine.update(engine);
}





