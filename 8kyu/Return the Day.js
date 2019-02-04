/* Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"

Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

//Solution using an object
 var days = {
   1: 'Sunday',
   2: 'Monday',
   3: 'Tuesday',
   4: 'Wednesday',
   5: 'Thursday',
   6: 'Friday',
   7: 'Saturday'   
 }
function whatday(num) { 
  return (days.hasOwnProperty(num))       //.hasOwnProperty() basically means "has 'days' the property 'num'?" 
            ? days[num] 
            : 'Wrong, please enter a number between 1 and 7'
}

//Long solution using the switch loop
function whatday(num) { 
  switch(num) {
    case 1:
      return 'Sunday'
    case 2:
      return 'Monday'
    case 3:
      return 'Tuesday'
    case 4:
      return 'Wednesday'
    case 5:
      return 'Thursday'
    case 6:
      return 'Friday'  
    case 7:
      return 'Saturday'
    default:
      return 'Wrong, please enter a number between 1 and 7'
  }
}
