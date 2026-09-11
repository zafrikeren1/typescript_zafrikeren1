/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName: string = "Nadia Putri";
const isPremiumMember: boolean = true;
const isRoomAvailable: boolean = false;

console.log("Customer Name:", customerName);

if (isRoomAvailable) {
  if (isPremiumMember) {
    console.log("Selamat! Anda mendapatkan upgrade kamar gratis!");
  } else {
    console.log("Kamar yang anda reservasi telah tersedia.");
  }
    } else {
        if (isPremiumMember) {
            console.log("Anda adalah member premium. Anda telah dimasukkan ke dalam daftar tunggu prioritas.");
        } else {
            console.log("Saat ini tidak ada kamar yang tersedia.");
        }
    }
