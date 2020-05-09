
//Shape one
var yoff = 0;
var yoff1 = 50;
var yoff2 = 100;
var yoff3 = 200;
var yoff4 = 300;
var yoff5 = 400;
var yoff6 = 500;
var yoff7 = 600;
var yoff8 = 700;
var yoff9 = 750;
var yoff10 = 800;
var yoff11 = 850;

//Shape two
var y2off = 1000;
var y2off1 = 1050;
var y2off2 = 1100;
var y2off3 = 1200;
var y2off4 = 1300;
var y2off5 = 1400;
var y2off6 = 1500;
var y2off7 = 1600;
var y2off8 = 1700;
var y2off9 = 1750;
var y2off10 = 1800;
var y2off11 = 1850;

//Shape three
var y3off = 2000;
var y3off1 = 2050;
var y3off2 = 2100;
var y3off3 = 2200;
var y3off4 = 2300;
var y3off5 = 2400;
var y3off6 = 2500;
var y3off7 = 2600;
var y3off8 = 2700;
var y3off9 = 2750;
var y3off10 = 2800;
var y3off11 = 2850;

var renderer;

function setup() {
  renderer = createCanvas(windowWidth, windowHeight);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
function draw() {
    background(255, 255, 255);

    var y = map(noise(yoff), 0 , 1, 0, height);
    var y1 = map(noise(yoff1), 0 , 1, 0, height);
    var y2 = map(noise(yoff2), 0 , 1, 0, height);
    var y3 = map(noise(yoff3), 0 , 1, 0, height);
    var y4 = map(noise(yoff4), 0 , 1, 0, height);
    var y5 = map(noise(yoff5), 0 , 1, 0, height);
    var y6 = map(noise(yoff6), 0 , 1, 0, height);
    var y7 = map(noise(yoff7), 0 , 1, 0, height);
    var y8 = map(noise(yoff8), 0 , 1, 0, height);
    var y9 = map(noise(yoff9), 0 , 1, 0, height);
    var y10 = map(noise(yoff10), 0 , 1, 0, height);
    var y11 = map(noise(yoff11), 0 , 1, 0, height);

    yoff += 0.001;
    yoff1 += 0.001;
    yoff2 += 0.001;
    yoff3 += 0.001;
    yoff4 += 0.001;
    yoff5 += 0.001;
    yoff6 += 0.001;
    yoff7 += 0.001;
    yoff8 += 0.001;
    yoff9 += 0.001;
    yoff10 += 0.001;
    yoff11 += 0.001;

    var ya = map(noise(y2off), 0 , 1, 0, height);
    var ya1 = map(noise(y2off1), 0 , 1, 0, height);
    var ya2 = map(noise(y2off2), 0 , 1, 0, height);
    var ya3 = map(noise(y2off3), 0 , 1, 0, height);
    var ya4 = map(noise(y2off4), 0 , 1, 0, height);
    var ya5 = map(noise(y2off5), 0 , 1, 0, height);
    var ya6 = map(noise(y2off6), 0 , 1, 0, height);
    var ya7 = map(noise(y2off7), 0 , 1, 0, height);
    var ya8 = map(noise(y2off8), 0 , 1, 0, height);
    var ya9 = map(noise(y2off9), 0 , 1, 0, height);
    var ya10 = map(noise(y2off10), 0 , 1, 0, height);
    var ya11 = map(noise(y2off11), 0 , 1, 0, height);

    y2off += 0.001;
    y2off1 += 0.001;
    y2off2 += 0.001;
    y2off3 += 0.001;
    y2off4 += 0.001;
    y2off5 += 0.001;
    y2off6 += 0.001;
    y2off7 += 0.001;
    y2off8 += 0.001;
    y2off9 += 0.001;
    y2off10 += 0.001;
    y2off11 += 0.001;

    var ya10 = map(noise(y3off), 0 , 1, 0, height);
    var ya11 = map(noise(y3off1), 0 , 1, 0, height);
    var ya12 = map(noise(y3off2), 0 , 1, 0, height);
    var ya13 = map(noise(y3off3), 0 , 1, 0, height);
    var ya14 = map(noise(y3off4), 0 , 1, 0, height);
    var ya15 = map(noise(y3off5), 0 , 1, 0, height);
    var ya16 = map(noise(y3off6), 0 , 1, 0, height);
    var ya17 = map(noise(y3off7), 0 , 1, 0, height);
    var ya18 = map(noise(y3off8), 0 , 1, 0, height);
    var ya19 = map(noise(y3off9), 0 , 1, 0, height);
    var ya20 = map(noise(y3off10), 0 , 1, 0, height);
    var ya21 = map(noise(y3off11), 0 , 1, 0, height);

    y3off += 0.001;
    y3off1 += 0.001;
    y3off2 += 0.001;
    y3off3 += 0.001;
    y3off4 += 0.001;
    y3off5 += 0.001;
    y3off6 += 0.001;
    y3off7 += 0.001;
    y3off8 += 0.001;
    y3off9 += 0.001;
    y3off10 += 0.001;
    y3off11 += 0.001;

     // Top mountains
     fill(color(253, 12, 152, 80));
     noStroke();
     beginShape();
     vertex(-400, height);
     vertex(width * 0.1, ya / 5);
     vertex(width * 0.3, ya1 / 5);
     vertex(width * 0.35, ya2 / 2);
     vertex(width * 0.45, ya3 / 2);
     vertex(width * 0.50, ya4 / 2);
     vertex(width * 0.55, ya5 / 2);
     vertex(width * 0.62, ya6 / 2);
     vertex(width * 0.65, ya7 / 3);
     vertex(width * 0.70, ya8 / 3);
     vertex(width * 0.78, ya9 / 4);
     vertex(width * 0.85, ya10 / 5);
     vertex(width * 0.9, ya11 / 5);
     vertex(width + 500, height);
     endShape();

    //Middle Mountains
    fill(color(122, 25, 250, 80));
    noStroke();
    beginShape();
    vertex(-300, height);
    vertex(width * 0.1, y);
    vertex(width * 0.3, y1);
    vertex(width * 0.35, y2);
    vertex(width * 0.45, y3);
    vertex(width * 0.50, y4);
    vertex(width * 0.55, y5);
    vertex(width * 0.62, y6);
    vertex(width * 0.65, y7);
    vertex(width * 0.70, y8);
    vertex(width * 0.78, y9);
    vertex(width * 0.85, y10);
    vertex(width * 0.9, y11);
    vertex(width+200, height);
    endShape();

    //Bottom Mountains
    fill(color(2, 25, 250, 120));
    noStroke();
    beginShape();
    vertex(-280, height);
    vertex(width * 0.1, ya10 + 200);
    vertex(width * 0.3, ya11 + 200);
    vertex(width * 0.35, ya12 + 300);
    vertex(width * 0.45, ya13 + 200);
    vertex(width * 0.50, ya14 + 300);
    vertex(width * 0.55, ya15 + 300);
    vertex(width * 0.62, ya16 + 300);
    vertex(width * 0.65, ya17 + 200);
    vertex(width * 0.70, ya18 + 200);
    vertex(width * 0.78, ya19 + 200);
    vertex(width * 0.85, ya20 + 200);
    vertex(width * 0.9, ya21);
    vertex(width + 500, height);
    endShape();
  
    // noLoop();
  }