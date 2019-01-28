/* Create a class Ball.

Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

//Solution using class instead a normal function
class Ball{  
  constructor(ballType = 'regular'){
    this.ballType = ballType;
  }  
}

//Solution using function
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};
