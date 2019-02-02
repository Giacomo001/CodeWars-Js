/* You are in charge of ordering food for a party. You are going to need 4 sandwiches, 6 salads, 5 wraps, 
and 10 orders of french fries. The cost per item of food is:

food	price
sandwich	$8.00
salad	$7.00
wrap	$6.50
french fries	$1.20

Create 4 variables to store the quantity of each type of food with the following names:
sandwiches
salads
wraps
frenchFries

Create a variable named totalPrice that finds the cost of all of the food.
*/

//Long solution
const sandwiches = 4
const salads = 6
const wraps = 5
const frenchFries = 10
const order = [
  {article: 'sandwiches', price: 8.00, amount: sandwiches},
  {article: 'salads', price: 7.00, amount: salads},
  {article: 'wraps', price: 6.50, amount: wraps},
  {article: 'french fries', price: 1.20, amount: frenchFries}
]
const totalPrice = order.reduce((total, {amount, price}) => total + (amount * price), 0)

//Short solution
let [sandwiches, salads, wraps, frenchFries] = [4, 6, 5, 10],
    totalPrice = (sandwiches * 8.00) + (salads * 7.00) + (wraps * 6.50) + (frenchFries * 1.20);
