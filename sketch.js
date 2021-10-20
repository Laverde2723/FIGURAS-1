// Juan Carlos Laverde - A00371894
// Lida Marcela Loaiza - A00372159
// Samuel Ortiz - A00372452

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
class Circulo{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.tam  = 50;

  }
  Colorear(){
    noStroke();
    fill(191,4,38);
    circle(this.x, this.y, this.tam);
  }
}

class Triangulo{
  constructor(x, y,){
    this.x = x;
    this.y = y;
  }
  Colorear(){
    fill(217,74,167);
    triangle(this.x-25, this.y+25, this.x+25, this.y+25, this.x, this.y-25);
  }
}

class Rombo{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  Colorear(){
    fill(3,166,166);
    quad(this.x-25, this.y, this.x, this.y+25, this.x+25, this.y, this.x, this.y-25);
  }
}

class Cuadrado{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  Colorear(){
    fill(242,171,39);
    rectMode(CENTER);
    rect(this.x, this.y, 50, 50);
    rectMode(CORNER);
  }
}

class Zona{
  constructor(x, y, trazo = [0,0,0]){
    this.x = x;
    this.y = y;
    this.trazo = trazo;

  }
  Colorear(){
    stroke(this.trazo);
    strokeWeight(4);
    fill(255);
    rect(this.x,this.y,150,120);
  }
}

let circulo;
let triangulo;
let rombo;
let cuadrado;

let Space1;
let Space2;
let Space3;
let Space4;

let Green = [0,255,0];
let Red = [255,0,0];

function setup() {
  createCanvas(400, 400);
  circulo = new Circulo(80,350,50);
  triangulo = new Triangulo(150,350);
  rombo = new Rombo(220,350);
  cuadrado = new Cuadrado(300,350);

  Space1 = new Zona(50,50,0);
  Space2 = new Zona(200,50,0);
  Space3 = new Zona(50,170,0);
  Space4 = new Zona(200,170,0);
}

function draw() {
  background(220);

  Space1.Colorear();
  Space2.Colorear();
  Space3.Colorear();
  Space4.Colorear();

  //Circulo
  fill(255);
  stroke(191,4,38)
  circle(125, 110, 60);

  //Triángulo
  stroke(217,74,167);
  triangle(270-25, 110+25, 270+25, 110+25, 270, 110-25);

  //rombo
  stroke(3,166,166);
  quad(125-30, 230, 125, 230+30, 125+30, 230, 125, 230-30);

  //cuadrado
  stroke(242,171,39);
  rect(250,210, 50,50);

  circulo.Colorear();
  triangulo.Colorear();
  rombo.Colorear();
  cuadrado.Colorear();

  if(circulo.x > Space1.x && circulo.x < Space1.x + 150
    && circulo.y > Space1.y && circulo.y < Space1.y + 120){
      Space1.trazo = Green;
    }else if(triangulo.x > Space1.x && triangulo.x < Space1.x + 150
      && triangulo.y > Space1.y && triangulo.y < Space1.y + 120
      ||rombo.x > Space1.x && rombo.x < Space1.x + 150
      && rombo.y > Space1.y && rombo.y < Space1.y + 120
      ||cuadrado.x > Space1.x && cuadrado.x < Space1.x + 150
      && cuadrado.y > Space1.y && cuadrado.y < Space1.y + 120){
        Space1.trazo = Red;
    } else{
        Space1.trazo = [0,0,0];
    }

    if(triangulo.x > Space2.x && triangulo.x < Space2.x + 150
      && triangulo.y > Space2.y && triangulo.y < Space2.y + 120){
        Space2.trazo = Green;
      }else if(circulo.x > Space2.x && circulo.x < Space2.x + 150
        && circulo.y > Space2.y && circulo.y < Space2.y + 120
        ||rombo.x > Space2.x && rombo.x < Space2.x + 150
        && rombo.y > Space2.y && rombo.y < Space2.y + 120
        ||cuadrado.x > Space2.x && cuadrado.x < Space2.x + 150
        && cuadrado.y > Space2.y && cuadrado.y < Space2.y + 120){
          Space2.trazo = Red;
      } else{
          Space2.trazo = [0,0,0];
      }

    if(rombo.x > Space3.x && rombo.x < Space3.x + 150
      && rombo.y > Space3.y && rombo.y < Space3.y + 120){
        Space3.trazo = Green;
      }else if(circulo.x > Space3.x && circulo.x < Space3.x + 150
        && circulo.y > Space3.y && circulo.y < Space3.y + 120
        ||triangulo.x > Space3.x && triangulo.x < Space3.x + 150
        && triangulo.y > Space3.y && triangulo.y < Space3.y + 120
        ||cuadrado.x > Space3.x && cuadrado.x < Space3.x + 150
        && cuadrado.y > Space3.y && cuadrado.y < Space3.y + 120){
          Space3.trazo = Red;
      } else{
          Space3.trazo = [0,0,0];
      }
    
  if(cuadrado.x > Space4.x && cuadrado.x < Space4.x + 150
    && cuadrado.y > Space4.y && cuadrado.y < Space4.y + 120){
        Space4.trazo = Green;
      }else if(circulo.x > Space4.x && circulo.x < Space4.x + 150
        && circulo.y > Space4.y && circulo.y < Space4.y + 120
        ||rombo.x > Space4.x && rombo.x < Space4.x + 150
        && rombo.y > Space4.y && rombo.y < Space4.y + 120
        ||triangulo.x > Space4.x && triangulo.x < Space4.x + 150
        && triangulo.y > Space4.y && triangulo.y < Space4.y + 120){
          Space4.trazo = Red;
      } else{
          Space4.trazo = [0,0,0];
      }
}
  

function mouseDragged(){
  if(dist(mouseX, mouseY, circulo.x, circulo.y)<25){
    circulo.x = mouseX;
    circulo.y = mouseY;
  }

  if(dist(mouseX, mouseY, triangulo.x, triangulo.y)<25){
    triangulo.x = mouseX;
    triangulo.y = mouseY;
  }

  if(dist(mouseX, mouseY, rombo.x, rombo.y)<25){
    rombo.x = mouseX;
    rombo.y = mouseY;
  }

  if(dist(mouseX, mouseY, cuadrado.x, cuadrado.y)<25){
    cuadrado.x = mouseX;
    cuadrado.y = mouseY;
  }
}