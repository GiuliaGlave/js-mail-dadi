//variabile email utente
const userEmail = prompt("inserisci la tua email");

//variabile lista email 
const emailList = [
    "aaa@gmail.com",
    "bbb@gmail.com",
    "ccc@gmail.com",
    "ddd@gmail.com",
    "eee@gmail.com",
    "fff@gmail.com",
];

//switch
let inList = false;

for (let i = 0; i < emailList.length; i++) {

    const currentEmail = emailList[i];

    if (currentEmail == userEmail) {
        inList = true;
    }
}

if (inList == true) {
    console.log("puoi accedere");
} else {
    console.log("non puoi accedere");
}