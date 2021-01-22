class Dustbin{
    constructor(x,y,width,height){
        var options=
        {
         isStatic:true,
         density:1.0,
         restitution:0.8,
         friction:1.0,
        }
 
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        
        World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position
       rectMode(CENTER)
        push();
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
    addimg(){
        var pos=this.body.position;
        push();
        imageMode(CENTER)
        image(this.image,700,280,this.width,this.height);
        pop();
    }
}
