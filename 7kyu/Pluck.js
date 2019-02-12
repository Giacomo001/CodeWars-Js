/* Implement pluck, which takes an array of objects and a property name, and returns an array containing 
the named property of each object.

For example:
pluck([{a:1}, {a:2}], 'a') // -> [1,2]

If an object is missing the property, you should just leave it as undefined in the output array.
*/

//Short solution
const pluck = (objs, name) => objs.map(obj => obj[name])
