/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just 
need to write a script.
Return the average of the given array rounded DOWN to its nearest integer.
The array will never be empty.
*/

//Long solution with a for loop
function getAverage(marks){
  let sum = 0; 
  for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
  }
  return Math.floor(sum / marks.length);
}

//Solution with '.reduce' and '~~'
function getAverage(marks){
    return ~~(marks.reduce((a, b) => (a + b)) / marks.length);   //The '~~' does a more compact approximation than '.floor'
}
