// Our counter prototype is broken. Can you spot, what's wrong here?

//Solution using class instead of prototypes
class Counter {  
  constructor(){
    this.value = 0;
  }  
  increase() {
    this.value++;
  }  
  getValue() {
    return this.value;
  }  
  reset() {
    this.value = 0;
  }
}

//Solution using prototypes
function Counter() {
  this.value = 0;
}
Counter.prototype.increase = function() {
  this.value++;
};
Counter.prototype.getValue = function() {
  return this.value;
};
Counter.prototype.reset = function() {
  this.value = 0;
};
