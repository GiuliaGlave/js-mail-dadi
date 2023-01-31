//variabile pulsante
const loginBtn = document.getElementById("login-btn");

//variabile lista email 
const emailList = [
    "aaa@gmail.com",
    "bbb@gmail.com",
    "ccc@gmail.com",
    "ddd@gmail.com",
    "eee@gmail.com",
    "fff@gmail.com",
];

//evento
loginBtn.addEventListener(
    "click",
    function(){
        //variabile email utente
        const userEmail = document.getElementById("user-email").value;


        //switch
        let inList = false;

        for (let i = 0; i < emailList.length; i++) {

            const currentEmail = emailList[i];

            if (currentEmail == userEmail) {
                inList = true;
            }
        }

        const loginOutput = document.getElementById("login-output");

        if (inList == true) {
            loginOutput.innerHTML = "Accesso riuscito";

        } else {
            loginOutput.innerHTML = "La tua email non risulta registrata";
        }

    }
)
