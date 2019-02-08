/* Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

//Long solution
const addNextFunc = (current, next) => (next ? `${current} ${next}` : `${current}.`)

function Adam(str) {return addNextFunc('Adam', str)}
function has(str) {return addNextFunc('has', str)}
function a(str) {return addNextFunc('a', str)}
function dog(str) {return addNextFunc('dog', str)}
function The(str) {return addNextFunc('The', str)}
function name(str) {return addNextFunc('name', str)}
function of(str) {return addNextFunc('of', str)}
function the(str) {return addNextFunc('the', str)}
function is(str) {return addNextFunc('is', str)}
function also(str) {return addNextFunc('also', str)}
