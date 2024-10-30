// <--Variables--> //
//backgroundhair var//
var BGhairx = 80;
var BGhairy = 160;
var BGhairdirection = 0.2;

//bang//
var Tbangx= 247;
var Tbangy= 100;
var TXbangdir= 0.2;
var TYbangdir= 0.2;

var Lbangx= 160;
var Lbangy= 120;
var LXbangdir= 0.2;
var LYbangdir= 0.2;

var Rbangx= 300;
var Rbangy= 240;
var RXbangdir= 0.2;
var RYbangdir= 0.2;

//body var//
var topbodyx =150;
var topbodydirection = 0.3;
var leftbodyx= 0;
var leftbodydirection= 0.3;
var rightbodyx =300;
var rightbodydirection= 0.3;

//head var//
var headx = 150;
var heady = 250;
var headdirection = 0.3;

//left eye var//
var LeyeX= 200;
var LeyeY = 220;
var Leyedirection = 0.2;

//right eye var//
var ReyeX= 100;
var ReyeY = 220;
var Reyedirection = 0.2;

//misc. var//
var size = 24;
var count= 0;
var sizedirection = 0.2;

//Setup//
function setup() {
  createCanvas(320, 500);
}

function draw() {
  background(220);
  
  //background hair//
  triangle(40, 140, 150, 90, 50, 220);
  triangle(75, 90, 145, 90, 70,155);
  rect(BGhairx,BGhairy,207,360);
  BGhairx+=BGhairdirection;
   if(BGhairx >= 80.1 || BGhairx <= 71)
      {
          BGhairdirection *= -1;
      }
  //head and neck//
  triangle(leftbodyx,500,topbodyx,360,rightbodyx,500);
  topbodyx+=topbodydirection;
  if(topbodyx >= 160 || topbodyx <= 140)
      {
        topbodydirection *= -1;
      }
  leftbodyx+=leftbodydirection;
  if(leftbodyx >= 10 || leftbodyx <= -10)
      {
        leftbodydirection *= -1;
      }
  rightbodyx+=rightbodydirection;
  if(rightbodyx >= 310 || rightbodyx <= 290)
      {
        rightbodydirection *= -1;
      }
    
  square(110,350,80);
  ellipse(headx,heady,225,275);
  heady+=headdirection;
    if(heady >= 251 || heady <= 230)
      {
          headdirection *= -1;
      }
  
  //eyes and nose//
  //right//
  ellipse(100,180,40,20);
  circle(ReyeX,ReyeY,50);
  line(125,220,75,220);
  ReyeY+=Reyedirection;
    if(ReyeY >= 230 || ReyeY <= 220)
      {
          Reyedirection *= -1;
      }
  //left//
  ellipse(200,170,40,20);
  circle(LeyeX,LeyeY,50);
  line(225,220,175,220);
  LeyeY+=Leyedirection;
  if(LeyeY >= 230 || LeyeY <= 220)
      {
          Leyedirection *= -1;
      }
  //nose//
  triangle(130, 280, 170, 280, 150, 220);
  
  //mouth//
    line(180,350,150,320);
    line(180,350,200,330);
    line(120,350,150,320);
    line(120,350,100,330);
    line(170,340,130,340);
  
  //fronthair//
    triangle(115, 65, 200, 100, 115, 120);
    triangle(150, 50, 250, 140, 135, 115);
    triangle(210, 60, 295, 170, 150, 120);
  //bang//
    triangle(Lbangx, Lbangy, Tbangx, Tbangy, Rbangx, Rbangy);
  //-->>Leftpoint bang<<--//
    Lbangx+=LXbangdir;
    if(Lbangx >=170||Lbangx <=150)
      {
        LXbangdir *=-1;
      }
    Lbangy+=LYbangdir;
    if(Lbangy >=130||Lbangy <=110)
      {
        LYbangdir *=-1;
      }
  //-->>Topoint bang<<--//
    Tbangx+=TXbangdir;
    if (Tbangx >=257||Tbangx <=237)
      {
        TXbangdir *=-1;
      }
    Tbangy+=TYbangdir;
    if(Tbangy >=110||Tbangy <= 90)
      {
        TYbangdir *=-1;
      }
  //-->>Rightpoint Bang<<--//
    Rbangx+=RXbangdir;
    if(Rbangx >=310||Rbangx <=290)
      {
        RXbangdir *=-1;
      }
    Rbangy+=RYbangdir;
    if(Rbangy >=250||Rbangy <=230)
      {
        RYbangdir *=-1;
      }
  
  //text//
   textSize(size);
    size+= sizedirection;
    count++;
    if(count > 24)
    {
        sizedirection *=-1;
        count = 5;
    }
    text('Its ah Me, Kyla~',55,480)
    
}