var issing,bathing,brushing,drinking,eating,gyming1,gyming2,moveing,sleeping;

function preload () {
  issing = loadImage("iss.png");
  sleeping = loadImage("sleep.png")
  brushing = loadImage("brush.png")
  bathing = loadAnimation("bath1.png","bath2.png") 
  drinking = loadAnimation("drink1.png","drink2.png")
  eating = loadAnimation("eat1.png","eat2.png")
  gyming1 = loadAnimation("gym1.png","gym2.png")
  gyming2 = loadAnimation("gym11.png","gym12.png")
  moveing = loadAnimation("move.png","move1.png")
}
function setup() {
  createCanvas(1000,600);

  iss=createSprite(300,300);
  iss.addImage(issing);
  iss.scale=0.15;

  brush=createSprite(300,300)
  brush.addImage(brushing);
  brush.scale=0.1
  brush.visible=false

  sleep=createSprite(300,300)
  sleep.addImage(sleeping);
  sleep.scale=0.1;

  bath=createSprite(300,300)
  bath.addAnimation(bathing);
  bath.scale=0.01;
  bath.visible=false

  drink=createSprite(300,300)
  drink.addAnimation(drinking);
  drink.scale=0.1;
  drink.visible=true

  eat=createSprite(300,300)
  eat.addAnimation(eating);
  eat.scale=0.1;
  eat.visible=false

  gym1=createSprite(300,300)
  gym1.addAnimation(gyming1);
  gym1.scale=0.1;
  gym1.visible=false

  gym2=createSprite(300,300)
  gym2.addAnimation(gyming2);
  gym2.scale=0.1;
  gym2.visible=false;

}

function draw() {
  background(255,255,255);  
 
  if (keyDown("UP_ARROW")) {
  sleep.visible=false;
  brush.visible=true  
  } 
  else if (keyDown("DOWN_ARROW")){
  brush.visible=false
  gym1.visible=true  
  }
  else if (keyDown("LEFT_ARROW")){
    gym1.visible=false
    bath.visible=true
  }
  else if(keyDown("RIGHT_ARROW")){
    bath.visible=false
    eat.visible =true
  }
  drawSprites();

}
