var fixedRect, movingRect;

var car;

var object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car=createSprite(200,300,30,40);
  car.shapeColor = "blue";
  car.velocityX=5;

  wall = createSprite(1000,100,20,500);
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)){
    
    car.shapeColor = "blue";
    wall.shapeColor="blue";
 
  }
else {
    
    wall.shapeColor = "white";
    car.shapeColor="white";
  }

  if(collide(car,wall)){
    car.velocityX=0
  }
  else{
    car.velocityX=5;
  }
  drawSprites();
}
