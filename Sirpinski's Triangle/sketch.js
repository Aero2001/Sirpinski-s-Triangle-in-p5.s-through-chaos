let x = [-256,-0,256];
let y = [256,-256,256];
function setup() 
{
  createCanvas(512, 512);
  n = x.length
  d = 0
  t = 0
  a = 0
  b = 0
  j = 0
  p = 0
  background(0)


}

function draw() 
{
  //background(0);
  stroke(255)
  noFill()
  translate(width/2,height/2)
  frameRate(60)

  i = -1
  while(i < n-1)
    {
      i = i + 1
      circle(x[i],y[i],10)
    }

 

p = ceil(random(0,n))
      
      if (p == 1)
      {
        t = atan2(y[0] - b,x[0] - a)
        //line(x[0],y[0],a,b)
        d = sqrt(pow((a - x[0]),2) + pow((b - y[0]),2))
      }
      
      if (p == 2)
      {
        t = atan2(y[1] - b,x[1] - a)
        d = sqrt(pow((a - x[1]),2) + pow((b - y[1]),2))
        //line(x[1],y[1],a,b)
      }
      
      if (p == 3)
      {
        t = atan2(y[2] - b,x[2] - a)
        d = sqrt(pow((a - x[2]),2) + pow((b - y[2]),2))
        //line(x[2],y[2],a,b)
      }
  
      if (p == 4)
        {
          t = atan2(y[3] - b,x[3] - a)
          d = sqrt(pow((a - x[3]),2) + pow((b - y[3]),2))
        }
  
      if (p == 5)
        {
          t = atan2(y[4] - b,x[4] - a)
          d = sqrt(pow((a - x[4]),2) + pow((b - y[4]),2))
        }
      
  a = a + (d/2)*cos(t)
  b = b + (d/2)*sin(t)
 
  
  
  //text(str(p),100,100)
  //text(str(t*(180/PI)),100,100)
  //text(str(p),100,150)
  //text(str(d),100,200)
    circle(a,b,1)
  
}