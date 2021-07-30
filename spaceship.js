class Spaceship{
    constructor(x,y,width,height){
var options={
density:1.2,
friction:0,
restitution:0.3,
isStatic:true
}
this.width=width;
this.height=height;
this.x=x;
this.y=y;
this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
this.image=loadImage("spaceship image 2.gif")
World.add(world,this.body)

    }
    display(){

var position=this.body.position;
push();
translate(position.x,position.y)
imageMode(CENTER);
image(this.image,50,50,this.width,this.height);
pop();


    }
}