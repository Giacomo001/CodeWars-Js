/* Given a number n, return the number of positive odd numbers below n, EASY!
oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!
*/

//Solution with a for loop (don't use this, it's heavy and is just to show how it works with a loop)
function oddCount(n){
   var count = 0;    
   for (let i = 0; i < n; i++){
      if (i % 2 != 0){
         count++
      }
   }
   return count;
}

//Best solution
function oddCount(n){
   return Math.floor(n / 2);
}
