/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPricePerNight: number = 650000;
const nightsStayed: number = 4;
const serviceCharge: number = 120000;
const taxRate: number = 0.11;
const isVipMember: boolean = true;
const vipDiscountRate: number = 0.12;
const minimumNightsForBreakfast: number = 3;

const roomSubtotal: number = roomPricePerNight * nightsStayed;

const discount: number = isVipMember ? roomSubtotal * vipDiscountRate : 0;
const roomAfterDiscount: number = roomSubtotal - discount;

const taxableAmount: number = roomAfterDiscount + serviceCharge;
const tax: number = taxableAmount * taxRate;

const finalPayment: number = taxableAmount + tax;

const isFreeBreakfastEligible: boolean =
    nightsStayed >= minimumNightsForBreakfast || isVipMember;

console.log("=== Hotel Payment Summary ===");
console.log("Room Subtotal:", roomSubtotal);
console.log("Discount:", discount);
console.log("Room After Discount:", roomAfterDiscount);
console.log("Tax:", tax);
console.log("Final Payment:", finalPayment);
console.log("Free Breakfast Eligible:", isFreeBreakfastEligible);