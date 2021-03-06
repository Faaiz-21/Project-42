var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var jungle,jungleImage 
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg");
}



function setup() {
 createCanvas(600,500);
 monkey = createSprite(80,315,20,20); 
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1
 jungle = createSprite(90,80,600,500);
 jungle.addImage(jungleImage); 
 ground = createSprite(400,350,900,10); 
 ground.shapeColor = "brown";
 ground.velocitiyX=-4;
 ground.x=ground.width/2;
 console.log(ground.x); 
 
 spawnFoodGroup = new Group();
 spawnObstaclesGroup = new Group(); 
 
  





}

function draw() {
 
 if(ground.x<0){
    ground.x=ground.width/2;
 }
 if(keyDown("space")){ 
    monkey.velocityY= -12;
 } 
 monkey.velocityY = monkey.velocityY + 0.8;
 monkey.collide(ground); 
  
 spawnFood();
 spawnObstacles(); 
 
  if(spawnFoodGroup.isTouching(monkey)){
    spawnFoodGroup.destroyEach();
    score = score + 2;
 } 
  text("Score : ", 100,50);
  drawSprites(); 
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/60) 
  textSize(25);
  text("Score : ", 100,50);
}

function spawnFood(){
  
  if(frameCount % 80 === 0){
     banana = createSprite(600,250,40,10);
     banana.y = random(120,200);
     banana.velocityX = -5;
     banana.lifetime = 300;
     monkey.depth = banana.depth + 1;
     banana.addImage(bananaImage);
     banana.scale = 0.05;
     spawnFoodGroup.add(banana);
     
}
}
function spawnObstacles(){

  if(frameCount % 300 === 0){
     obstacle = createSprite(800,320,10,40);
     obstacle.velocityX = -6;
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.15
     spawnObstaclesGroup.add(obstacle);
}
}