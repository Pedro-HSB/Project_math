let $question = document.getElementById("question")
const $answersContainer = document.querySelector(".answers-container")
let $answerTest = document.getElementById("answerTest") 
let $opt1 = document.getElementById("opt1") 
let $opt2 = document.getElementById("opt2") 
let $opt3 = document.getElementById("opt3") 
let $opt4 = document.getElementById("opt4") 
let $opt5 = document.getElementById("opt5") 

let currentQuestionIndex = 0
let totalCorrect = 0

let second = 0;
let millisecond = 0;
let cron;
let qts = 0;
let ans = 0;
// Variáveis para armazenar as questões e opções
let questionTexts = [];
let answerOptions = [];
start()

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML =
    `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}

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
  {
    "question": "Qual é a negação de 'Eu gosto de sorvete'?",
    "answers": [
      { "text": "Eu não gosto de sorvete", "correct": true },
      { "text": "Eu como sorvete", "correct": false },
      { "text": "Eu adoro sorvete", "correct": false },
      { "text": "Eu detesto sorvete", "correct": false },
      { "text": "Eu quero sorvete", "correct": false }
    ]
  },
  {
    "question": "Qual é o símbolo lógico para 'OU'?",
    "answers": [
      { "text": "&&", "correct": false },
      { "text": "!", "correct": false },
      { "text": "||", "correct": true },
      { "text": "&", "correct": false },
      { "text": "^", "correct": false }
    ]
  },
  {
    "question": "O que o operador '===' faz em JavaScript?",
    "answers": [
      { "text": "Verifica a igualdade de valor e tipo", "correct": true },
      { "text": "Verifica apenas a igualdade de valor", "correct": false },
      { "text": "Verifica apenas a igualdade de tipo", "correct": false },
      { "text": "Não faz nada", "correct": false },
      { "text": "Inverte o valor", "correct": false }
    ]
  },
  {
    "question": "O que a função 'parseInt()' faz em JavaScript?",
    "answers": [
      { "text": "Converte uma string em um número inteiro", "correct": true },
      { "text": "Arredonda um número para o inteiro mais próximo", "correct": false },
      { "text": "Converte um número em uma string", "correct": false },
      { "text": "Retorna o valor absoluto de um número", "correct": false },
      { "text": "Nenhuma das alternativas", "correct": false }
    ]
  },
  {
    "question": "Qual é o operador de comparação que não verifica o tipo?",
    "answers": [
      { "text": "==", "correct": true },
      { "text": "===", "correct": false },
      { "text": "!=", "correct": false },
      { "text": "!==", "correct": false },
      { "text": ">=", "correct": false }
    ]
  },
  {
    "question": "Qual é o resultado da expressão 5 * 0?",
    "answers": [
      { "text": "0", "correct": true },
      { "text": "5", "correct": false },
      { "text": "1", "correct": false },
      { "text": "10", "correct": false },
      { "text": "25", "correct": false }
    ]
  },
  {
    "question": "Qual é a função do operador 'typeof' em JavaScript?",
    "answers": [
      { "text": "Retorna o tipo de uma variável", "correct": true },
      { "text": "Converte o tipo de uma variável", "correct": false },
      { "text": "Compara dois tipos de variáveis", "correct": false },
      { "text": "Define o tipo de uma variável", "correct": false },
      { "text": "Nenhuma das alternativas", "correct": false }
    ]
  },
  {
    "question": "Qual é o resultado de 10 % 3?",
    "answers": [
      { "text": "3", "correct": false },
      { "text": "0.3", "correct": false },
      { "text": "1", "correct": true },
      { "text": "10", "correct": false },
      { "text": "2", "correct": false }
    ]
  }
];

function start() {
    cron = setInterval(() => { time(); }, 3000);
}

function pause() {
  clearInterval(cron);
}


function time() {
  let certo = false
  let question = questions[qts];

  // Exibir a pergunta atual
  $question.innerHTML = question.question;

  // Exibir as opções de resposta
  question.answers.forEach((answer, index) => {
    const optDiv = document.getElementById(`opt${index + 1}`);
    optDiv.innerHTML = answer.text;
  });

  // Atualizar para a próxima pergunta
  qts++;

  // Verificar se todas as perguntas foram exibidas
  if (qts >= questions.length) {
    // Todas as perguntas foram exibidas
    $question.innerHTML = "Quiz finalizado";
    pause(); // Chamada de função para pausar o tempo, se necessário
    return;
  }
}


// function time() {
//   let certo = false
//   let question = questions[qts];

//   // Exibir a resposta atual
//   let answer = question.answers[ans];
//   certo = answer.correct

//   opt1.innerHTML = `${answer.text[qts]}`;//esta pegando so uma letra e nao a frase toda
//   opt2.innerHTML = `${answer.text[qts+1]}`;//esta pegando so uma letra e nao a frase toda
//   opt3.innerHTML = `${answer.text[qts+2]}`;//esta pegando so uma letra e nao a frase toda
//   opt4.innerHTML = `${answer.text[qts]}`;//esta pegando so uma letra e nao a frase toda
//   opt5.innerHTML = `${answer.text[qts]}`;//esta pegando so uma letra e nao a frase toda

// console.log(answer.text[0])
// console.log(answer.text[1])
// console.log(answer.text[2])
// console.log(answer.text[3])
// console.log(answer.text[4])
//   // Atualizar para a próxima respost
//   ans++;

//   // Verificar se todas as respostas da pergunta foram exibidas
//   if (ans >= question.answers.length) {
//     // Reiniciar o índice da resposta para a próxima pergunta
//     ans = 0;
//     // Atualizar para a próxima pergunta
//     qts++;
//   }

//   // Verificar se todas as perguntas foram exibidas
//   if (qts >= questions.length) {
//     // Todas as perguntas foram exibidas
//     $question.innerHTML = "Quiz finalizado";
//     pause(); // Chamada de função para pausar o tempo, se necessário
//     return;
//   }
// }