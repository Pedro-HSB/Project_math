
let questionDiv = document.getElementById("question");
let questionsResult = document.getElementById("result");
let countdownDiv = document.getElementById("countdown");
let timerDiv = document.getElementById("timer");


let currentQuestionIndex = 0;
let totalCorrect = 0;
let answered = false;
let cron;
let timer;



const questions = [
  {
    "question": "Qual dos seguintes não é um operador lógico?",
    "answers": [
      { "text": "&&", "correct": false },
      { "text": "||", "correct": false },
      { "text": "!", "correct": false },
      { "text": "?", "correct": true },
      { "text": "&", "correct": false }
    ]
  },
  {
    "question": "Qual é o resultado de !(3 > 2 && 4 < 7)?",
    "answers": [
      { "text": "true", "correct": false },
      { "text": "false", "correct": true },
      { "text": "3", "correct": false },
      { "text": "2", "correct": false },
      { "text": "0", "correct": false }
    ]
  },
  // {
  //   "question": "Qual é a negação de 'Eu gosto de sorvete'?",
  //   "answers": [
  //     { "text": "Eu não gosto de sorvete", "correct": true },
  //     { "text": "Eu como sorvete", "correct": false },
  //     { "text": "Eu adoro sorvete", "correct": false },
  //     { "text": "Eu detesto sorvete", "correct": false },
  //     { "text": "Eu quero sorvete", "correct": false }
  //   ]
  // },
  // {
  //   "question": "Qual é o símbolo lógico para 'OU'?",
  //   "answers": [
  //     { "text": "&&", "correct": false },
  //     { "text": "!", "correct": false },
  //     { "text": "||", "correct": true },
  //     { "text": "&", "correct": false },
  //     { "text": "^", "correct": false }
  //   ]
  // },
  // {
  //   "question": "O que o operador '===' faz em JavaScript?",
  //   "answers": [
  //     { "text": "Verifica a igualdade de valor e tipo", "correct": true },
  //     { "text": "Verifica apenas a igualdade de valor", "correct": false },
  //     { "text": "Verifica apenas a igualdade de tipo", "correct": false },
  //     { "text": "Não faz nada", "correct": false },
  //     { "text": "Inverte o valor", "correct": false }
  //   ]
  // },
  // {
  //   "question": "O que a função 'parseInt()' faz em JavaScript?",
  //   "answers": [
  //     { "text": "Converte uma string em um número inteiro", "correct": true },
  //     { "text": "Arredonda um número para o inteiro mais próximo", "correct": false },
  //     { "text": "Converte um número em uma string", "correct": false },
  //     { "text": "Retorna o valor absoluto de um número", "correct": false },
  //     { "text": "Nenhuma das alternativas", "correct": false }
  //   ]
  // },
  // {
  //   "question": "Qual é o operador de comparação que não verifica o tipo?",
  //   "answers": [
  //     { "text": "==", "correct": true },
  //     { "text": "===", "correct": false },
  //     { "text": "!=", "correct": false },
  //     { "text": "!==", "correct": false },
  //     { "text": ">=", "correct": false }
  //   ]
  // },
  // {
  //   "question": "Qual é o resultado da expressão 5 * 0?",
  //   "answers": [
  //     { "text": "0", "correct": true },
  //     { "text": "5", "correct": false },
  //     { "text": "1", "correct": false },
  //     { "text": "10", "correct": false },
  //     { "text": "25", "correct": false }
  //   ]
  // },
  // {
  //   "question": "Qual é a função do operador 'typeof' em JavaScript?",
  //   "answers": [
  //     { "text": "Retorna o tipo de uma variável", "correct": true },
  //     { "text": "Converte o tipo de uma variável", "correct": false },
  //     { "text": "Compara dois tipos de variáveis", "correct": false },
  //     { "text": "Define o tipo de uma variável", "correct": false },
  //     { "text": "Nenhuma das alternativas", "correct": false }
  //   ]
  // },
  // {
  //   "question": "Qual é o resultado de 10 % 3?",
  //   "answers": [
  //     { "text": "3", "correct": false },
  //     { "text": "0.3", "correct": false },
  //     { "text": "1", "correct": true },
  //     { "text": "10", "correct": false },
  //     { "text": "2", "correct": false }
  //   ]
  // }
];


