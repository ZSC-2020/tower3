const Engine =Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
function preload(){
    img=loadImage("polygon.png");
}
function setup(){
canvas=createCanvas(1200,450);
engine=Engine.create();
world=engine.world;
ground1=new Ground(600,430,1200,15);
stand = new Ground(400,300,400,10)
stand2= new Ground(900,250,300,10)
ball=Bodies.circle(50,200,20)
World.add(world,this.ball);
sling=new SlingShot(this.ball,{x:150,y:180})
b1=new Box(330,235,30,40,"pink");
b2=new Box(360,235,30,40,"blue");
b3=new Box(390,235,30,40,"yellow");
b4=new Box(420,235,30,40,"white");
b5=new Box(360,195,30,40,"green");
b6=new Box(390,195,30,40,"red");
b7=new Box(420,195,30,40,"purple");

b11=new Box(830,235,30,40,"pink");
b12=new Box(860,235,30,40,"blue");
b13=new Box(890,235,30,40,"yellow");
b14=new Box(920,235,30,40,"white");
b15=new Box(860,195,30,40,"green");
b16=new Box(890,195,30,40,"red");
b17=new Box(920,195,30,40,"purple");
b18=new Box(950,195,30,40,"purple");
}

function draw(){
    background("black");
    Engine.update(engine);
ground1.display();
stand.display();
stand2.display();
imageMode(CENTER)
image(img,ball.position.x,ball.position.y,40,40)
sling.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
}

function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}

function mouseReleased(){
sling.fly()

}

function keyPressed(){
    if(keyCode===32){
        sling.attach(this.ball);
        Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
    }
}