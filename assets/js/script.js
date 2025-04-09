document.addEventListener("DOMContentLoaded", function () {

  // Initialize variables
  const quizTriggerBtn = document.getElementById("quizTriggerBtn");
  const quizOverlay = document.getElementById("quizOverlay");
  const quizPopup = document.getElementById("quizPopup");
  const closeQuizBtn = document.getElementById("closeQuizBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartQuizBtn = document.getElementById("restartQuizBtn");
  const questionCounter = document.getElementById("questionCounter");
  const quizQuestion = document.getElementById("quizQuestion");
  const scoreTracker = document.getElementById("scoreTracker");

  let currentQuestionIndex = 0;
  let score = 0;
  const questions = [
    {
      question: "Who created the Kami?",
      options: ["The Elder God", "The Kami themselves", "The Spirit of the Land", "The Moon"],
      correctAnswer: 0
    },
    {
      question: "What does the map in the Reikai reveal?",
      options: ["A hidden treasure", "A celestial journey", "A map to the Kami's origin", "A path to the human world"],
      correctAnswer: 1
    },
    {
      question: "Which Kami first stepped forth from the gate?",
      options: ["Saru twins", "The Elder Kami", "The first Kami", "The leader of the protectors"],
      correctAnswer: 2
    },
    {
      question: "What is the primary purpose of the Kami's journey?",
      options: ["To find a hidden artifact", "To fight the Elder God", "To uncover their origins", "To discover the truth behind their creation"],
      correctAnswer: 3
    },
    {
      question: "Who was chosen to lead the journey?",
      options: ["The Saru twins", "The elder Kami", "The strongest Kami", "The creator of the Kami"],
      correctAnswer: 0
    }
  ];

  // Function to display the current question
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizQuestion.innerHTML = `
      <p>${currentQuestion.question}</p>
      <ul>
        ${currentQuestion.options.map((option, index) => `
          <li>
            <button class="answer-btn" data-index="${index}">${option}</button>
          </li>`).join('')}
      </ul>
    `;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  }

  // Function to handle answer selection
  function handleAnswerSelection(event) {
    const selectedOptionIndex = parseInt(event.target.dataset.index);
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the answer is correct
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
      score++;
    }

    // Update the score tracker
    scoreTracker.textContent = `Score: ${score}/${questions.length}`;

    // Disable all buttons after an answer is selected
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => button.disabled = true);

    // Enable next button
    nextBtn.disabled = false;
  }

  // Function to move to the next question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
      nextBtn.disabled = true;
    } else {
      showQuizResults();
    }
  }

  // Function to show the quiz results
  function showQuizResults() {
    quizQuestion.innerHTML = `
      <h3>Quiz Over!</h3>
      <p>Your final score is ${score} out of ${questions.length}.</p>
    `;
    restartQuizBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  }

  // Function to restart the quiz
  function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    displayQuestion();
    scoreTracker.textContent = `Score: ${score}/${questions.length}`;
    restartQuizBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  }

  // Event Listeners
  quizTriggerBtn.addEventListener("click", () => {
    quizOverlay.classList.remove("hidden");
    quizPopup.classList.remove("hidden");
    displayQuestion();
  });

  closeQuizBtn.addEventListener("click", () => {
    quizOverlay.classList.add("hidden");
    quizPopup.classList.add("hidden");
  });

  nextBtn.addEventListener("click", nextQuestion);

  restartQuizBtn.addEventListener("click", restartQuiz);

  document.addEventListener("click", function (event) {
    if (event.target && event.target.matches(".answer-btn")) {
      handleAnswerSelection(event);
    }
  });

});
