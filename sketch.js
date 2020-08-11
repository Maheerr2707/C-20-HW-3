
var fixedRect,movingRect;
var r,g,b;

function setup(){
  createCanvas(600,900);
    fixedRect = createSprite(200,200,50,80);
    fixedRect.shapeColor = "blue";

    movingRect = createSprite(400,200,80,30);
    movingRect.shapeColor = "blue";

    var r = createSprite(200,300);
    var g = createSprite(400,600);
    var b = createSprite(600,900);
}


function draw(){
background(0,0,0);

movingRect.x = World.mouseX
movingRect.y = World.mouseY

if(movingRect.x>0 || movingRect.x<200 && movingRect.y<300){
  r.shapeColor = "black"
}

if(movingRect.X>200 || movingRect.x<400 && movingRect.y>200){
  g.shapeColor = "yellow"
}

if(movingRect.X>400 && movingRect.y>600)
drawSprites();
}