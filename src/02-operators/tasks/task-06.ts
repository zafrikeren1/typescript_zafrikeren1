/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hoursUsed: number = 7;
const minutesUsed: number = 35;
const ratePerHour: number = 8000;
const discountThresholdHours: number = 5;
const discountRate: number = 0.15;

const totalMinutes: number = hoursUsed * 60 + minutesUsed;

const fullHours: number = Math.floor(totalMinutes / 60);
const remainingMinutes: number = totalMinutes % 60;

const billedHours: number = remainingMinutes > 0 ? fullHours + 1 : fullHours;

const totalBeforeDiscount: number = billedHours * ratePerHour;

const isDiscountApplied: boolean = fullHours > discountThresholdHours;
const discountAmount: number = isDiscountApplied ? totalBeforeDiscount * discountRate : 0;

const finalPayment: number = totalBeforeDiscount - discountAmount;

console.log("=== Internet Café Billing ===");
console.log("Total Playing Time (minutes):", totalMinutes);
console.log("Remaining Minutes after Full Hours:", remainingMinutes);
console.log("Total Billed Hours:", billedHours);
console.log("Total Payment before Discount:", totalBeforeDiscount);
console.log("Discount Applied:", isDiscountApplied);
console.log("Discount Amount:", discountAmount);
console.log("Final Payment:", finalPayment);