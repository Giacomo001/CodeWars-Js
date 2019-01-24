/* Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
If the input array is empty or null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */

//Normal solution with the for loop iteration
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }  
    
    var array = [0, 0];    
    for (var i = 0; i < input.length; i++) {
        (input[i] <= 0) ? array[1] += input[i] : array[0] += 1;  //The 'array[1]' acts on the second value of the array.
    }
    return array;
}

//This solution is a little bit trickier, it does the job but a beginner might find it less understandable
function countPositivesSumNegatives(input) {
  return input && input.length ? input.reduce(function(p, c, i, s){
    c <= 0 ? p[1] += c : p[0] += 1;
    return p;
  }, [0, 0]) : [];
}
