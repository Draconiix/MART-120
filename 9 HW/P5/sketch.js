function setup() {
  createCanvas(300, 500);
}

function draw() {
  background(220);
  //background hair//
  triangle(40, 140, 150, 90, 50, 220);
  triangle(75, 90, 145, 90, 70,155);
  rect(80,160,207,360);
  //head and neck//
  triangle(0,500,150,360,300,500);
  square(110,350,80);
  ellipse(150,250,225,275);
  //eyes and nose//
  ellipse(100,180,40,20);
  circle(100,220,50);
  line(125,220,75,220);
  circle(200,220,50);
  ellipse(200,170,40,20);
  line(225,220,175,220);
  triangle(130, 280, 170, 280, 150, 220);
  //mouth//
    line(180,350,150,320);
    line(180,350,200,330);
    line(120,350,150,320);
    line(120,350,100,330);
    line(170,340,130,340);
    //hair//
    triangle(115, 65, 200, 100, 115, 120);
    triangle(150, 50, 250, 140, 135, 115);
    triangle(210, 60, 295, 170, 150, 120);
    triangle(250, 100, 300, 240, 160, 120);
  //text//
  textSize(24);
  text('Its ah Me, Kyla~',70,480)
    
}