/* Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, 
searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition 
softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

//Solution with array and methods
const correct = (string) =>
    string
        .split('')
        .map(char => {
                const newChar = {'0' : 'O', '5' : 'S', '1' : 'I'}  //This is an object which, in python, is called dictionary
                return newChar[char] || char; 
                })
        .join('');
        
//Another solution
const corrections = {
  '5': 'S',
  '0': 'O',
  '1': 'I',
};
const correct = string => (
  string.replace(/[501]/g, character => corrections[character])
);
