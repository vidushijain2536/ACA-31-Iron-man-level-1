
var bg, backgroundImg;
var ironman,man;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironman = loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  man =createSprite(100,500)
  man.addImage(ironman)
  man.scale=0.5
  ground = createSprite(200,585,400,10);
  ground.visible =false;
  man.setCollider("rectangle",10,10,300,300);
  

 
}

function draw() {
     if (keyDown("up")){
     man.velocityY = -10;}
    if (keyDown("left")){
      man.x = man.x -5;
    }
    if (keyDown("right")){
      man.x = man.x+5;}

    
  man.velocityY = man.velocityY + 0.5

  man.collide(ground);
    
    drawSprites();
   
}

