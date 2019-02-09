/* Let's implement the reject()/Reject() function...
var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
=> [1, 3, 5]
*/

//Solution using '.filter'
function reject(array, iterator) {
  return array.filter(value => !iterator(value))
}

//Long solution using the 'if' statement
function reject(array, iterator) {
  var result = []
  for(i in array) {
    if(!iterator(array[i])) {
      result.push(array[i])
    }
  }  
  return result
}
