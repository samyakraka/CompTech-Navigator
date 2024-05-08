document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question-container');
    let currentQuestionIndex = 0;

    function showNextQuestion() {
        if (currentQuestionIndex < questions.length) {
            questions[currentQuestionIndex].style.opacity = '1';
            currentQuestionIndex++;
        }
    }

    // Initially hide all questions except the first one
    questions.forEach((question, index) => {
        if (index !== 0) {
            question.style.opacity = '0';
        }
    });

    // Show the next question every 2 seconds
    setInterval(showNextQuestion, 500);
});

    document.querySelector('.question-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
    
        const interest = document.getElementById('interest').value;
    
        if (interest === 'webdev') {
            // Redirect to web.html if Web Development is selected
            window.location.href = 'web.html';
        }
        else if (interest === 'androiddev') {
            // Redirect to web.html if Web Development is selected
            window.location.href = 'android.html';
        } 
        else if (interest === 'ml') {
            // Redirect to web.html if Web Development is selected
            window.location.href = 'aiml.html';
        }
        else if (interest === 'cybersec') {
            // Redirect to web.html if Web Development is selected
            window.location.href = 'cyber.html';
        }
        else if (interest === 'cloud') {
            // Redirect to web.html if Web Development is selected
            window.location.href = 'cloud.html';
        }
        else {
            // Optionally, handle other interests or display a message
            alert('Thank you for your interest.');
        }
    });
    