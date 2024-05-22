// Selecionando elementos HTML
let questionDiv = document.getElementById("question"); // Div para exibir as perguntas
let questionsResult = document.getElementById("result"); // Div para exibir o resultado
let countdownDiv = document.getElementById("countdown"); // Div para exibir a contagem regressiva
let timerDiv = document.getElementById("timer"); // Div para exibir o timer de cada pergunta

// Variáveis de controle do jogo
let currentQuestionIndex = 0;
let totalCorrect = 0;
let answered = false; // Variável para controlar se a opção já foi respondida
let cron; // Variável para o cronômetro de perguntas
let timer; // Variável para o timer de cada pergunta


// Array de perguntas e respostas
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

// Função para iniciar a contagem regressiva
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

// function start() {
//     cron = setTimeout(() => {
//         clearInterval(cron); // Interrompe o temporizador após 120 segundos
//         finishGame(); // Chama a função para finalizar o jogo
//     }, 120000); // 120 segundos = 120000 milissegundos

//     // Chama a função time imediatamente ao iniciar o jogo
//     time();
// }
// Função para iniciar o jogo
// Função para iniciar a contagem regressiva
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

// Iniciando o jogo com a contagem regressiva
startCountdown();

// Função para finalizar o jogo
function finishGame() {
  let questionsResult = document.getElementById("result"); // Div para exibir o resultado
  let questionsRestart = document.getElementById("restart"); // Div para exibir o resultado
  let questionPhrase = questions[currentQuestionIndex - 1];
  const totalQuestions = questions.length;
  const performance = Math.floor(totalCorrect * 100 / totalQuestions);
  questionDiv.innerHTML = "Quiz finalizado";
  questionPhrase.answers.forEach((answer, index) => {
    const optDiv = document.getElementById(`opt${index + 1}`);
    optDiv.innerHTML = "";
  });
  let message = "";

  // Determinando a mensagem com base no desempenho do jogador
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

  // Exibindo o resultado do jogo
  questionsResult.innerHTML =
    `
    <div class="text-center bg-blue-200 rounded-lg p-3">
          
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
    <span>${message}</span>
    </p>
    </div>
  `;

  // Exibindo o bt de restart do jogo
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
}

// Função para iniciar o jogo
function startGame() {
  displayQuestion();
}

// Função para pausar o jogo
function pause() {
  clearInterval(cron);
}

// Função para embaralhar um array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Embaralhando as perguntas antes de iniciar o jogo
questions = shuffleArray(questions);

// Função para exibir as perguntas e opções de resposta
function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    finishGame();
    pause();
    return;
  }

  // Exibe o timer para a pergunta atual
  let timeLeft = 8;
  timerDiv.innerHTML = timeLeft;
  clearInterval(timer); // Limpa o timer anterior
  timer = setInterval(() => {
    timeLeft--;
    timerDiv.innerHTML = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      currentQuestionIndex++; // Avança para a próxima pergunta
      displayQuestion(); // Exibe a próxima pergunta
    }
  }, 1000);

  let questionPhrase = questions[currentQuestionIndex];
  questionDiv.innerHTML = questionPhrase.question;
  questionPhrase.answers = shuffleArray(questionPhrase.answers);
  questionPhrase.answers.forEach((answer, index) => {
    const optDiv = document.getElementById(`opt${index + 1}`);
    const option = document.getElementById(`option${index + 1}`);
    optDiv.innerHTML = answer.text;
    option.style.backgroundColor = ""; // Resetando a cor de fundo
    optDiv.onclick = () => option(index + 1); // Associando a função option ao clique
  });

  // Redefine a variável answered para false ao exibir uma nova pergunta
  answered = false;
}

// Função para selecionar a opção de resposta
function option(opt) {
  // Verifica se a opção já foi respondida
  if (answered) {
    return; // Sai da função se a opção já foi respondida
  }

  let questionPhrase = questions[currentQuestionIndex];
  let optCrt = [];

  questionPhrase.answers.forEach((answer, index) => {
    optCrt[index] = answer.correct;
  });

  const correctIndex = optCrt.findIndex(correct => correct); // Encontra o índice da resposta correta
  const optDiv = document.getElementById(`option${opt}`); // Incrementando opt para corrigir o índice
  if (opt === correctIndex + 1) { // Verifica se a opção selecionada é a correta
    totalCorrect++;
    optDiv.style.backgroundColor = "#32CD32"; // Verde para resposta correta
  } else {
    optDiv.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; // Vermelho para resposta incorreta
  }

  answered = true; // Marca a opção como respondida
}