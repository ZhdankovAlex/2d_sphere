var R = 150;
var angle = 0;
var x, y;
var N = 256;
var time = 0;
var points = [];
function setup()
{
  createCanvas(windowWidth, windowHeight);
  angle =  Math.PI * 2 / N;
  for(var i = 0; i < N; i++)
  {
    x = R * cos(angle * i);
    y = R * sin(angle * i);
    points.push([x, y]);
  }
}

function draw()
{
  time += 0.003;
  fill(0, 60);
  rect(0, 0, width, height);
  translate(width/2, height/2)
  noStroke();
  fill(0, 250, 20, 50);
  for (var i = 0; i < N; i++)
  {
    x = R * cos(angle * i);
    y = R * sin(angle * i);
    ellipse(x * sin(time * i), y + tan(time), 5, 5);
  }
}
function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}
