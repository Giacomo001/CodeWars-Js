/* Remove n exclamation marks in the sentence from left to right. n is positive integer.
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi" */

//Solution with 'replace' method
function remove(s, n) {
    for(let i = 0; i < n; i++) {
        s = s.replace('!', '');
    }
    return s;
}

//Solution with ternary operator
function remove(s, n){
  return n > 0 ? remove(s.replace('!', ''), n - 1) : s;
}
