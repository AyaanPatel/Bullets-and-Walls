var bullet, wall
var speed,weight, thickness

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,width/2); 
  wall.shapeColor = color(80,80,80);

  
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/0.5){
    bullet.velocityX = 0;
    var damage= (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor = color(0,255,0);
    }
  console.log(bullet.shapecolor);
  drawSprites();
}
}