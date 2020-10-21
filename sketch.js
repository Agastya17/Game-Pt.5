var back;
var player1, player2, fireballImg, waterballImg;
var invisibleGround1, invisibleGround2, invisibleLadderTop;
var edges;
var i=60;
var fireCharge=10, cTime, rTime=0;
var waterCharge=10, wTime, aTime=0;
var apple, book1, book2, book3, book4, book5, bread, chest, ham, mug, pillow, plant1, plant2;
var appleImg, book1Img, book2Img, book3Img, breadImg, chestImg, hamImg, mugImg, pillowImg, plant1Img, plant2Img;
var Gcrouch, Gjump, Gleft, Gright, Gpower, Gstart, Gthrow;
var Vcrouch, Vdamage, Vjump, Vpower, Vright, Vstart, Vthrow;
var EnergyMeter1=0;

function preload(){
  back = loadImage("Images/bg.png");
  fireballImg = loadAnimation("Images/fire1.png", "Images/fire2.png");
  waterballImg = loadAnimation("Images/water1.png", "Images/water2.png")

  appleImg = loadImage("Images/apple.png");
  book1Img = loadImage("Images/book1.png");
  book2Img = loadImage("Images/book2.png");
  book3Img = loadImage("Images/book3.png");
  breadImg = loadImage("Images/bread.png");
  chestImg = loadImage("Images/chest.png");
  hamImg = loadImage("Images/ham.png");
  mugImg = loadImage("Images/mug.png");
  pillowImg = loadImage("Images/pillow.png");
  plant1Img = loadImage("Images/plant1.png");
  plant2Img = loadImage("Images/plant2.png");

  Gcrouch = loadImage("Images/GokuCrouch.png");
  Gjump = loadImage("Images/GokuJump.png");
  Gleft = loadImage("Images/GokuLeft.png");
  Gright = loadImage("Images/GokuRight.png");
  Gpower = loadImage("Images/GokuPower.png");
  Gstart = loadImage("Images/GokuStarting.png");
  Gthrow = loadImage("Images/GokuThrow.png");

  Vcrouch = loadImage("Images/VegetaCrouch.png");
  Vdamage = loadImage("Images/VegetaDamage.png");
  Vjump = loadImage("Images/VegetaJump.png");
  Vpower = loadImage("Images/VegetaPower.png");
  Vright = loadImage("Images/VegetaRight.png");
  Vstart = loadImage("Images/VegetaStarting.png");
  Vthrow = loadImage("Images/VegetaThrow.png");
}

function setup() {
  createCanvas(1400, 800);
 
  apple = createSprite(717, 620);
  apple.addImage(appleImg);
  apple.scale = 0.13;
  apple.debug = true;

  book1 = createSprite(1160, 550);
  book1.addImage(book1Img);
  book1.scale = 0.2;
  book1.debug = true;

  book2 = createSprite(1160, 610);
  book2.addImage(book2Img);
  book2.scale = 0.2;
  book2.debug = true;

  book3 = createSprite(1220, 700);
  book3.addImage(book3Img);
  book3.scale = 0.2;
  book3.debug = true;

  book4 = createSprite(430, 235);
  book4.addImage(book1Img);
  book4.scale = 0.2;
  book4.debug = true;

  book5 = createSprite(465, 235);
  book5.addImage(book3Img);
  book5.scale = 0.2;
  book5.debug = true;

  bread = createSprite(880, 615);
  bread.addImage(breadImg);
  bread.scale = 0.1;
  bread.debug = true;

  chest = createSprite(101, 627);
  chest.addImage(chestImg);
  chest.scale = 0.8;
  chest.debug = true;

  ham = createSprite(980, 620);
  ham.addImage(hamImg);
  ham.scale = 0.2;
  ham.debug = true;

  mug = createSprite(935, 613);
  mug.addImage(mugImg);
  mug.scale = 0.1;
  mug.debug = true;

  pillow = createSprite(814, 250);
  pillow.addImage(pillowImg);
  pillow.scale = 0.8;
  pillow.debug = true;

  plant1 = createSprite(530, 680);
  plant1.addImage(plant1Img);
  plant1.scale = 0.77;
  plant1.debug = true;

  plant2 = createSprite(315, 310);
  plant2.addImage(plant2Img);
  plant2.scale = 0.75;
  plant2.debug = true;

  player1 = createSprite(30, height-505, 50, 120);
  player1.addImage(Gright);
  player1.scale = 0.85;
  player1.debug = true;
  player1.setCollider("rectangle", 0, 0,  100, 220);
  
  player2 = createSprite(30, height-120, 50, 120);
  player2.addImage(Vright);
  player2.scale = 0.6;
  player2.debug = true;
  player2.setCollider("rectangle", 0, 0,  100, 350);

  invisibleGround1 = createSprite(width/2, height - 52, width,20);
  //invisibleGround1.visible = false;

  invisibleGround2 = createSprite(width/2-135, height - 420, width,20);
  //invisibleGround2.visible = false;

  invisibleLadderTop = createSprite(1320, 370-player1.height, 70, 10);
  //invisibleLadderTop.visible = true;
}

