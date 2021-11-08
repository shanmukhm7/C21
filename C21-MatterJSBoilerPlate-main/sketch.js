var ball, ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	ground=new two(width/2,670,width,20);
  left=new two(500,600,20,120);
  right=new two(600,600,20,120);

  var options= {
    restitution:0.3,
    friction:0,
    isStatic:false,
    density:1.2
}

ball = Bodies.circle(200,500,30,options);
	World.add(world,ball);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);

  background(0);
  fill("Yellow")
  ellipse(ball.position.x,  ball.position.y);

  ground.display();
  left.display();
  right.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(ball,ball.position,{x:120,y:-120})
}  
}

