var cat,mouse,ground;
var catRunning,mouseImg,groundImg,catLastImg;

function preload() {
    
catRunning = loadAnimation("images/cat2.png","images/cat3.png")
mouseImg = loadImage("images/mouse2.png","images/mouse3.png","images/mouse4.png");
mouseRunning = loadAnimation("images/mouse1.png")
groundImg = loadImage("images/garden.png");
catLastImg = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);

    ground = createSprite (400,300);
    ground.addImage(groundImg);
    ground.scale = 1;

    cat = createSprite (500,500)
    cat.addAnimation("running",catRunning);
    cat.scale = 0.2

    mouse = createSprite (200,500);
    mouse.addImage("mouse",mouseImg);
    mouse.scale = 0.2
     
}

function draw() {

    background(255);

    text(mouseX + ',' + mouseY,10,45);
  if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
       cat.addAnimation("catLastImg")
       cat.changeAnimation("catLastImg")
    }

   

   keyPressed();

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){

    cat.velocityX = -5;
    cat.addAnimation("catRunning");
    cat.changeAnimation("catRunning");
  }


}
