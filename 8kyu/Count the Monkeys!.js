/* You take your son to the forest to see the monkeys. You know that there are a certain number there (n), 
but your son is too young to just appreciate the full number, he has to start counting them from 1.
As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers 
up to and including that number, but excluding zero.
For example, if n = 10:
return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

//Solution with for loop iteration
function monkeyCount(n) {
  let count = [];
  for(let i = 1; i <= n; i++){
      count.push(i);
  }
  return count;
}

//Another version of the solution above
function monkeyCount(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));  
  return arr;
}

//Solution with 'Array.from' method
function monkeyCount(n) {
  return Array.from({length:n}, (_,i)=>i+1)
}
