/* You go to the store and have a 10 dollar bill to spend. You buy candy, chips, and soda. 
Find out how much change you get back from the cashier.

Item	Cost
Candy	$1.42
Chips	$2.40
Soda	$1.00
Create 5 variables and use the cost from the table above to set their values.

money
candy
chips
soda
change
*/

//Long solution
const candy = 1.42
const chips = 2.40
const soda = 1.00
const money = 10.00
const order = [
  {article: 'candy', amount: 1, price: candy},
  {article: 'chips', amount: 1, price: chips},
  {article: 'soda', amount: 1, price: soda}
]
const change = money - order.reduce((total, {amount, price}) => total + (amount * price), 0)

//Short solution without the quantity of the products
var candy = 1.42
var chips = 2.40
var soda = 1.00 
var money = 10.00
var change = money - (chips + candy + soda)
