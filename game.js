const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    "question": "Which company developed JavaScript?",
    "choice1": "Microsoft",
    "choice2": "Netscape",
    "choice3": "Google",
    "choice4": "IBM",
    "answer": 2
  },
  {
    "question": "Which keyword is used to declare a variable in JavaScript?",
    "choice1": "var",
    "choice2": "int",
    "choice3": "string",
    "choice4": "letvar",
    "answer": 1
  },
  {
    "question": "Which symbol is used for comments in JavaScript?",
    "choice1": "//",
    "choice2": "<!-- -->",
    "choice3": "#",
    "choice4": "**",
    "answer": 1
  },
  {
    "question": "How do you create a function in JavaScript?",
    "choice1": "function myFunc()",
    "choice2": "create myFunc()",
    "choice3": "function:myFunc()",
    "choice4": "def myFunc()",
    "answer": 1
  },
  {
    "question": "Which operator is used to assign a value to a variable?",
    "choice1": "*",
    "choice2": "-",
    "choice3": "=",
    "choice4": "==",
    "answer": 3
  },
  {
    "question": "How do you write an IF statement in JavaScript?",
    "choice1": "if i = 5",
    "choice2": "if (i == 5)",
    "choice3": "if i == 5 then",
    "choice4": "if i = 5 then",
    "answer": 2
  },
  {
    "question": "Which method converts JSON data to a JavaScript object?",
    "choice1": "JSON.parse()",
    "choice2": "JSON.stringify()",
    "choice3": "JSON.convert()",
    "choice4": "JSON.toObject()",
    "answer": 1
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startgame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  console.log(availableQuesions);
  getNewQuestion();
}

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //Go to the end page
    return window.location.assign("/end.html");
  }

  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    getNewQuestion();
  });
});

startgame();