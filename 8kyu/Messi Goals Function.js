/* Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions.
Complete the goals function to return his total goals (the sum) for all three leagues.

Note: the parameter for this function will always be a valid number.

Ex :
goals(5,10,2) == 5+10+2 = 17
*/

//Solution with ternary operator
function goals (Liga, Copa, Champions) {

   return (isNaN(Liga) || isNaN(Copa) || isNaN(Champions)) ? 'NaN' : (Liga + Copa + Champions);
}

//Another solution like the one above
const goals = (l, r, c) => (isNaN(l) || isNaN(r) || isNaN(c)) ? 'NaN' : (l + r + c);

//Another solution with ES6
const goals = (...g) => g.reduce((a, b) => a + b, 0);
