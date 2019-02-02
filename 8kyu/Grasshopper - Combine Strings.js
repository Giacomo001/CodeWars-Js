/* Create a function named combineNames(combine_names in python, ruby) that accepts two parameters (first and last name). 
The function should return the full name.

Example:
combineNames('James', 'Stevens')

returns:
'James Stevens'
*/

//Short solution with stirng template
const combineNames = (firstName, lastName) => `${firstName} ${lastName}`

//Solution using spread operator
const combineNames = (...names) => names.join(' ');
