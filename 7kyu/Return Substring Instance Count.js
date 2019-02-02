/* Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
*/

//Solution using 'split' to count how many characters are in the string
function solution(fullText, searchText){
  return (fullText.split(searchText).length - 1)
}

//Solution using regex
function solution(fullText, searchText){
  return (fullText.match(new RegExp(searchText, 'g')) || []).length;
}
