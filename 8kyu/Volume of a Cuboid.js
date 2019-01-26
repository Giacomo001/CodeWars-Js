/* Bob needs a fast way to calculate the volume of a cuboid with three values: 
length, width and the height of the cuboid. Write a function to help Bob with this calculation.
*/

//Solution following the exercise
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return (length * width * height);
  };

  return Kata;

})();

//Solution with static method within a class
class Kata {
  static getVolumeOfCuboid(lenght, width, height) {
    return length * width * height;
  }
};
