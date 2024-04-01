// Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase.

let Personname = "scientist newton";

console.log(`\nname in lowercase: ${Personname.toLowerCase()}\n`);

console.log(`name in UPPERCASE: ${Personname.toUpperCase()}\n`);


let step1 = Personname.split(' ');
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());

let step3 = step2.join(' ');
console.log(`name in TitleCase: ${step3}\n`);



