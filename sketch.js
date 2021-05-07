const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var player1,player1I;
var player2,player2I;
var player3,player3I;
var backGround,backgroundImage;
var light1,light1I
var light2,light2I
var light3,light3I

var engine,world;
var player, Images;

 function preload(){
    player1I = loadImage("tron/tron1.png");
    player2I = loadImage("tron/tron2.png");
    player3I = loadImage("tron/tron3.png");
    backgroundImage = loadImage("tron/1.jpg");
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;

    player1 = new Player(50,50,"tron/tron1.png");
    player2 = new Player(650,150,"tron/tron2.png");
    player3 = new Player(500,250,"tron/tron3.png");



}

function draw(){
    background(backgroundImage)

    Engine.update(engine);

    // image(player1I,200,450,100,100);
    // image(player2I,250,50,100,100);
    // image(player3I,100,100,100,100);

    player1.display();
    player2.display();
    player3.display();

}

function mouseDragged(){

}