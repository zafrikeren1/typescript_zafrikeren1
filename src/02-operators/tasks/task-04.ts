/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice: number = 850000;
const keyboardQty: number = 1;

const mousePrice: number = 275000;
const mouseQty: number = 2;

const mousePadPrice: number = 120000;
const mousePadQty: number = 1;

const isPremiumMember: boolean = true;
const discountThreshold: number = 1000000;
const discountRate: number = 0.1;
const shippingFee: number = 20000;


const subtotal: number =
    keyboardPrice * keyboardQty +
    mousePrice * mouseQty +
    mousePadPrice * mousePadQty;


let totalItems: number = 0;
totalItems++; 
totalItems++; 
totalItems++; 

const isDiscountApplied: boolean = subtotal > discountThreshold;
const discountAmount: number = isDiscountApplied ? subtotal * discountRate : 0;

const shippingCost: number = isPremiumMember ? 0 : shippingFee;

const finalPayment: number = subtotal - discountAmount + shippingCost;

console.log("=== Order Summary ===");
console.log("Subtotal:", subtotal);
console.log("Total Items:", totalItems);
console.log("Discount Applied:", isDiscountApplied);
console.log("Discount Amount:", discountAmount);
console.log("Shipping Cost:", shippingCost);
console.log("Final Payment:", finalPayment);