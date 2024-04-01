"use strict";
let Guest_list = ["Arman", "Sabir", "Qasim"];
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]}: You are invited for Dinner`);
}
console.log(`\n Unfortunatly ${Guest_list[1]}:\n Could not Come to Dinner \t`);
Guest_list[1] = "Umair";
console.log("\n NEW LIST OF INVITATION");
for (let j = 0; j < Guest_list.length; j++) {
    console.log(`Dear ${Guest_list[j]}: You are invited for Dinner`);
}
