// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//Solution using '.includes' method
function include(arr, item){
  return arr.includes(item);
}

//Solution using '.indexOf'
function include(arr, item) {
  return arr.indexOf(item) !== -1;
}
