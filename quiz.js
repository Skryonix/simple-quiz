let currentQuestionIndex = 0;
const questions = [
    {
        question: 'Who is the author of "The Lord of the Rings"?',
        answers: ['J.K. Rowling', 'George R.R. Martin', 'J.R.R. Tolkien', 'Stephen King'],
        correct: 2
    },
    {
        question: 'What is the name of the hobbit who inherits the One Ring?',
        answers: ['Frodo Baggins', 'Samwise Gamgee', 'Meriadoc Brandybuck', 'Peregrin Took'],
        correct: 0
    },
  {
    question: 'What is the name of the wizard who leads the Fellowship of the Ring?',
    answers: ['Saruman', 'Gandalf', 'Radagast', 'Alatar'],
    correct: 1
},
{
    question: 'Which creature from the Misty Mountains tries to eat the ring-bearer?',
    answers: ['Balrog', 'Smaug', 'Gollum', 'Shelob'],
    correct: 2
},
{
    question: 'What is the elven word for friend, used to open the gates of Moria?',
    answers: ['Mellon', 'Elbereth', 'Elessar', 'Nenya'],
    correct: 0
},
{
    question: 'Who is the king of Rohan?',
    answers: ['Éomer', 'Théoden', 'Denethor', 'Faramir'],
    correct: 1
},
{
    question: 'Who defeats the Witch-King of Angmar in the Battle of the Pelennor Fields?',
    answers: ['Aragorn', 'Éowyn', 'Legolas', 'Gimli'],
    correct: 1
},
{
    question: 'Which member of the Fellowship is lost in the Mines of Moria?',
    answers: ['Boromir', 'Gimli', 'Gandalf', 'Legolas'],
    correct: 2
},
    // ... Add more questions here
];

function showQuestion(question) {
    $('#question-container').css({opacity: 0, transform: 'translateY(-20px)'});  // Reset animation
    setTimeout(() => {  // Delay to allow animation reset
        $('#question').text(question.question);
        $('#answer-buttons').empty();
        question.answers.forEach((answer, index) => {
            const button = $('<button></button>').text(answer).addClass('btn');
            button.on('click', () => selectAnswer(index));
            $('#answer-buttons').append(button);
        });
        $('#question-container').css({opacity: 1, transform: 'translateY(0)'});  // Trigger animation
    }, 100);
}

function selectAnswer(index) {
    const correctIndex = questions[currentQuestionIndex].correct;
    const correct = correctIndex === index;
    $('#answer-buttons .btn').eq(correctIndex).addClass('correct-answer');
    if(correct) {
    } else {
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
        const restart = confirm('Quiz completed. Would you like to restart?');
        if (restart) {
            currentQuestionIndex = 0;
            showQuestion(questions[currentQuestionIndex]);
            $('#next-button').hide();
        }
    }
}


showQuestion(questions[currentQuestionIndex]);

// Attach the next function to the next button's click event
$('#next-button').on('click', next);
