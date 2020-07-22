
function buildQuiz(){
    const output =[];
    questions.forEach(
        (question,questionNumber)=>{
        const answers = [];
        for(index in question.options){
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${index}">
                    ${index}:
                    ${question.options[index]}
                </label>`
            );
        }

        output.push(
            `<div class="slide">
            <div class="question">${question.question}</div>
            <div class="answers">${answers.join(" ")}</div>
            </div>`
        );
    });

    quiz.innerHTML = output.join(" ");

}

function showResults(){

    const userAnswers = quiz.querySelectorAll(".answers");
    let numCorrect = 0;

    questions.forEach( (question, questionNumber) => {

    const answer = userAnswers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answer.querySelector(selector) || {}).value;

    if(userAnswer === question.answer){
      numCorrect++;
      userAnswers[questionNumber].style.color = 'lightgreen';
    }
    else{
      userAnswers[questionNumber].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = ` You answered ${numCorrect} out of ${questions.length} correctly.`;

}
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }


const quiz = document.getElementById("quiz")
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const questions =[
    {
        question:"What does HTML stands for?",
        options: {
            a:"HyperText Machine Language",
            b:"Hyperlink and Text Markup language",
            c:"HyperText Markup Language",
            d:"None of the above",
        },
        answer:"c"
    },
    {
        question:"What is the font size of the h1 tag?",
        options: {
            a:"2 em",
            b:"1.5 em",
            c:"3.5 em",
            d:"2.17 em",
        },
        answer:"a"
    },
    {
        question:"Using padding clears the area outside:",
        options: {
            a:"Border",
            b:"Content",
            c:"Margin",
            d:"All of the above",
        },
        answer:"b"
    },
    {
        question:"What is default margin of the body element?",
        options: {
            a:"10 px",
            b:"8 px",
            c:"12 px",
            d:"6 px",
        },
        answer:"b"
    },
    {
        question:"Who is making the Web Standards?",
        options: {
            a:"Microsoft",
            b:"Google",
            c:"Mozilla",
            d:"The World Wide Web Constrium",
        },
        answer:"d"
    },
    {
        question:"Inline elements are normally displayed without starting a new line.",
        options: {
            a:"True",
            b:"False",
        },
        answer:"a"
    }
]

buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

