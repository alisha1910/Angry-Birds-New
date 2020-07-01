class Pig extends BaseClass {
    constructor(x, y) {
      super(x,y,60,60);
      this.image=loadImage("sprites/pig.png");
    }
      display(){
        //console.log(this.body.speed);
        if(this.body.speed < 2){
         super.display();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y, 50, 50);
          pop();
        }
        
      
      
    }
  };

  