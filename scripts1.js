const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The weather is the same as climate?',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    question: 'The biggest threat towards development is?',
    answers: [
      { text: 'Pollution', correct: false },
      { text: 'Climate change', correct: true },
      { text: 'Melting Polar Ice-Caps', correct: false },
      { text: 'Population Growth', correct: false }
    ]
  },

  {
    question: 'The Greenhouse Effect',
    answers: [
      { text: 'is caused by the oxygen shortage', correct: false },
      { text: 'is the decrease in the surface temperature on Earth', correct: false },
      { text: 'is the rise in the surface temperature on Earth', correct: true }
    ]
  },
  {
    question: 'The  number  of  reported  hydro-meteorological  hazards  in  recent  decades  (droughts,  floods, wind storms, etc.):',
    answers: [
      { text: 'Has increased', correct: true },
      { text: 'Has decreased', correct: false },
      { text: 'Has remained about the same', correct: false }
    ]
  },
  {
    question: 'How much do we want to limit global warming to in terms of a global temperate increase?',
    answers: [
      { text: '2° Celsius', correct: true },
      { text: '5° Celsius', correct: false },
      { text: '10°Celsius', correct: false }
    ]
  },
  {
    question: 'In which countries do 80% of children either usingsurface water or have to walk more than 15 minutes to find a protected water source?',
    answers: [
      { text: 'North Korea, Russia, Ukraine', correct: false },
      { text: 'Ethiopia, Rwanda and Uganda', correct: true },
      { text: 'Colombia, China, New Zealand', correct: false },
    ]
  },
 {
    question: 'Global Climate Change Caused by increase?',
    answers: [
      { text: 'Oxygen', correct: false },
      { text: 'Carbon Dioxide', correct: true }
    ]
},

{
   question: 'What is the cause of global warming?',
   answers: [
     { text: 'Earth is wobbling closer to the sun.', correct: false },
     { text: 'There are more forest fires today', correct: false },
     { text: 'An increase in greenhouse gases', correct: true }
   ]
},
  {
    question: 'Which are possible solutions for climate change?',
    answers: [
      { text: 'Carbon capture and storage', correct: false },
      { text: 'Hybrid technology', correct: false },
      { text: 'Creating carbon emission caps', correct: false },
      { text: 'All of the above', correct: true }
    ]
  }
]
