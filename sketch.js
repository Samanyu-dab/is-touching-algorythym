var rectangle,square;

function setup() {
  createCanvas(800,400);
  rectangle=createSprite(200, 200, 80, 50);
rectangle.shapeColor="red";

square=createSprite(100, 200, 50, 30);
square.shapeColor="red";

}

function draw() {

  background(255,255,255);  

square.x=World.mouseX;
square.y=World.mouseY;

console.log(square.x-rectangle.x)
console.log(square.y-rectangle.y)

  if (square.x-rectangle.x<square.width/2+rectangle.width/2
    &&(rectangle.x-square.x<rectangle.width/2+square.width/2)
    &&(square.y-rectangle.y<square.height/2+rectangle.height/2)
    &&(rectangle.y-square.y<rectangle.height/2+square.height/2)) {
    
square.shapeColor="blue";
rectangle.shapeColor="blue";

  }

  else

  {

    square.shapeColor="red";
    rectangle.shapeColor="red";

  }



  drawSprites();
}