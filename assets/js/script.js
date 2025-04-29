// Toggle Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// dark and light mode toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


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
    question: "What is the name of the Kami leader?",
    options: ["Ryojin", "Hikaru", "Takeshi", "Kaze"],
    answer: "Ryojin",
  },
  {
    question: "Which element do the Kami control?",
    options: ["Wind", "Water", "All Elements", "Earth"],
    answer: "All Elements",
  },
  {
    question: "What is the forbidden land called?",
    options: ["Yami", "Kuro", "Makai", "Tenku"],
    answer: "Makai",
  },
  {
    question: "Which color represents peace among the Kami?",
    options: ["Red", "White", "Blue", "Gold"],
    answer: "White",
  },
  {
    question: "Who betrayed the Kami in the old war?",
    options: ["Raiden", "Sora", "Akuma", "Kenji"],
    answer: "Akuma",
  },
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
    quizQuestion.innerHTML = `<p>Quiz complete! You scored ${score}/${
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
