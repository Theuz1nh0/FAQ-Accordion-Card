const questions = [
    {
        question: question01,
        answer: answer01,
        span: span01
    },
    {
        question: question02,
        answer: answer02,
        span: span02
    },
    {
        question: question03,
        answer: answer03,
        span: span03
    },
    {
        question: question04,
        answer: answer04,
        span: span04
    },
    {
        question: question05,
        answer: answer05,
        span: span05
    }

]

let heightQuestionContainer;
let heightsVetor = [];

// function to get the height value of "questions-container" and store it in a array
// with this array we can change height value with slight transition when "question-container" is clicked
function getHeightValue(question) {
    for (var i = 1; i <= 2; i++) {
        if (i == 1) {
            question.style.overflow = "visible";
            question.style.height = "auto";
            heightQuestionContainer = question.clientHeight + 1;
            heightsVetor.push(heightQuestionContainer);

        } else {
            question.style.overflow = "hidden";
            question.style.height = "2.75rem";
        }
    }
}


for (i = 0; i < questions.length; i++) {
    getHeightValue(questions[i].question);
}


function listener(question, answer, span, height) {
    question.addEventListener("click", () => {
        const styleConfirm = span.style.transform == "rotate(-180deg)";

        if (styleConfirm) {
            span.style.transform = "rotate(0)";
            question.style.overflow = "hidden";
            question.style.height = "2.75rem";
            answer.style.color = "hsl(240, 6%, 50%, 0)";
        } else {
            span.style.transform = "rotate(-180deg)";
            question.style.overflow = "visible";
            answer.style.color = "hsl(240, 6%, 50%)";
            question.style.height = height + "px";
        }

    })
}

for (i = 0; i < questions.length; i++) {
    listener(questions[i].question, questions[i].answer, questions[i].span, heightsVetor[i]);
}