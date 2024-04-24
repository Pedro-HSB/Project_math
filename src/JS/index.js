let $question = document.getElementById("question")
const $answersContainer = document.querySelector(".answers-container")
let $opt1 = document.getElementById("answerTest1") // aparece variable not defined
let $opt2 = document.getElementById("answer2") // aparece variable not defined
let $opt3 = document.getElementById("answer3") // aparece variable not defined
let $opt4 = document.getElementById("answer4") // aparece variable not defined
let $opt5 = document.getElementById("answer5") // aparece variable not defined

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
    "question": "Dentro de qual elemento HTML colocamos o JavaScript?",
    "answers": [
      { "text": "<javascript>", "correct": false },
      { "text": "<js>", "correct": false },
      { "text": "<script>", "correct": true },
      { "text": "<scripting>", "correct": false }
    ]
  },
  {
    "question": "Onde é o lugar correto para inserir JavaScript?",
    "answers": [
      { "text": "Tanto no <head> quanto no <body> está correto", "correct": true },
      { "text": "No <body>", "correct": false },
      { "text": "No <head>", "correct": false },
      { "text": "Em outro lugar", "correct": false }
    ]
  },
  {
    "question": 'Qual é a sintaxe correta para se referir a um script externo chamado "xxx.js"',
    "answers": [
      { "text": '<script src="xxx.js">', "correct": true },
      { "text": '<script href="xxx.js">', "correct": false },
      { "text": '<script name="xxx.js">', "correct": false },
      { "text": "Nenhuma das alternativas", "correct": false }
    ]
  },
  {
    "question": 'O arquivo JavaScript externo deve conter a tag <script>',
    "answers": [
      { "text": "Verdadeiro", "correct": false },
      { "text": "Falso", "correct": true }
    ]
  },
  {
    "question": 'Como escrever "Hello World" numa caixa de alerta?',
    "answers": [
      { "text": 'msg("Hello World");', "correct": false },
      { "text": 'alert("Hello World");', "correct": true },
      { "text": 'msgBox("Hello World");', "correct": false },
      { "text": 'alertBox("Hello World");', "correct": false }
    ]
  },
  {
    "question": 'Como podemos criar uma função no JavaScript?',
    "answers": [
      { "text": 'function:myFunction()', "correct": false },
      { "text": 'function myFunction()', "correct": true },
      { "text": 'function = myFunction()', "correct": false },
      { "text": 'Nenhum desses códigos criaria uma função', "correct": false }
    ]
  },
  {
    "question": 'Como podemos chamar uma função chamada "minhaFuncao"?',
    "answers": [
      { "text": 'call minhaFuncao()', "correct": false },
      { "text": 'call function minhaFuncao()', "correct": false },
      { "text": 'Nenhum desses códigos chamaria essa função', "correct": false },
      { "text": 'minhaFuncao()', "correct": true },
    ]
  },
]

function start() {
    cron = setInterval(() => { time(); }, 3000);
}

function pause() {
  clearInterval(cron);
}

function time() {
  let certo = false
  let question = questions[qts];

  // Exibir a resposta atual
  let answer = question.answers[ans];
  certo = answer.correct

  opt1.innerHTML = `<p>${answer.text[0]}</p>`;
  opt2.innerHTML = `<p>${answer.text[1]}</p>`;
  opt3.innerHTML = `<p>${answer.text[2]}</p>`;
  opt4.innerHTML = `<p>${answer.text[3]}</p>`;
  opt5.innerHTML = `<p>${answer.text[4]}</p>`;
  // Atualizar para a próxima resposta
  ans++;

  // Verificar se todas as respostas da pergunta foram exibidas
  if (ans >= question.answers.length) {
    // Reiniciar o índice da resposta para a próxima pergunta
    ans = 0;
    // Atualizar para a próxima pergunta
    qts++;
  }

  // Verificar se todas as perguntas foram exibidas
  if (qts >= questions.length) {
    // Todas as perguntas foram exibidas
    $question.innerHTML = "Quiz finalizado";
    pause(); // Chamada de função para pausar o tempo, se necessário
    return;
  }
}