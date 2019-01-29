/* Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined

Use method prototypes to enable all Dogs to bark.
*/ 

//Solution using the Dog class
class Dog {
  constructor(breed) {
    this.breed = breed;
  }  
  bark() {
    return 'Woof';
  }
}

const snoopy = new Dog('Beagle');
const scoobydoo = new Dog('Great Dane');
snoopy.bark();
scoobydoo.bark();

//Solution using prototype
function Dog(breed) {
  this.breed = breed
}
Dog.prototype.bark = function() {
  return 'Woof'
}

const snoopy = new Dog('Beagle');
const scoobydoo = new Dog('Great Dane');

snoopy.bark();
scoobydoo.bark();