function draw() {
  background(back);
  edges = createEdgeSprites();

  //***Player 1 CONTROLS */
  if(keyDown(LEFT_ARROW)){
    player1.x = player1.x - 7;
    player1.addImage(Gleft);
  }

  if(keyDown(RIGHT_ARROW)){
    player1.x = player1.x + 7;
    player1.addImage(Gright);
  }

  //Before the ladder
  if(player1.x <= 1290){
    if(keyDown(UP_ARROW) && (player1.collide(invisibleGround1)||player1.collide(invisibleGround2))){
      player1.velocityY = -13;
      player1.addImage(Gjump);
    }
    player1.velocityY = player1.velocityY + 0.8;
    
    if(keyDown(DOWN_ARROW)){
      player1.addImage(Gcrouch);
    }
  }
  //Ladder controls
  else if(player1.x > 1290 && player1.x < 1330 && player1.y >= 330){
    if(keyDown(UP_ARROW)){
      player1.y = player1.y - 5;
    }
    //player1.velocityY = player1.velocityY + 0.8;
    
    if(keyDown(DOWN_ARROW)){
      player1.y = player1.y + 5;
    }
  }

  //***Player 2 CONTROLS */
  if(keyDown(65)){
    player2.x = player2.x - 7;
  }

  if(keyDown(68)){
    player2.x = player2.x + 7;
    player2.addImage(Vright);
  }

  if(player2.x < 1290){
    if(keyDown(87) && (player2.collide(invisibleGround1)||player2.collide(invisibleGround2))){
      player2.velocityY = -13;
    }
    player2.velocityY = player2.velocityY + 0.8;
    
    if(keyDown(83)){
      player2.addImage(Vcrouch);
    }
  }
  else if(player2.x >= 1290 && player2.x <= 1330 && player2.y >= 330){
    if(keyDown(87)){
      player2.y = player2.y - 5;
    }
    //player2.velocityY = player2.velocityY + 0.8;
    
    if(keyDown(83)){
      player2.y = player2.y + 5;
    }
  }

  //Fireball powerup
  if(keyWentDown("m") && fireCharge > 0){
    Fireball();
    player1.addImage(Gpower);
    fireCharge--;
    if(fireCharge === 0){
      cTime = frameCount;
      rTime = 100;
    }
  }
  if(frameCount === cTime + 100){
    fireCharge = 10;
  }
  
  rTime--;

  //Waterball powerup
  if(keyWentDown(113) || keyWentDown(81) && waterCharge > 0){
    Waterball();
    player2.addImage(Vpower);
    waterCharge--;
    if(waterCharge === 0){
      wTime = frameCount;
      aTime = 100;
    }
  }
  if(frameCount === wTime + 100){
    waterCharge = 10;
  }

  aTime--;

  PickUp();
  
  console.log(EnergyMeter1);
  player1.collide(invisibleGround1);
  player1.collide(invisibleGround2);
  player1.collide(invisibleLadderTop);
  player1.collide(edges);

  player2.collide(invisibleGround1);
  player2.collide(invisibleGround2);
  player2.collide(invisibleLadderTop);
  player2.collide(edges);
  
  drawSprites();

  //Reload Time For Fireball
  fill("red");
  textSize(28);
  if(cTime % 10 === 0 && rTime > 0){
    text("Time to reload: " + Math.round(rTime/10), 50, 20);
  }
  text("Time to reload: " + Math.round(rTime/10), 50, 20);

  //Reload Time For Waterball
  fill("blue");
  textSize(28);
  if(wTime % 10 === 0 && aTime > 0){
    text("Time to reload: " + Math.round(aTime/10), 1100, 20);
  }
  text("Time to reload: " + Math.round(aTime/10), 1100, 20);

  timer();
}

function timer(){
  textSize(38);
  fill("white");
  stroke("black")
  strokeWeight(8);
  //console.log(i)

  if(frameCount%30===0){
    i--;  
  }
  if(i>=0){
    text("Time Remaining: " + i + " seconds", displayWidth/2-250, 30);
  }
}