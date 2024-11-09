//Character Variables//
var CharX = 350;
var CharY = 550;
var CharD = 40;

//Obstacle Variables//
var rectX= 350;
var rectY= 400;
var rectSpeedx;

//Mouse Shape Var//
var mouseSqX;
var mouseSqY;

//Text var//
var textX= 330;
var textY= 30;

//Canvas//
function setup()
    {
        createCanvas(800,600);
    }

function draw()
    {
      background(40);
      
//Character Stuff//
      drawChar();
      characterMovement();
      
//Moving Obstacle//
      fill(150);
      rect(rectX,rectY,160,90);
      //Random Speed//
      rectSpeedx = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      //Moving rect//
      rectX += rectSpeedx;
      //Out of bounds Check//
      if(rectX>width)
        {
          rectX = 0;
        }
      if(rectX<0)
        {
          rectX = width;
        }
//Mouse Obstacle//
  fill(225,150,120);
  circle(mouseSqX,mouseSqY,55);
  
//Borders//
 fill(100);
 createBorders(20);

//Exit text//
  fill(225,50,50)
  textSize(32);
  text("ESCAPE",textX,textY)
      
//Check for if Char Escapes//
  if(CharY < textY-30 && CharX > 200 && CharX < 600)
    {
        fill(0,225,75);
        stroke(5);
        textSize(44);
        text("You Win!", 310, 300);
    }
}
function createBorders(thickness)
{
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
function createChar(x,y)
{
    CharX = x;
    CharY = y;
    console.log(CharX);
}
function drawChar()
{
    fill(24,200,29);
    circle(CharX,CharY,CharD);
}
//KeyPressDown WSAD Event//
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
    mouseSqX = mouseX;
    mouseSqY = mouseY;
}
