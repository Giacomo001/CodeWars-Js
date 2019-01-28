/* This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []
*/

//Short solution
const websites = new Array(1000).fill('codewars');

//Solution using 'while' loop
var websites = [];
while(websites.length < 1000){
  websites.push('codewars')
} 

//Solution using 'for' loop
var websites = [];
for(let i = 0; i < 1000; i++){
  websites.push('codewars');
}
