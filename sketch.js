const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    createCanvas(1000,600);
    engine=Engine.create()
    world=engine.world
    ground=new Ground(500,580,1000,20)
    s1=new Ground(400,300,250,10)
    s2= new Ground(700,200,250,10)
    t1=new Tower(320,275,30,40);
    t2=new Tower(350,275,30,40);
    t3=new Tower(380,275,30,40);
    t4=new Tower(410,275,30,40);
    t5=new Tower(440,275,30,40);
    t6=new Tower(470,275,30,40);
    t7=new Tower(350,235,30,40);
    t8=new Tower(380,235,30,40);
    t9=new Tower(410,235,30,40);
    t10=new Tower(440,235,30,40);
    t11=new Tower(380,195,30,40);
    t12=new Tower(410,195,30,40);
    t13=new Tower(395,155,30,40);
    ball = new Ball(50,200,40);
    s=new Slingshot(ball.body,{x:100,y:200})
    l1=new Tower(640,175,30,40)
    l2=new Tower(670,175,30,40)
    l3=new Tower(700,175,30,40)
    l4=new Tower(730,175,30,40)
    l5=new Tower(760,175,30,40)
    l6=new Tower(670,135,30,40)
    l7=new Tower(700,135,30,40)
    l8=new Tower(730,135,30,40)
    l9=new Tower(700,95,30,40)

}
function draw(){
    Engine.update(engine)
    background("purple");
    ground.display();
    s1.display()
    s2.display()
    t1.display()
    t2.display()
    t3.display()
    t4.display()
    t5.display()
    t6.display()
    t7.display()
    t8.display()
    t9.display()
    t10.display()
    t11.display()
    t12.display()
    t13.display()
    ball.display()
    s.display()
    l1.display()
    l2.display()
    l3.display()
    l4.display()
    l5.display()
    l6.display()
    l7.display()
    l8.display()
    l9.display()
    
}
function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    s.fly();
    
}
function keyPressed(){
    if(keyCode===32){
        s.attach(ball.body);
    }
}