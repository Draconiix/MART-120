//-----------------------VARIABLES--------------------------//
  //Character Variables//
    var FrogX = 400;
    var FrogY = 550;
    var FrogD = 45;
    var move = 5;

  //Car Variables/Arrays//
    var CarX = [];
    var CarY = [];
    var CarH = [];
    var CarW = [];
    var CarSpeed = [];

  //Text var//
    var textX= 330;
    var textY= 30;
//----------------------CANVAS & DRAW----------------------//
  function setup()
    {
      createCanvas(800,600);
      //Car 1//
        CarX[0] = 60;
        CarY[0] = 125;
        CarH[0] = 50;
        CarW[0] = 100;
       CarSpeed[0] = 5;
      //Car 2//
        CarX[1] = 80;
        CarY[1] = 215;
        CarH[1] = 75;
        CarW[1] = 120;
       CarSpeed[1] = 5;
      //Car 3//
        CarX[2] = 0;
        CarY[2] = 315;
        CarH[2] = 75;
        CarW[2] = 150;
       CarSpeed[2] = 5;
      //Car 4//
        CarX[3] = 50;
        CarY[3] = 420;
        CarH[3] = 60;
        CarW[3] = 120;
       CarSpeed[3] = 5;
      
    }
//-------------------------!!!DRAW HERE!!!----------------------//
  function draw()
    {
      background(40);
  //Road//
      createRoad();
  //Car functions//
      Traffick();
      TraffickCollision();
  //Character functions//
      drawFrog();
      FrogMovement();
      
  //Borders & Exit//
      createBorders(20);
      createEscape();

}
//----------------------FUNCTIONS--------------------------//
function Traffick()
{
    Car1();
    Truck1();
    Truck2();
    Car2();
  
  //----------------------//
  function Car1(){
    fill(225,50,0);
    rect(CarX[0],CarY[0],CarW[0],CarH[0],5)
    
    CarX[0] += CarSpeed[0];
      if(CarX[0] > width)
        {
        CarX[0] = -150
        CarSpeed[0] = random(3,5)+2
        CarColor = random()
        }
  }//Car1 End
  
  function Truck1(){
    fill(50,100,200)
    rect(CarX[1],CarY[1],CarW[1],CarH[1],5)
    
    CarX[1] += CarSpeed[1];
      if(CarX[1] > width)
        {
        CarX[1] = -150
        CarSpeed[1] = random(3,5)+1
        }
  }//Truck1 End
  
  function Truck2(){
     fill(0,200,100)
     rect(CarX[2],CarY[2],CarW[2],CarH[2],5)
    
     CarX[2] -= CarSpeed[2];
      if(CarX[2] < -150)
        {
        CarX[2] = 950
        CarSpeed[2] = random(2,5)+1
        }
  }//Truck2 End
  
  function Car2(){
      fill(100,50,225)
      rect(CarX[3],CarY[3],CarW[3],CarH[3],5)
    
      CarX[3] -= CarSpeed[3];
      if(CarX[3] < -150)
        {
        CarX[3] = 950
        CarSpeed[3] = random(3,5)+2
        }
   }//Car2 End
  //---------------------//
}
function TraffickCollision()
{
//Car 1 Collision//
  if(FrogX > CarX[0]-CarW[0] && FrogX < CarX[0]+CarW[0] && FrogY > CarY[0]-CarH[0] && FrogY < CarY[0]+CarH[0]){
     RestartGame();
     }
  else{
    move = 5;
    }
//Car 2 Collision//
  if(FrogX > CarX[1]-CarW[1] && FrogX < CarX[1]+CarW[1] && FrogY > CarY[1]-CarH[1] && FrogY < CarY[1]+CarH[1]){
     RestartGame();
     }
  else{
    move = 5;
    }
//Car 3 Collision//
  if(FrogX > CarX[2]-CarW[2]+110 && FrogX < CarX[2]+CarW[2] && FrogY > CarY[2]-CarH[2] && FrogY < CarY[2]+CarH[2]){
     RestartGame();
     }
  else{
    move = 5;
    }
//Car 4 Collision//
  if(FrogX > CarX[3]-CarW[3]+100 && FrogX < CarX[3]+CarW[3] && FrogY > CarY[3]-CarH[3] && FrogY < CarY[3]+CarH[3]){
     RestartGame();
     }
  else{
    move = 5;
    }
}
function createBorders(thickness)
{
    fill(196,164,110);
    // top left border
    rect(0,0,200,thickness);
    // top right border
    rect(600,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height);
  
  //Wall Collision detection//
    //Left Wall//
    if(FrogX < 25){
      FrogX = FrogX + move;
    }
    //Right Wall//
    else if (FrogX > 775){
      FrogX = FrogX - move;
    }
    //Bottom Wall//
    else if (FrogY > 575){
      FrogY = FrogY - move;
    }
    //Upper Wall//
    else if (FrogY < 25 && FrogX > 600 || FrogY < 25 && FrogX < 200){
      FrogY = FrogY + move;
    }
}
function createEscape()
{
  push()
  fill(225,50,50)
    stroke(130,30,0)
    strokeWeight(5)
    textSize(32);
    text("ESCAPE",textX,textY)
  //Check if Frog escapes//
    if(FrogY < textY-30 && FrogX > 200 && FrogX < 600)
      {
         fill(0,225,75);
          stroke(5);
          textSize(44);
          text("You Win!", 310, 310);
      }
    pop()
}
function drawFrog()
{
    fill(24,200,29);
    circle(FrogX,FrogY,FrogD);
}
function createRoad()
{
  fill(0,100,50)
  //Bottom walkway//
  rect(0,500,800,100);
  //Upper walkway//
  rect(0,0,800,100);
  //Mid & Edge Lines//
  push()
  stroke(225,150,0);
  strokeWeight(6);
  line(0,300,width,300)
  
  stroke(135)
  line(0,100,width,100)
  line(0,500,width,500)
  pop()
  //White upper//
  push()
  stroke(225);
  strokeWeight(4);
  drawingContext.setLineDash([72,30])
  line(0,200,width,200)
  pop()
  //White Lower//
  push()
  stroke(225);
  strokeWeight(4);
  drawingContext.setLineDash([72,30])
  line(0,400,width,400)
  pop()
}
function FrogMovement()
{
  if(keyIsDown(68))
    {
      FrogX+= move;
    }
  if(keyIsDown(65))
    {
      FrogX-= move;
    }
  if(keyIsDown(87))
    {
      FrogY-= move;
    }
  if(keyIsDown(83))
    {
      FrogY+= move;
    }
}
function RestartGame()
{
  FrogX = 400;
  FrogY = 550;
  //if(counter = 0){}
}

