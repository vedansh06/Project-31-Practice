const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground1;


var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,800,480,10);
 
  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
    console.log(k);
  }
  for(var a = 15;a <= width - 10; a=a+50){
    plinkos.push(new Plinko(a,175,10));
  }
  for(var b = 40;b <=width; b = b + 50){
    plinkos.push(new Plinko(b,75,10));
  }
  for(var c = 40;c <= width; c = c + 50){
    plinkos.push(new Plinko(c,275,10));
  }
  for(var d = 15;d <= width - 10;d = d + 50){
    plinkos.push(new Plinko(d,375,10));
  }


}

function draw() {
  background(0); 

  ground1.display();
  for(var k = 0; k <= divisions.length; k++){
    divisions[k].display();
  }
  for(var a = 0;a < plinkos.length; a++){
    plinkos[a].display();
  }
  if(frameCount %60 == 0){
    particles.push(new Particle(random(width/2 - 10,width/2 + 10),10,10));
     }
  /*for(var b = 40;b < plinkos.length; b++){
    plinkos[b].display();
  }
  for(var c = 40;c < plinkos.length; c++){
    plinkos[c].display();
  }
  for(var d = 15;d < plinkos.length; d++){
    plinkos[d].display();
  }*/
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
   
  Engine.update(engine);
  drawSprites();
}