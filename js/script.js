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

function listener(question, answer, span) {
    question.addEventListener("click", () => {
        const styleConfirm = span.style.transform == "rotate(-180deg)";
        if (styleConfirm) {
            span.style.transform = "rotate(0)";
            question.style.overflow = "hidden"
            question.style.height = "2.75rem";
        } else {
             span.style.transform = "rotate(-180deg)";
            question.style.overflow = "visible";

            const hightQuestionContainer = (question) => { 
                question.style.height = "auto";

                return question.clientHeight.toFixed(2);
            }
            console.log(hightQuestionContainer);

            question.style.height = hightQuestionContainer(question) + "px";
        }

    })
}

for (i = 0; i < questions.length; i++) {
    listener(questions[i].question, questions[i].answer, questions[i].span);
}