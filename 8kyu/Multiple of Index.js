/* Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/


//Long solution using a 'for' loop
function multipleOfIndex(array) {
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i] % i === 0) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

//Short solution
const multipleOfIndex = array => array.filter((value, i) => value % i === 0);
