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

        const loginOutput1 = document.getElementById("login-output-1");
        
        const loginOutput2 = document.getElementById("login-output-2");

        if (inList == true) {
            loginOutput1.innerHTML = "Accesso riuscito";
            loginOutput2.innerHTML = "";

        } else {
            loginOutput2.innerHTML = `l'indirizzo email  "${userEmail}"  non risulta registrato`;
            loginOutput1.innerHTML = "";
        }

    }
)
