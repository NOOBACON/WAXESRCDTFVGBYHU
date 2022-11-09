
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground;
var angle=60;
var boxes=[];
var wall_L;
var wall_R;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  wall_L=Bodies.rectangle(-10,200,20,400,option);
  World.add(world,wall_L);
  wall_R=Bodies.rectangle(410,200,20,400,option);
  World.add(world,wall_R);
  ground=Bodies.rectangle(200,410,400,20,option);  
  World.add(world,ground);
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(  
    new Box(mouseX,mouseY,30,30)  
    )
}

function draw() 
{
  background(51);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}  
}

