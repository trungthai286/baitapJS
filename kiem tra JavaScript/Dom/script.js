const quizes = [
  {
    id: 1,
    question: "1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
];

function renderQuizes(quizes) {
  document.querySelector(".quiz-container").innerHTML = quizes
    .map(function (e) {
      const div = `
        <div class="quiz-item">
            <h3>Câu ${e.id} : ${e.question} = ?</h3>
            <div class="quiz-answer">
                <div class="quiz-answer-item">
                    <input type="radio" name="${e.id}">
                    <label>${e.answers[0]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${e.id}">
                    <label>${e.answers[1]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${e.id}">
                    <label>${e.answers[2]}</label>
                </div>
                <div class="quiz-answer-item">
                    <input type="radio" name="${e.id}">
                    <label>${e.answers[3]}</label>
                </div>
            </div>
        </div>
        `;
      return div;
    })
    .join("");
}

window.addEventListener("DOMContentLoaded", function (e) {
  renderQuizes(quizes);
});

function randomAnswer() {
  const quizItem = document.querySelectorAll(".quiz-item");
  quizItem.forEach(function (quiz) {
    const inputRadio = quiz.querySelectorAll('input[type="radio"]');
    const randomAnswerIndex = Math.floor(Math.random() * inputRadio.length);
    if (inputRadio[randomAnswerIndex]) {
      inputRadio[randomAnswerIndex].checked = true;
    }
  });
}

const btn = document.getElementById("btn");
btn.addEventListener("click", randomAnswer);
