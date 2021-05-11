

var bow , arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0      
var redg,blueg,pinkg,greeng,arrowg
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
      
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  redg=new Group()
  pinkg=new Group()
  blueg=new Group()
  greeng=new Group()
  arrowg=new Group()

  
//  red_balloon = createSprite(50, 180, 1, 1);
// red_balloon.addImage(red_balloonImage)
//   red_balloon.scale = 0.1
  
  
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  var a = Math.round(random(1,4));
  if (World.frameCount % 80 == 0)
  { if (a == 1) { redballoon();
} else if (a == 2)
{ greenballoon();
} else if (a == 3)
{ blueballoon();
} else { pinkballoon(); } }
  
  if(arrowg.isTouching(redg)) {
    redg.destroyEach()
    arrowg.destroyEach()
    score=score+1
  }
  if(arrowg.isTouching(pinkg)) {
    pinkg.destroyEach()
    arrowg.destroyEach()
    score=score+1
  }
  if(arrowg.isTouching(greeng)) {
    greeng.destroyEach()
    arrowg.destroyEach()
    score=score+1
  }
  if(arrowg.isTouching(blueg)) {
    blueg.destroyEach()
    arrowg.destroyEach()
    score=score+1
  }
  drawSprites();
  text("score"+score,100,50)
}

function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrowg.add(arrow)
  return arrow;
}
function redballoon() {
var red = createSprite(0,250, 10, 10);
red.addImage(red_balloonImage);
red.y = Math.round(random(20,370))
red.velocityX = 3; 
red.scale = 0.1
  red.lifetime=300
  redg.add(red)
}
function blueballoon() {
var blue = createSprite(0,250, 10, 10);
blue.addImage(blue_balloonImage);
blue.y = Math.round(random(20,370))
blue.velocityX = 3; 
blue.scale = 0.1
  blueg.add(blue)
  blue.lifetime=300
}
function pinkballoon() {
var pink = createSprite(0,250, 10, 10);
pink.addImage(pink_balloonImage);
pink.y = Math.round(random(20,370))
pink.velocityX = 3; 
pink.scale = 0.1
  pinkg.add(pink)
  pink.lifetime=300
}
function greenballoon() {
var green = createSprite(0,250, 10, 10);
green.addImage(green_balloonImage);
green.y = Math.round(random(20,370))
green.velocityX = 3; 
green.scale = 0.1
  greeng.add(green)
  green.lifetime=300
}