let currentQuestionIndex = 0;
const questions = [
    {
        question: 'What is the capital of France?',
        answers: ['London', 'Berlin', 'Paris', 'Rome'],
        correct: 2
    }
    // Add more questions as needed
];

function showQuestion(question) {
    $('#question').text(question.question);
    $('#answer-buttons').empty();
    question.answers.forEach((answer, index) => {
        const button = $('<button></button>').text(answer).addClass('btn');
        button.on('click', () => selectAnswer(index));
        $('#answer-buttons').append(button);
    });
}

function selectAnswer(index) {
    const correct = questions[currentQuestionIndex].correct === index;
    if(correct) {
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
    $('#next-button').show();
}

function next() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        $('#next-button').hide();
    } else {
        // End of quiz
        alert('Quiz completed');
    }
}

showQuestion(questions[currentQuestionIndex]);

// Attach the next function to the next button's click event
$('#next-button').on('click', next);
