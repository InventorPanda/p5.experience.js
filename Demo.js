let a;
let b;
let c;

function setup() {
  createCanvas(400, 400);
  // console.log(p5.prototype.hasOwnProperty('UXApp'));
}

function createApp() {

  a = uxElement('rect', 50, 50, 50, 30);
  b = uxElement('ellipse', 300, 300, 100, 150);


  uxStroke(200,0,0);
  uxNoFill();
  uxFill(255);
  uxNoStroke();
  c = uxElement('triangle', 100, 100, 150, 100, 125, 150);

  a.inp('hover', triggered);


}

function draw() {
  background(200);
  a.place();
  // fill(0,100,0);
  // rect(60,75,200,200);

}

function triggered() {
  b.uxFill = [100, 200, 300];
}
