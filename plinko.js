class Plinko{

    constructor(x,y,diameter){
        var options={
            isStatic: true,
            
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0, 0, this.diameter, this.diameter);
        pop();
    }
}