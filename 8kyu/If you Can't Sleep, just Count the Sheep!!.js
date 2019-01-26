/* Given a non-negative integer, 3 for example, return a string with a murmur: 
"1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/

//Solution with the for loop
var countSheep = function (num){
  let sheep = ``;
  
  for (let i = 1; i <= num; i++){
    sheep += `${i} sheep...`
  }
  return sheep;
}

//Solution with the '.keys' method which returns the enumerable properties of an array
countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``
