let starAmount: number = 5;
for (let d=5; d >=1; d--){
  console.log ("*".repeat(d));
  starAmount += d;
}
console.log(`Star amount: ${starAmount}`);

/* */

let starAmount: number = 1;
for (let d=1; d <=2; d++){
  console.log ("*".repeat(d));
  starAmount += d;
}

for (let d=3; d >=1; d--){
  console.log ("*".repeat(d));
  starAmount += d;
}
console.log(`Star amount: ${starAmount}`);

/* */

let starAmount: number = 1;
for (let d=1; d <=1; d++){
  console.log ("*");
}

for (let d=2; d <=2; d++){
    console.log ("*");
}

for (let d=2; d <=2; d++){
    console.log (" "+ " " +" " + "*");
}

for (let d=1; d <=1; d++){
    console.log (" "+ " " + " " + " " + "*");
} starAmount += d;

console.log(`Star amount: ${starAmount}`);