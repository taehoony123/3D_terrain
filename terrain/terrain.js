
var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;

var flying = 0;
let img;
let terrain = [];

function setup() {
createCanvas(600, 600, WEBGL);
cols = w / scl;
rows = h / scl;

for (let x = 0; x < cols; x++) {
terrain[x] = [];
for (let y = 0; y < rows; y++) {
terrain[x][y] = 0; //specify a default value for now
}
}
  
//image
  img = loadImage("https://cdn.hellodd.com/news/photo/201507/54349_craw2.jpg")
}

function draw() {

flying += 0.01;   //속도
var yoff = flying;
for (var y = 0; y < rows; y++) {
var xoff = 0;
for (var x = 0; x < cols; x++) {
terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100); //이게 없으면 평면이 된다.
xoff += 0.05;  //뽀죡
}
yoff += 0.2; //부드러워짐
}

  
noStroke()
  
background(10,10,10);  //배경색
translate(0, 50); //위치
rotateX(PI / 3);
fill(0, 0, 0, 0); //투명도
  
//지형이동
translate(-w / 2, -h / 4);
  
for (var y = 0; y < rows - 1; y++) {
beginShape(TRIANGLE_STRIP);
  
for (var x = 0; x < cols; x++) {
fill(0,0,terrain[x][y]+100)
vertex(x * scl, y * scl, terrain[x][y]);
vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
}
endShape();
}

//moon
push();
//directional light
const dirY = (mouseY / height - 4) * 1;
  const dirX = (mouseX / width - 3) * 3;
  directionalLight(204, 204, 204, dirX, dirY, 1);
  
//움직이는 도형
translate(w / 2, h / 2);
translate(mouseX - width / 2, (mouseY - height / 2) * 6);
rotate(PI / 5);
texture(img);
sphere(150);

pop();
}
