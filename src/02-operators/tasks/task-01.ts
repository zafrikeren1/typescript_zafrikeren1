/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedriceQuantity : number= 3;
const mineralwaterQuantity : number= 2;
const friedricePrice: number = 18000;
const mineralwaterPrice: number = 5000;
const discount: number = 10000

console.log("==Order Summary==")
console.log("Total food price : ", friedriceQuantity * friedricePrice);
console.log("Total drink price : ", mineralwaterQuantity * mineralwaterPrice);
console.log("Grand total : ",  friedriceQuantity * friedricePrice + mineralwaterQuantity * mineralwaterPrice);
console.log("Final payment :", friedriceQuantity * friedricePrice + mineralwaterQuantity * mineralwaterPrice - discount)