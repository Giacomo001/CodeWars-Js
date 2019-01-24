/* Take an array and remove every second element out of that array. Always keep the first element and 
start removing with the next element.
Example:
myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!
*/

//Solution with '.filter' method. The '_' is used as a convention to ignore the parameter itself.
const removeEveryOther = arr => arr.filter((_, i) => i % 2 === 0)

//Solution with for loop
function removeEveryOther(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i += 2){
    newArr.push(arr[i])     
  }
  return newArr;
}
