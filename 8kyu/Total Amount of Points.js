/* Our football team finished the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the array.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such list and counts the points of our team in the championship. 

Rules for counting points for each match:
if x>y - 3 points
if x<y - 0 point
if x=y - 1 point

Notes:
there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

//Solution using '.reduce' method
function points(games) {
  return games.reduce((value, current) => {
    return value += ((current[0] > current[2]) ? 3 : (current[0] === current[2]) ? 1 : 0)  
  }, 0)
}

//Another solution with methods
function points(games) {
  return games.map(x => x[0] - x[2])
              .filter(x => x >= 0)
              .reduce((a, b) => a + (b > 0 ? 3 : 1), 0);
}
