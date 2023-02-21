const quizData = [
    {
        question: "1 + 1 = _",
        a: '2' ,
        b: '4' ,
        c: '1' ,
        d: 'secret' ,
        correct: 'a',
        explanation: '1+1 is a mathematical expression that evaluates to: 2'
    },
    {
        question: "1 + 2 = _",
        a: '2' ,
        b: '4' ,
        c: '3' ,
        d: 'secret' ,
        correct: 'c',
        explanation: '1+1 is a mathematical expression that evaluates to: 2'
    },
    {
        question: "5 + 2 = _",
        a: '2' ,
        b: '4' ,
        c: '1' ,
        d: '7' ,
        correct: 'd',
        explanation: '1+1 is a mathematical expression that evaluates to: 2'
    },
    {
        question: "4 + 4 = _",
        a: '8' ,
        b: '4' ,
        c: '1' ,
        d: 'secret' ,
        correct: 'a',
        explanation: '1+1 is a mathematical expression that evaluates to: 2'
    },
    {
        question: "7 + 1 = _",
        a: '2' ,
        b: '4' ,
        c: '1' ,
        d: '8' ,
        correct: 'd',
        explanation: '1+1 is a mathematical expression that evaluates to: 2'
    },
]

const theQuestion = document.getElementById('question');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

var currentNumber = 0;

loadQuiz(quizData);

function loadQuiz(quizData){

    const currentQuizData = quizData[currentNumber];

    theQuestion.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answerSelects = document.getElementsByName('answer')

    let answer = undefined;
    answerSelects.forEach((answerSelect) => {
        if (answerSelect.checked){
            answer = answerSelect.id
        }
    })
    return answer

}

submitBtn.addEventListener('click', () => {
    const currentQuizData = quizData[currentNumber];
    const answer = getSelected()

    console.log(answer)
     if (answer  === currentQuizData.correct){
         if (currentNumber < quizData.length) {
             currentNumber++
             loadQuiz(quizData);
         }else{
             currentNumber = 0
         }
     }


});