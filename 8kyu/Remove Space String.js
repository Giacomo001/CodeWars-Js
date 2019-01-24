// Simple, remove the spaces from the string, then return the resultant string.

//Solution with regular expressions
function noSpace(x){
    return (x.replace(/\s/g, ''));
}

//Another solution
function noSpace(x){
    return (x.split(' ').join(''));
}
