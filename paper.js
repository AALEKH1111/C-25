class paper 
{
    constructor(x,y,r)
    {   
     var options=
     {
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
     }
      
      this.body=Bodies.circle(x,y,r,options);
      this.x=x;
      this.y=y;
      this.r=r;
      this.image = loadImage("paper.png")
      
      World.add(world,this.body);
    }
    display()
    {
      var pos = this.body.position
     imageMode(CENTER)
     push();
     translate(pos.x,pos.y);
     rotate(this.body.angle);
     image(this.image,0,0,this.r,this.r);
     pop();
    }
}