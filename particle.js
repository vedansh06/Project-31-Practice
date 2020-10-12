class Particle{

    constructor(x,y,diameter){
        var options={
            isStatic: false,
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.diameter, this.diameter);
        pop();
    }
}