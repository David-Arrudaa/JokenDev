const result = document.querySelector(".result");
const humanScore = document.querySelector("#my-score");
const machineScore = document.querySelector("#alexa-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = ["coffee", "legacy-code", "developer"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Deu Empate 😑";
    } else if (
        (human === "developer" && machine === "coffee") ||
        (human === "coffee" && machine === "legacy-code") ||
        (human === "legacy-code" && machine === "developer")
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "Você marcou ponto! 🥳";
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Alexa marcou ponto! 🤖";
    }

    if (humanScoreNumber >= 10) {
        result.innerHTML = "🎉 VOCÊ GANHOU O JOGO! 🎉";
        resetGame();
    }

    if (machineScoreNumber >= 10) {
        result.innerHTML = "🤖 ALEXA GANHOU O JOGO! 🤖";
        resetGame();
    }
};

const resetGame = () => {
    setTimeout(() => {
        humanScoreNumber = 0;
        machineScoreNumber = 0;
        humanScore.innerHTML = humanScoreNumber;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = "Nova partida!";
    }, 2000);
};