/* Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby

Don't worry about uppercase vowels.
*/

//Long solution
function shortcut(string){
    return string.replace(/[aiueo]/g, '');
}

//One line solution
const shortcut = string => string.replace(/[aiueo]/g, '');
