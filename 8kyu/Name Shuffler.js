/* Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

//Solution using methods
const nameShuffler = str => str.split(' ').reverse().join(' ');
