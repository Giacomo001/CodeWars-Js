/* Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

//Solution with '.replace' method
function replace(s){
    return s.replace(/[aiueo]/gi, '!');  //'g' stands for 'global' and 'i' stands for 'case-insensitive'
}
