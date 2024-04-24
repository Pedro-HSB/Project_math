// const $startGameButton = document.querySelector(".start-quiz")
// const $nextQuestionButton = document.querySelector(".next-question")
// const $questionsContainer = document.querySelector(".questions-container")
let $question = document.getElementById("question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")
let $answerTest = document.getElementById("answerTest")

let currentQuestionIndex = 0
let totalCorrect = 0

// displayNextQuestion()

// $startGameButton.addEventListener("click", startGame)
// $nextQuestionButton.addEventListener("click", displayNextQuestion)

// function startGame() {
//   $startGameButton.classList.add("hide")
//   $questionsContainer.classList.remove("hide")
//   displayNextQuestion()
// }

// function displayNextQuestion() {
//   resetState()
  
//   if (questions.length === currentQuestionIndex) {
//     return finishGame()
//   }

//   $question"Text"."text"Content = questions[currentQuestionIndex].question
//   questions[currentQuestionIndex].answers.forEach(answer => {
//     const newAsnwer = document.createElement("button")
//     newAsnwer.classList.add("button", "answer")
//     newAsnwer."text"Content = answer."text"
//     if (answer.correct) {
//       newAsnwer.dataset.correct = answer.correct
//     }
//     $answersContainer.appendChild(newAsnwer)

//     newAsnwer.addEventListener("click", selectAnswer)
//   })
// }

// function resetState() {
//   while($answersContainer.firstChild) {
//     $answersContainer.removeChild($answersContainer.firstChild)
//   }

//   document.body.removeAttribute("class")
//   // $nextQuestionButton.classList.add("hide")
// }

// function selectAnswer(event) {
//   const answerClicked = event.target

//   if (answerClicked.dataset.correct) {
//     document.body.classList.add("correct")
//     totalCorrect++
//   } else {
//     document.body.classList.add("incorrect") 
//   }

//   document.querySelectorAll(".answer").forEach(button => {
//     button.disabled = true

//     if (button.dataset.correct) {
//       button.classList.add("correct")
//     } else {
//       button.classList.add("incorrect")
//     }
//   })
  
//   $nextQuestionButton.classList.remove("hide")
//   currentQuestionIndex++
// }

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
      { "op1": "<javascript>", "correct": false },
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

let second = 0;
let millisecond = 0;
let cron;
let qts = 1
start()

function start() {
  cron = setInterval(() => { time(); }, 10);
}

function pause(){
  clearInterval(cron);
}

function time() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 3) {// esse 3 e apenas para teste
    second = 0;
    qts += 1
    $question.innerHTML = questions[qts]["question"]
//estou tentando percorrer o objeto answers
    $answerTest.innerHTML = questions[qts]["answers"]

    if(qts == 3){
      $question.innerHTML = "Quiz finalizado"
      pause()
      return ;
    }
  }
}
