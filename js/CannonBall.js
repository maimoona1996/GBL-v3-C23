class CannonBall {
  constructor(x, y) 
  {
//So to keep the cannonball stationary we are going to set 
  //isStatic as true in the options.
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  shoot() {
// p5 library has a predefined function p5.Vector.fromAngle().
  //this function by default accepts the angle in radians but
  //The angle we are providing is on degrees as our angle mode
  //is in degrees, in order to pass the angle value to this
  //function we need to convert angle to radians. That is done by multiplying
  //the angle value with (pi/180) which is (3.14/180)
    var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
//Matter.min.js library has a function that will help us to set some velocity
    // to the cannonball. The function is calledsetVelocity().
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }


  //a display() function which will help us to display the cannon.
  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
