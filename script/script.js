document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const btnOpenModal = document.querySelector("#btnOpenModal");
  const modalBlock = document.querySelector("#modalBlock");
  const closeModal = document.querySelector("#closeModal");
  const questionTitle = document.querySelector("#question");
  const formAnswers = document.querySelector("#formAnswers");

  const questions = {
    question: "Какого цвета бургер Вы хотите?",
    answers: [
      {
        title: "Стандарт",
        url: "./image/burger.png",
      },
      {
        title: "Черный",
        url: "./image/burgerBlack.png",
      },
    ],
  };

  btnOpenModal.addEventListener("click", () => {
    modalBlock.classList.add("d-block");
    playTest();
  });

  closeModal.addEventListener("click", () => {
    modalBlock.classList.remove("d-block");
  });
  const playTest = () => {
    const renderAnswers = () => {
      questions.answers.forEach((answer) => {
        const answerItem = document.createElement("div");
        answerItem.classList.add("answers-item", "d-flex", "flex-column");
        answerItem.innerHTML = `
        <input type="radio" id="answerItem1" name="answer" class="d-none">
                <label for="answerItem1" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src=${answer.url} alt="burger">
                  <span>${answer.title}</span>
                </label>`;
        formAnswers.appendChild(answerItem);
      });
    };
    const renderQuestions = () => {
      questionTitle.textContent = `${questions.question}`;
      renderAnswers();
    };
    renderQuestions();
  };
});
