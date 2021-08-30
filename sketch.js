var x = 0;
var y = 0;

var spaceData;

function setup() {
  frameRate(1);
  createCanvas(200, 200);
  loadJSON('http://api.open-notify.org/iss-now.json', gotData, 'jsonp');
  p1 = createP("loading");
  p2 = createP("loading");
}

function gotData(data) {
  spaceData = data;
}

function draw() {
  background(0);

  if (spaceData) {
    loadJSON('http://api.open-notify.org/iss-now.json', gotData, 'jsonp');
  
    x = map(spaceData.iss_position.latitude, -180, 180, 0, 200);
    y = map(spaceData.iss_position.longitude, -90, 90, 0, 200);
    noStroke();
    fill(100, 0, 200);
    ellipse(x, y, 10);

    p1.html("längengrad: " + spaceData.iss_position.longitude + " x: " + x);
    p2.html("breitengrad: " + spaceData.iss_position.latitude + " y: " + y);

    //drawISS();
  }
}

function drawISS(){
  noStroke();
  fill(100, 0, 200);
  ellipse(x, y, 10);
}