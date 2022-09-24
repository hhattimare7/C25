class Fan {

 constructor(x,y){
    var options ={
        isStatic: true
      };

    this.w = 50;
    this.h = 20;

    this.body = Bodies.rectangle(x, y, this.w, this.h,options);
    World.add(world, this.body);
 }


 display(){

    rectMode(CENTER);
push();
    rect(this.body.position.x, this.body.position.y, this.w, this.h);
pop();
 }




}