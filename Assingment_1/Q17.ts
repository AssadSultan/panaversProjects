var friendNames:string[] = ["Kamal","Jamal","Furqan","Ali","Mubashir"]

friendNames.forEach(element => {
    console.log(`As Salam Alikum Dear ${element},\nHope you are well. I would like to invite you on dinner to night. its my pleasure if you accept my invitation\nThanks. \n\n`)    
});
console.log(`Mr ${friendNames.splice(1,1,"Khan")} is not join us. \n`)

friendNames.forEach(element => {
    console.log(`As Salam Alikum Dear ${element},\nHope you are well. I would like to invite you on dinner to night. its my pleasure if you accept my invitation\nThanks. \n\n`)    
});

console.log(`I got a big table. Now we can expand our gathering list.\n\n`) 

friendNames.unshift("Usman");
friendNames.splice(3,0,"Umar");
friendNames.push("Khalid");

friendNames.forEach(element => {
    console.log(`As Salam Alikum Dear ${element},\nHope you are well. I would like to invite you on dinner to night. its my pleasure if you accept my invitation\nThanks. \n\n`)    
});

console.log("Now I can invite only two people for dinner.\n\n");

friendNames.splice(0,friendNames.length - 2).forEach(item=> console.log(`Sorry ${item}, I won't be able to invite you to dinner as I had initially planned`));
friendNames.forEach(element => {
    console.log(`As Salam Alikum Dear ${element},\n You are still invited\nThanks. \n\n`)    
});
friendNames.splice(0,friendNames.length)
friendNames.forEach(item => console.log(item))

