
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

let currentQuestionIndex = 0 // ainda nao estou usando
let totalCorrect = 0 // ainda nao estou usando

let qts = 0; // essa variavel verifica a quantidade de questoes e coloca um limite
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

function start() {
  cron = setInterval(() => { time(); }, 8000);
}
// function start() {
//     cron = setTimeout(() => {
//         clearInterval(cron); // Interrompe o temporizador após 120 segundos
//         finishGame(); // Chama a função para finalizar o jogo
//     }, 120000); // 120 segundos = 120000 milissegundos

//     // Chama a função time imediatamente ao iniciar o jogo
//     time();
// }


function pause() {
clearInterval(cron);
}

function time() {
let certo = false
let question = questions[qts];

let $question = document.getElementById("question") // pego a div para atribuir as questoes

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
  final();
  pause(); // Chamada de função para pausar o tempo, se necessário
  return;
}
}
function final(){
  $question.innerHTML = "Quiz finalizado";
  question.answers.forEach((answer, index) => {
      const optDiv = document.getElementById(`opt${index + 1}`);
      optDiv.innerHTML = "";
    });
}

function option(opt){
  // estou aqui
  let question = questions[qts];
  let optCrt = []

      question.answers.forEach((answer, index) => {
          optCrt[index] = answer.correct
        });
        for (let i = 0; i < optCrt.length; i++) {
          if (optCrt[i] == true) {
            if (opt == i ) {
              console.log("deu bom")
              totalCorrect++;
              console.log(totalCorrect)
            }
            else {
              for (let j = 0; j <optCrt.length; j++) {
                  optCrt[j] = false;
              }
            }
          }
  }
}