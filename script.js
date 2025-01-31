// Diseñar algoritmo para que computerChoice sea un numero aleatorio y en base al numero entre 0 y 2 elegir si es Rock, Paper o Scissors
let computerWinCount = 0;
let humanWinCount = 0;

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
function getHumanChoice() {
  let choice = prompt("Escriba Rock, Paper o Scissors");
  choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

  if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
    return choice;
  } else {
    return "Opcion Invalida";
  }
}

// Diseñar algoritmo para jugar una sola Ronda
function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    return console.log("Empate");
  } else if (computerChoice === "Rock" && humanChoice === "Paper") {
    ++humanWinCount;
    return console.log("Gana el humano");
  } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
    ++computerWinCount;
    return console.log("Gana la maquina");
  } else if (computerChoice === "Paper" && humanChoice === "Rock") {
    ++computerWinCount;
    return console.log("Gana la maquina");
  } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
    ++humanWinCount;
    return console.log("Gana el humano");
  } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
    ++humanWinCount;
    return console.log("Gana el humano");
  } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    ++computerWinCount;
    return console.log("Gana la maquina");
  } else {
    return console.log("Opcion Invalida");
  }
}
function playGame() {
  //Se juegan 5 rondas
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  console.log(computerChoice);
  console.log(humanChoice);
  playRound(computerChoice, humanChoice);
  console.log(`Maquina: ${computerWinCount} - Humano: ${humanWinCount}`);

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  console.log(computerChoice);
  console.log(humanChoice);
  playRound(computerChoice, humanChoice);
  console.log(`Maquina: ${computerWinCount} - Humano: ${humanWinCount}`);

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  console.log(computerChoice);
  console.log(humanChoice);
  playRound(computerChoice, humanChoice);
  console.log(`Maquina: ${computerWinCount} - Humano: ${humanWinCount}`);

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  console.log(computerChoice);
  console.log(humanChoice);
  playRound(computerChoice, humanChoice);
  console.log(`Maquina: ${computerWinCount} - Humano: ${humanWinCount}`);

  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  console.log(computerChoice);
  console.log(humanChoice);
  playRound(computerChoice, humanChoice);
  console.log(`Maquina: ${computerWinCount} - Humano: ${humanWinCount}`);

  // Se define el ganador dependiendo de cual tenga el puntaje mas alto
  if (computerWinCount > humanWinCount) {
    console.log("La maquina gana");
  } else if (humanWinCount > computerWinCount) {
    console.log("Eres el ganador");
  } else {
    console.log("Empate");
  }
}

playGame();
