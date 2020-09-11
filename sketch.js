// creating the variables
var obs1,obs2,obs3,obs4;
var bod1,bod2,bod3,bod4;
var pong;
var gameState;
var block1,block2,block3,block4;

function setup() {
  createCanvas(800,800);

 // creating the gameState
 gameState = "start"

 // creating the winning condition
  block1 = createSprite(170,630,100,100);
  block1.shapeColor = "black";

  block2 = createSprite(630,630,100,100);
  block2.shapeColor = "black";

  block3 = createSprite(630,170,100,100);
  block3.shapeColor = "black";

  block4 = createSprite(170,170,100,100);
  block4.shapeColor = "black";

   // creating the elements of the game
 pong = createSprite(400,400,20,20);
 pong.shapeColor = "red";

  
// creating the borders of the carrom board . 
   bod1 = createSprite(170,400,20,350);
   bod1.shapeColor = "blue";

   bod2 = createSprite(630,400,20,350);
   bod2.shapeColor = "blue";

   bod3 = createSprite(400,170,350,20);
   bod3.shapeColor = "blue";

   bod4 = createSprite(400,650,350,20);
   bod4.shapeColor = "blue";

 // creating the moving obstacles.

 obs1 = createSprite(300,500,30,30);
 obs1.shapeColor = "black";
 obs1.velocityY = -9;

 obs2 = createSprite(500,300,30,30);
 obs2.shapeColor = "black";
 obs2.velocityY = -9;

 obs3 = createSprite(300,300,30,30);
 obs3.shapeColor = "black";
 obs3.velocityX = -9;

 obs4 = createSprite(500,500,30,30);
 obs4.shapeColor = "black";
 obs4.velocityX = 9;

}

function draw() {
  

  background("green");

  textSize(30);
  fill("yellow");
  text("Control the red ball using the arrow keys !",150,750);

 fill ("yellow");
  textSize(30);
  text ("Place the red ball in the hole and you win !!", 150,75);

  
    // making the ball to be user controllable.
  if(keyDown(UP_ARROW)){
    pong.velocityY = -9;
  }
  if(keyDown(DOWN_ARROW)){
    pong.velocityY = 9;
  }
  if(keyDown(LEFT_ARROW)){
    pong.velocityX = -9;
  }
  if(keyDown(RIGHT_ARROW)){
    pong.velocityX = 9;
  }

  // making the bounceOff function

  // for obs1.
   if(obs1.y - bod3.y < obs1.height + bod3.height){
    obs1.velocityY = 17;
  }
   if(bod4.y - obs1.y < bod4.height + obs1.height){
    obs1.velocityY = -20;
  }

  // for obs2
  if(obs2.y - bod3.y < obs2.height + bod3.height){
    obs2.velocityY = 13;
  }
   if(bod4.y - obs2.y < bod4.height + obs2.height){
    obs2.velocityY = -18;
  }

  // bounceOff of obs3
  if(obs3.x - bod1.x < obs3.width + bod1.width){
    obs3.velocityX = 20;
  }
   if(bod2.x - obs3.x < bod2.width + obs3.width){
    obs3.velocityX = -20;
  }

 // bounceOff of obs4
  if(bod2.x - obs4.x < bod2.width + obs4.width){
    obs4.velocityX = -15;
  }
  if(obs4.x - bod1.x < obs4.width + bod1.width){
    obs4.velocityX = 14;
  }

  // bounceOff function of ball from all the borders.

  if(pong.x - bod1.x < pong.width + bod1.width){
    pong.velocityX = 9;
  }

  if(bod2.x - pong.x < bod2.width + pong.width){
    pong.velocityX = -9;
  }
  
  if(bod4.y - pong.y < bod4.height + pong.height){
    pong.velocityY = -9;
  }

  if(pong.y - bod3.y < pong.height + bod3.height){
    pong.velocityY = 9;
  }
  
  drawSprites();
}

