//pulsante

const startGame = document.getElementById("play")
const result = document.getElementById("result")
const PlayerDice = document.getElementById("player-dice")
const PcDice = document.getElementById("pc-dice")

//evento

startGame.addEventListener(
        "click",
        function () {
            //variabili numero giocatore e numero pc

            const playerNumber = Math.floor((Math.random() * 6) + 1);            
            const pcNumber = Math.floor((Math.random() * 6) + 1);

            PlayerDice.innerHTML = playerNumber;
            PcDice.innerHTML = pcNumber;

            let resultGame;

            //condizioni

            //vinci
            if (playerNumber > pcNumber) {
                
                resultGame = `hai vinto!`;
                //pareggi
            } else if (playerNumber == pcNumber) {
                resultGame = `hai pareggiato.`;
                //perdi
            } else {
                resultGame = `hai perso...`;
            }

            result.innerHTML = resultGame;
        }
    
)