// Q.15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.




let Guest_list = ["Arman", "Sabir", "Qasim"];

for (let i=0; i < Guest_list.length; i++) {
    console.log (`Dear ${Guest_list[i]}: You are invited for Dinner`)
}

console.log(`\n Unfortunatly ${Guest_list[1]}:\n Could not Come to Dinner \t`);

Guest_list [1] = "Umair"

console.log("\n NEW LIST OF INVITATION");

for (let j =0; j < Guest_list.length; j++) {
    console.log (`Dear ${Guest_list[j]}: You are invited for Dinner`)
}