const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var spaceship;
var bg;
var ground;
var Aestroid1,Aestroid2,Aestroid3,Aestroid4,Aestroid5
var asteroids=[];
var maxAsteroids= 1;
function preload(){
    spaceshipIMG= loadImage("spaceship image 2.gif")
}


function setup(){
    createCanvas(displayWidth,displayHeight);
    engine=Engine.create();
    world=engine.world;
    //spaceship=new Spaceship(650,600,250,250);
   //// ground=new Ground(5,750,width,10)
    Aestroid1=new Aestroid(100,50,170,170)
    Aestroid2=new Aestroid(500,130,170,170)
    Aestroid3=new Aestroid(800,200,170,170)
    Aestroid4=new Aestroid(100,300,170,170)
    Aestroid5=new Aestroid(1200,200,170,170)
    spaceship=createSprite(width/2, 200, 10,10);
	spaceship.addImage(spaceshipIMG)
	spaceship.scale=0.6

  for(var i=0; i<maxAsteroids;i++){
asteroids.push(new Aestroid(random(0,displayWidth-20),random(0,-displayHeight-40)) );
  }
    

    

    
bg= loadImage("download.png")




}
function draw(){
    background(bg);
Engine .update (engine);
spaceship.display()
//ground.display()
//Aestroid1.display()
//Aestroid2.display()
//Aestroid3.display()
//Aestroid4.display()
//Aestroid5.display()
for(var i =0;i<maxAsteroids;i++){
    asteroids[i].display();
    asteroids[i].update();
}
drawSprites();
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
  
      spaceship.x=spaceship.x-20;    
      translation={x:-20,y:0}
      //Matter.Body.translate(packageBody, translation)
  
  
    } else if (keyCode === RIGHT_ARROW) {
      spaceship.x=spaceship.x+20;
      translation={x:20,y:0}
      //Matter.Body.translate(packageBody, translation)
    }
    
  }