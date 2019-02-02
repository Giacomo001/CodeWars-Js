/* Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples:

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')
*/

//Solution using '.replace' method
function removeUrlAnchor(url){
  return url.replace(/#.*/, '') 
}

//Solution using '.split' method
function removeUrlAnchor(url){
  return url.split('#')[0];
}
