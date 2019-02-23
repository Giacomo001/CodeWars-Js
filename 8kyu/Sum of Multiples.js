 /* Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples


sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

//Long solution
function sumMul(n,m){
  let result = 0;
  for(let i = 0; i < m; i += n) {
    result += i;
  }
  return (m <= 0) ? 'INVALID' : result;
}
