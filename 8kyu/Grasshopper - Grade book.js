/* Complete the function so that it finds the mean of the three scores passed to it and returns the 
letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

//Solution using spread syntax
function getGrade (...grades) {
  let score = 
    grades.reduce((total, value) => total + value, 0) / grades.length;
  
  if(score >= 90 && score <= 100) return 'A';
  if(score >= 80 && score < 90) return 'B';
  if(score >= 70 && score < 80) return 'C';
  if(score >= 60 && score < 70) return 'D';
  if(score >= 0 && score < 60) return 'F';
}

//Short solution
function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return (s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F")
}
