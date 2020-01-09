var a, b;

function setup() {

  createCanvas(800,800);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(400, 400, 25, 25);
  a.debug = true;
  b.debug = true;
  a.shapeColor = "red"
  b.shapeColor = "blue"
}

function draw() {
  background(255,255,255);  
  b.x = mouseX;
  b.y = mouseY;

if(b.x - a.x < a.width/2 + b.width/2 && b.y - a.y < a.height/2 + b.height/2 && a.x - b.x < a.width/2 + b.width/2 && a.y - b.y < a.height/2 + b.height/2) {
  a.shapeColor = "green"
  b.shapeColor = "green"
} 
else {
  a.shapeColor = "red"
  b.shapeColor = "blue" 
}
  drawSprites();
}