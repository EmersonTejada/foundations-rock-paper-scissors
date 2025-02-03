// Diseñar algoritmo para que computerChoice sea un numero aleatorio y en base al numero entre 0 y 2 elegir si es Rock, Paper o Scissors
let computerWinCount = 0;
let humanWinCount = 0;
let computerChoice;
let humanChoice;
const btns = document.querySelectorAll("button");
const updateHumanCounter = document.querySelector(".you");
const updateComputerCounter = document.querySelector(".computer")
const msg = document.querySelector(".message");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Diseñar algoritmo para la eleccion humana
function getHumanChoice(event) {
  let choice = event.target.textContent;
  choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

  if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
    return choice;
  } else {
    return "Opcion Invalida";
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", (event) => {
    humanChoice = getHumanChoice(event);
    computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
  });
});

// btns.addEventListener("click", playRound(getComputerChoice(), getHumanChoice()))

// Diseñar algoritmo para jugar una sola Ronda
function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    msg.textContent = "Empate, vuelve a intentarlo!";
  } else if (computerChoice === "Rock" && humanChoice === "Paper") {
    ++humanWinCount;
    updateHumanCounter.textContent = `${humanWinCount}`;
    msg.textContent = `Ganaste! Tu elegiste ${humanChoice} y la computadora eligio ${computerChoice}` ;
  } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
    ++computerWinCount;
    updateComputerCounter.textContent = `${computerWinCount}`;
    msg.textContent = `Gano la computadora! Escogio ${computerChoice} y tu escogiste ${humanChoice}`;
  } else if (computerChoice === "Paper" && humanChoice === "Rock") {
    ++computerWinCount;
    updateComputerCounter.textContent = `${computerWinCount}`;
    msg.textContent = `Gano la computadora! Escogio ${computerChoice} y tu escogiste ${humanChoice}`;
  } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
    ++humanWinCount;
    updateHumanCounter.textContent = `${humanWinCount}`;
    msg.textContent = `Ganaste! Tu elegiste ${humanChoice} y la computadora eligio ${computerChoice}`;
  } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
    ++humanWinCount;
    updateHumanCounter.textContent = `${humanWinCount}`;
    msg.textContent = `Ganaste! Tu elegiste ${humanChoice} y la computadora eligio ${computerChoice}`;
  } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    ++computerWinCount;
    updateComputerCounter.textContent = `${computerWinCount}`;
    msg.textContent = `Gano la computadora! Escogio ${computerChoice} y tu escogiste ${humanChoice}`;
  } else {
    return console.log("Opcion Invalida");
  }

}
  // Se define el ganador dependiendo de cual tenga el puntaje mas alto
  if (computerWinCount > humanWinCount) {
    console.log("La maquina gana");
  } else if (humanWinCount > computerWinCount) {
    console.log("Eres el ganador");
  } else {
    console.log("Empate");
  }


// playGame();
