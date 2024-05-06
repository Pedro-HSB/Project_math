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

function start() {
  displayNextQuestion();
}

function displayNextQuestion() {
  const questionContainer = document.getElementById('question');
  const answersContainer = document.getElementById('answers');

  // Exibe a próxima pergunta
  questionContainer.textContent = questions[currentQuestionIndex].question;

  // Limpa as respostas anteriores
  answersContainer.innerHTML = '';

  // Exibe as opções de resposta para a pergunta atual
  for (const answer of questions[currentQuestionIndex].answers) {
    const answerElement = document.createElement('div');
    answerElement.textContent = answer.opt;
    answerElement.classList.add('option');
    answerElement.addEventListener('click', () => {
      // Adicione aqui a lógica para verificar se a resposta está correta
      // Por exemplo, você pode comparar answer.correct com a resposta do usuário
      console.log('Resposta selecionada:', answer.opt);
    });
    answersContainer.appendChild(answerElement);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setTimeout(displayNextQuestion, 3000); // Mostra a próxima pergunta após 3 segundos
  } else {
    // Todas as perguntas foram exibidas
    console.log('Fim do questionário.');
  }
}


// function start() {
//     cron = setInterval(() => { time(); }, 3000);
//     pause();
// return;
// }

// function pause() {
//   clearInterval(cron);
// }

// function showQuestions(){
//   for (const question of questions) {
//     question.innerHTML = question.question
//     console.log(question.question)
//   }

// }

// function showAnswers() {
//   for (const question of questions) {
//     for (const answer of question.answers) {
//       $opt1.innerHTML = answer.opt
//       console.log(answer.opt)
//     }
//   }
//   pause();
// return;
// }

// function time() {

//   setInterval(() => { showQuestions(); }, 3000);

//   setInterval(() => { showAnswers(); }, 3000);

//   pause();
// return;
  // let certo = false
  
  // ans++;

  // // Verificar se todas as respostas da pergunta foram exibidas
  // if (ans >= question.answers.length) {
  //   // Reiniciar o índice da resposta para a próxima pergunta
  //   ans = 0;
  //   // Atualizar para a próxima pergunta
  //   qts++;
  // }

  // // Verificar se todas as perguntas foram exibidas
  // if (qts >= questions.length) {
  //   // Todas as perguntas foram exibidas
  //   $question.innerHTML = "Quiz finalizado";
  //   pause(); // Chamada de função para pausar o tempo, se necessário
  //   return;
  // }
//}

function perguntas(){
  const questions = [
    {
      "question": "Qual dos seguintes não é um operador lógico?",
      "answers": [
        { "opt": "&&", "correct": false },
        { "opt": "||", "correct": false },
        { "opt": "!", "correct": false },
        { "opt": "?", "correct": true },
        { "opt": "&", "correct": false }
      ]
    },
    {
      "question": "Qual é o resultado de !(3 > 2 && 4 < 7)?",
      "answers": [
        { "opt": "true", "correct": false },
        { "opt": "false", "correct": true },
        { "opt": "3", "correct": false },
        { "opt": "2", "correct": false },
        { "opt": "0", "correct": false }
      ]
    },
    {
      "question": "Qual é a negação de 'Eu gosto de sorvete'?",
      "answers": [
        { "opt": "Eu não gosto de sorvete", "correct": true },
        { "opt": "Eu como sorvete", "correct": false },
        { "opt": "Eu adoro sorvete", "correct": false },
        { "opt": "Eu detesto sorvete", "correct": false },
        { "opt": "Eu quero sorvete", "correct": false }
      ]
    },
    {
      "question": "Qual é o símbolo lógico para 'OU'?",
      "answers": [
        { "opt": "&&", "correct": false },
        { "opt": "!", "correct": false },
        { "opt": "||", "correct": true },
        { "opt": "&", "correct": false },
        { "opt": "^", "correct": false }
      ]
    },
    {
      "question": "O que o operador '===' faz em JavaScript?",
      "answers": [
        { "opt": "Verifica a igualdade de valor e tipo", "correct": true },
        { "opt": "Verifica apenas a igualdade de valor", "correct": false },
        { "opt": "Verifica apenas a igualdade de tipo", "correct": false },
        { "opt": "Não faz nada", "correct": false },
        { "opt": "Inverte o valor", "correct": false }
      ]
    },
    {
      "question": "O que a função 'parseInt()' faz em JavaScript?",
      "answers": [
        { "opt": "Converte uma string em um número inteiro", "correct": true },
        { "opt": "Arredonda um número para o inteiro mais próximo", "correct": false },
        { "opt": "Converte um número em uma string", "correct": false },
        { "opt": "Retorna o valor absoluto de um número", "correct": false },
        { "opt": "Nenhuma das alternativas", "correct": false }
      ]
    },
    {
      "question": "Qual é o operador de comparação que não verifica o tipo?",
      "answers": [
        { "opt": "==", "correct": true },
        { "opt": "===", "correct": false },
        { "opt": "!=", "correct": false },
        { "opt": "!==", "correct": false },
        { "opt": ">=", "correct": false }
      ]
    },
    {
      "question": "Qual é o resultado da expressão 5 * 0?",
      "answers": [
        { "opt": "0", "correct": true },
        { "opt": "5", "correct": false },
        { "opt": "1", "correct": false },
        { "opt": "10", "correct": false },
        { "opt": "25", "correct": false }
      ]
    },
    {
      "question": "Qual é a função do operador 'typeof' em JavaScript?",
      "answers": [
        { "opt": "Retorna o tipo de uma variável", "correct": true },
        { "opt": "Converte o tipo de uma variável", "correct": false },
        { "opt": "Compara dois tipos de variáveis", "correct": false },
        { "opt": "Define o tipo de uma variável", "correct": false },
        { "opt": "Nenhuma das alternativas", "correct": false }
      ]
    },
    {
      "question": "Qual é o resultado de 10 % 3?",
      "answers": [
        { "opt": "3", "correct": false },
        { "opt": "0.3", "correct": false },
        { "opt": "1", "correct": true },
        { "opt": "10", "correct": false },
        { "opt": "2", "correct": false }
      ]
    }
  ];  
}