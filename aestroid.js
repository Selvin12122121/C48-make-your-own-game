class Aestroid {
    constructor (x,y){
        var options={
            'restitution':0.1,
            'frictionAir':0.01
            }
        
        this.image=loadImage("ateroid.png")
        this.body=Bodies.circle(x,y,10,options)
       this.radius=10;
        World.add(world,this.body)
       
    }
update(){
    if (this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,displayWidth-20),y:random(0,-displayHeight-40)})
    }
}

    display(){
        var position=this.body.position
        push ()
        translate (position.x,position.y)
        imageMode(CENTER);
        image(this.image,50,50,this.width,this.height);
        pop ()
    }

}