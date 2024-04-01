// Name Cases: Store a person’s name in a variable,
//and then print that person’s name in lowercase, uppercase, and titlecase.
var Personname = "scientist newton";
console.log("\nname in lowercase: ".concat(Personname.toLowerCase(), "\n"));
console.log("name in UPPERCASE: ".concat(Personname.toUpperCase(), "\n"));
var step1 = Personname.split(' ');
var step2 = step1.map(function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
var step3 = step2.join(' ');
console.log("name in TitleCase: ".concat(step3, "\n"));
