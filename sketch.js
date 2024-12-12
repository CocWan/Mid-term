let x,y,rad,xDir,yDir,angle;
let posX = [30,50,150,200];
let posY = [150,30,200,300];
let circleSize = [20,40,20,40];
function setup() {
  createCanvas(400, 400);
  background(99,111,177);
  for (i=0;i<4;i++)
  {
    
    circle(posX[i],posY[i],circleSize[i]);
    
  }
  angleMode(DEGREES)
  
  angle = random(0,360);
  
  x = random(0,width);
  y = random(0,height);
  
  
  xDir = random(-2,2);
  yDir = random(-2,2);
  
  
  
}

function draw() {
 
 
  text('Bob',100,100);
  rad = map(sin(angle),-1,1,20,60);
  
  circleDraw(224,195,36,30);
  update(2);
  keepInCanvas();
  
  angle += 3;

  
}

function circleDraw(balla,ballg,ballb,radius)
{
  fill(balla,ballg,ballb);
  noStroke();
  circle(x,y,radius);
  
}


function update(speed)
{
    x += xDir*speed;
    y += yDir*speed;
  
}

function keepInCanvas()
{
    if((x > width)||(x < 0))
    {
      ///change left
      xDir = -xDir;
    }
  
  if((y > height)||(y < 0))
    {
      ///change left
      yDir = -yDir;
    }
  
}
//Bob Haoyu Wang