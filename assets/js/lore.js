// swiper - lore
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        },
        on: {
            slideChange: function () {
                if (this.activeIndex === 7) { 
                    const quizTriggerBtn = document.getElementById("quizTriggerBtn");
                    quizTriggerBtn.classList.remove("hidden");
                }
            }
        }
    });
});

// quiz
const quizTriggerBtn = document.getElementById("quizTriggerBtn");
const quizPopup = document.getElementById("quizPopup");
const quizOverlay = document.getElementById("quizOverlay");
const closeQuizBtn = document.getElementById("closeQuizBtn");
const quizQuestion = document.getElementById("quizQuestion");
const questionCounter = document.getElementById("questionCounter");
const scoreTracker = document.getElementById("scoreTracker");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartQuizBtn");

const questions = [
  {
    question: "What unique feature characterizes the skies of the Reikai?",
    options: [
      "Lightning storms that never end",
      "Stars that move in patterns",
      "Vibrant hues unseen by mortal eyes",
      "Constant twilight"
    ],
    answer: "Vibrant hues unseen by mortal eyes",
  },
  {
    question: "What floats among the ethereal mists of the Reikai?",
    options: [
      "Flying beasts with crystal wings",
      "Islands with lush foliage",
      "Towers made of gold",
      "Ships of the Kami"
    ],
    answer: "Islands with lush foliage",
  },
  {
    question: "What marks the center of the Reikai?",
    options: [
      "A mountain of mirrors",
      "A tranquil pool and a giant tori gate",
      "A palace made of clouds",
      "A blazing sunstone"
    ],
    answer: "A tranquil pool and a giant tori gate",
  },
  {
    question: "How did the first Kami emerge in the Reikai?",
    options: [
      "From the heart of a volcano",
      "As lightning struck the highest tree",
      "From dazzling light through the tori gate",
      "Born from the mist at dawn"
    ],
    answer: "From dazzling light through the tori gate",
  },
  {
    question: "What event followed the creation of the Kami city?",
    options: [
      "A grand celebration lasting into the night",
      "A war among the strongest Kami",
      "The separation of spirit and mortal realms",
      "The return of the elder god"
    ],
    answer: "A grand celebration lasting into the night",
  },
  {
    question: "What strange occurrence happened during the celebration?",
    options: [
      "The sky turned red and the stars vanished",
      "Whispers from the elder god were heard by a select few",
      "The city walls crumbled on their own",
      "Kami began disappearing mysteriously"
    ],
    answer: "Whispers from the elder god were heard by a select few",
  },
  {
    question: "Who were the first to answer the call of the elder god?",
    options: [
      "The guardians of light",
      "The Saru twins, a kindred spirit, and two Kami",
      "The creators of the city",
      "The watchers from the sky"
    ],
    answer: "The Saru twins, a kindred spirit, and two Kami",
  },
  {
    question: "What appeared when the Kami gathered at the gate again?",
    options: [
      "A celestial map illuminated by moonlight",
      "A golden key hovering above the lake",
      "A staircase leading into the clouds",
      "A glowing orb of pure energy"
    ],
    answer: "A celestial map illuminated by moonlight",
  },
  {
    question: "What did the Kami do with the celestial map?",
    options: [
      "Took it with them on a scroll",
      "Committed it to memory",
      "Burned it as a ritual",
      "Gave it to the elder god"
    ],
    answer: "Committed it to memory",
  },
  {
    question: "How did the chosen Kami react before beginning their quest?",
    options: [
      "They argued over who should lead",
      "They nodded in silent agreement",
      "They fell to their knees in fear",
      "They cast a spell of protection on each other"
    ],
    answer: "They nodded in silent agreement",
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  quizQuestion.innerHTML = `<p class="question-text">${q.question}</p>`+
    q.options.map(
      (opt) =>
        `<button class="option-btn">${opt}</button>`
    )
    .join("");
  questionCounter.textContent = `Question ${currentQuestion + 1} of ${
    questions.length
  }`;
  scoreTracker.textContent = `Score: ${score}/${questions.length}`;
  nextBtn.disabled = true;

  document.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".option-btn")
        .forEach((b) => (b.disabled = true));

      if (btn.textContent === q.answer) {
        btn.style.backgroundColor = "#a6f3a6"; 
        score++;
      } else {
        btn.style.backgroundColor = "#f8b6b6";
      }

      scoreTracker.textContent = `Score: ${score}/${questions.length}`;
      nextBtn.disabled = false;
    });
  });
}

quizTriggerBtn.addEventListener("click", () => {
  quizOverlay.classList.remove("hidden");
  quizPopup.classList.remove("hidden");
  currentQuestion = 0;
  score = 0;
  restartBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  loadQuestion();
});

closeQuizBtn.addEventListener("click", () => {
  quizOverlay.classList.add("hidden");
  quizPopup.classList.add("hidden");
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    quizQuestion.innerHTML = `<p>You scored ${score}/${
      questions.length
    }.</p><p>${
      score === 5
        ? "Perfect!"
        : score >= 3
        ? "Well done!"
        : "Keep learning the lore!"
    }</p>`;
    questionCounter.textContent = "Quiz Complete";
    nextBtn.classList.add("hidden");
    restartBtn.classList.remove("hidden");
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  restartBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  loadQuestion();
});
