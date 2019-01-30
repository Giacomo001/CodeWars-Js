/* Time to test your basic knowledge in functions! Return the odds from a list:

odds([1,2,3,4,5]) #=> [1,3,5]
*/

//Long solution
function odds(values){
  return values.filter(x => (x % 2));
}

//Short solution
const odds = values => values.filter(x => (x % 2));
