//-----------------------VARIABLES--------------------------//
  //Character Variables//
    var CharX = 350;
    var CharY = 550;
    var CharD = 45;

  //Obstacle Variables//
    var rectSpeedx = 3;
    var rectX = -150;
    var rectY = 250;
    var rectH = 90;
    var rectW = 160;
    var truckColor= 150;

  //Mouse Shape Var//
    var mouseHumX;
    var mouseHumY;

  //Text var//
    var textX= 330;
    var textY= 30;
//----------------------CANVAS & DRAW----------------------//
  function setup()
    {
      createCanvas(800,600);
      
    }
  //!!!DRAW FUNCTION HERE!!!//
  function draw()
    {
      background(40);
      
  //Character functions//
      drawChar();
      characterMovement();
      
  //Obstacles functions//
      movingTruck(300,400,160,90,5);
      mouseHuman();

  //Borders & Exit//
      createBorders(20);
      createEscape();
    }
//----------------------FUNCTIONS--------------------------//

function mouseHuman()
{
  fill(225,150,120);
  circle(mouseHumX,mouseHumY,55);
}
function movingTruck(x,y,w,h,c)
{
  fill(truckColor);
  rect(rectX,rectY,rectW,rectH,c);
  
//Moving rect//
    rectX += rectSpeedx;

//Out of bounds Check + Randomness//
  if(rectX > width)
    {
      rectX = -150;
      rectY = random(100,350);
      rectH = random(50,100);
      rectW = random(100,160);
      rectSpeedx = random(3,5);
      truckColor = color(random(150),random(150),random(150));
      
    }
  if(rectX< -150)
    {
      rectX = width;
    }
  if(rectH == rectW || rect >= rectW)
    {
      rectH = rectW - random(5,10);
      rectW = rectW + random(1,10);
    }
}
function createBorders(thickness)
{
    fill(100);
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
}
function createEscape()
{
  fill(225,50,50)
    textSize(32);
    text("ESCAPE",textX,textY)
  //Check if Char escapes//
    if(CharY < textY-30 && CharX > 200 && CharX < 600)
      {
         fill(0,225,75);
          stroke(5);
          textSize(44);
          text("You Win!", 310, 300);
      }
}
function drawChar()
{
    fill(24,200,29);
    circle(CharX,CharY,CharD);
}
function characterMovement()
{
  if(keyIsDown(68))
    {
      CharX+=5;
    }
  if(keyIsDown(65))
    {
      CharX-=5;
    }
  if(keyIsDown(87))
    {
      CharY-=5;
    }
  if(keyIsDown(83))
    {
      CharY+=5;
    }
}
function mouseClicked()
{
    mouseHumX = mouseX;
    mouseHumY = mouseY;
}