// function start() {
//     cron = setTimeout(() => {
//         clearInterval(cron); // Interrompe o temporizador após 120 segundos
//         finishGame(); // Chama a função para finalizar o jogo
//     }, 120000); // 120 segundos = 120000 milissegundos

//     // Chama a função time imediatamente ao iniciar o jogo
//     time();
// }

function startCountdown() {
  let countdown = 3;
  countdownDiv.innerHTML = countdown;
  let countdownInterval = setInterval(() => {
    countdown--;
    countdownDiv.innerHTML = countdown;
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      countdownDiv.innerHTML = "";
      startGame();
    }
  }, 1000);
}


startCountdown();


function finishGame() {
  let questionsResult = document.getElementById("result");
  let questionsRestart = document.getElementById("restart");
  let home = document.getElementById("home");
  let questionPhrase = questions[currentQuestionIndex - 1];
  const totalQuestions = questions.length;
  const performance = Math.floor(totalCorrect * 100 / totalQuestions);
  questionDiv.innerHTML = "Quiz finalizado";
  questionPhrase.answers.forEach((answer, index) => {
    const optDiv = document.getElementById(`opt${index + 1}`);
    const option = document.getElementById(`option${index + 1}`);
    option.style.backgroundColor = "";
    optDiv.innerHTML = "";
    optDiv.style.backgroundColor = "";
  });
  let message = "";


  switch (true) {
    case (performance >= 90):
      message = "Excelente 🎉🥳🎉";
      break;
    case (performance >= 70):
      message = "Muito bom 😆🎉";
      break;
    case (performance >= 50):
      message = "Bom 😁";
      break;
    default:
      message = "Pode melhorar 😫";
  }


  questionsResult.innerHTML =
    `
    <div class="text-center bg-blue-200 rounded-lg p-3">
          
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
    <span>${message}</span>
    </p>
    </div>
  `;


  questionsRestart.innerHTML =
    `
    <div class="text-center restart bg-blue-200 rounded-lg p-3"> 
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      <p>Refazer Quiz</p>
    </button>
    </div>
  `;

  home.innerHTML = `
  <button onclick="home()"
  class="col-span-1 animate-bounce shadow-lg w-full shadow-blue-200 h-12 rounded-lg my-4 p-2 hover:bg-blue-200">
  Pagina Inicial
</button>
  `
}


function startGame() {
  displayQuestion();
}


function pause() {
  clearInterval(cron);
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


const shuffledQuestions = shuffleArray(questions);


function displayQuestion() {
  if (currentQuestionIndex >= shuffledQuestions.length) {
    finishGame();
    pause();
    return;
  }


  let timeLeft = 8;
  timerDiv.style.backgroundColor = "rgb(191 219 254)";
  timerDiv.innerHTML = timeLeft;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerDiv.innerHTML = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      currentQuestionIndex++;
      displayQuestion();
    }
  }, 1000);

  let questionPhrase = shuffledQuestions[currentQuestionIndex];
  questionDiv.innerHTML = questionPhrase.question;
  questionPhrase.answers = shuffleArray(questionPhrase.answers);
  questionPhrase.answers.forEach((answer, index) => {
    const optDiv = document.getElementById(`opt${index + 1}`);
    const option = document.getElementById(`option${index + 1}`);
    optDiv.innerHTML = answer.text;
    option.style.backgroundColor = "";
    optDiv.onclick = () => option(index + 1);
  });


  answered = false;
}

function option(opt) {

  if (answered) {
    return;
  }

  let questionPhrase = shuffledQuestions[currentQuestionIndex];


  let correctAnswer = questionPhrase.answers.find(answer => answer.correct);


  let correctIndex = questionPhrase.answers.findIndex(answer => answer.correct);

  const optDiv = document.getElementById(`option${opt}`);

  if (optDiv) {

    let selectedText = optDiv.textContent.split('-')[1].trim().toLowerCase();

    let selectedLetter = selectedText.charAt(0);

    if (selectedLetter === correctAnswer.text.charAt(0).toLowerCase()) {
      totalCorrect++;
      optDiv.style.backgroundColor = "#32CD32";
    } else {
      optDiv.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    }
    let correctOptDiv = document.getElementById(`option${correctIndex + 1}`);
    correctOptDiv.style.backgroundColor = "#32CD32";
    answered = true;
  } else {
    console.error(`Elemento com ID 'option${opt}' não encontrado.`);
  }
}
	