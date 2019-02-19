//Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

//Long solution with a 'for' loop
var reverse = function(array) {
  let result = []
  for(let i = array.length - 1; i >= 0; i--) {
    result.push(array[i])
  }
  return result
}

//Short solution 
const reverse = array => array.reduceRight((result, value) => [...result, value], [])