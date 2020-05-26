const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var henchman1, midas1;
var backgroundImg,platform;
var shotter, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/agencu.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    henchman1 = new Henchman(700,320,70,70);
    henchman2 = new Henchman(920,320,70,70);
    midas1 = new Midas(810, 350);
    

    henchman3 = new Henchman(700,240,70,70);
    henchman4 = new Henchman(920,240,70,70);
    midas3 = new Midas(810, 220);

    
    henchman5 = new Henchman(810,160,70,70);

    shotter = new Shotter(100,100);
    slingshot = new SlingShot(shotter.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    henchman1.display();
    henchman2.display();
    ground.display();
midas1.display();
    

    henchman3.display();
    henchman4.display();
    midas3.display();


    henchman5.display();

    shotter.display();
    platform.display();

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(shotter.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}