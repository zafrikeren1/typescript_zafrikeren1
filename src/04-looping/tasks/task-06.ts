/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outOfStockTotal = 0;
let lowStockTotal = 0;
let safeStockTotal = 0;
let totalInventory = 0;
let averageStockQuantity = 0;

for (const stock of stocks) {
    if (stock === 0) {
        outOfStockTotal++;
    } else if (stock < 10) {
        lowStockTotal++;
    } else {
        safeStockTotal++;
    }

    totalInventory += stock;

}
averageStockQuantity = totalInventory / stocks.length;