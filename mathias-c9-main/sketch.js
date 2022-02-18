

var box;

function setup() {
  createCanvas(600,600);
  box = createSprite(300,300,50,50);
  box.shapeColor="red";
}

function draw() {
  background(0);

if(keyDown("up")){
  box.y = box.y -5;
}else if (keyDown("down")){
  box.y = box.y +5;
}

if(keyDown("right")){
  box.x = box.x +5;
}else if (keyDown("left")){
  box.x = box.x -5;
}

if(keyDown("space")){
  background("blue");
}else{
  background("black");
}
drawSprites();
} 