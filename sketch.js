const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
   backgroundImage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(200,400,600,5);
  superhero = new Hero(400,3,100,100);
  invisibleRope = new Fly(superhero.body,{x:150,y:265});
  block1 = new Blocks(280,350,40,40);
  block2 = new Blocks(310,350,40,40);
  block3 = new Blocks(340,350,40,40);
  block4 = new Blocks(370,350,40,40);
  block5 = new Blocks(400,350,40,40);
  block6 = new Blocks(430,350,40,40);
  block7 = new Blocks(460,350,40,40);
  block8 = new Blocks(490,350,40,40);
  block9 = new Blocks(310,315,40,40);
  block10 = new Blocks(340,315,40,40);
  block11 = new Blocks(370,315,40,40);
  block12 = new Blocks(400,315,40,40);
  block13 = new Blocks(430,315,40,40);
  block14 = new Blocks(460,315,40,40);
  monster = new Monster(380,200,100,100);
  //engine
  Engine.run(engine);
}

function draw() {
  //background(0);
  background(backgroundImage);
  //display
  superhero.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  invisibleRope.Fly;
}