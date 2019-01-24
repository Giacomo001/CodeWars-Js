/*Functional closures can get overly attached. Set them straight!
Why doesn't greet_abe() actually greet Abe? 
*/

//Solution using string template
let name;

const greet_abe = () => {
    name = 'Abe'
    return `Hello, ${name}!`
}

const greet_ben = () => {
    name = 'Ben'
    return `Hello, ${name}!`
}
