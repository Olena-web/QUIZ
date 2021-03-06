document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const btnOpenModal = document.querySelector("#btnOpenModal");
  const modalBlock = document.querySelector("#modalBlock");
  const closeModal = document.querySelector("#closeModal");
  const questionTitle = document.querySelector("#question");
  const formAnswers = document.querySelector("#formAnswers");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  const burger = document.getElementById("burger");
  if (document.documentElement.clientWidth < 768) {
    burger.style.display = "flex";
  } else {
    burger.style.display = "none";
  }
  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < 768) {
      burger.style.display = "flex";
    } else {
      burger.style.display = "none";
    }
  });
  const questions = [
    {
      question: "Какого цвета бургер?",
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
      type: "radio",
    },
    {
      question: "Из какого мяса котлета?",
      answers: [
        {
          title: "Курица",
          url: "./image/chickenMeat.png",
        },
        {
          title: "Говядина",
          url: "./image/beefMeat.png",
        },
        {
          title: "Свинина",
          url: "./image/porkMeat.png",
        },
      ],
      type: "radio",
    },
    {
      question: "Дополнительные ингредиенты?",
      answers: [
        {
          title: "Помидор",
          url: "./image/tomato.png",
        },
        {
          title: "Огурец",
          url: "./image/cucumber.png",
        },
        {
          title: "Салат",
          url: "./image/salad.png",
        },
        {
          title: "Лук",
          url: "./image/onion.png",
        },
      ],
      type: "checkbox",
    },
    {
      question: "Добавить соус?",
      answers: [
        {
          title: "Чесночный",
          url: "./image/sauce1.png",
        },
        {
          title: "Томатный",
          url: "./image/sauce2.png",
        },
        {
          title: "Горчичный",
          url: "./image/sauce3.png",
        },
      ],
      type: "radio",
    },
  ];

  // const obj = {}

  // const getData = () => {
  //     formAnswers.textContent = 'LOAD';

  //     setTimeout(() => {
  //         fetch('http://localhost:81/Quiz__intens/db.json')
  //             .then(res => res.json())
  //             .then(obj => playTest(obj.questions))
  //     }, 2000);
  // }

  // const obj = {};

  // const inputs = [...formAnswers.elements]
  //     .filter(elem => elem.checked)

  // inputs.forEach((elem, index) => {
  //     obj[`${index}_${questions[numberQuestion].question}`] = elem.value;
  // })
  // finalAnswers.push(obj)
  burger.addEventListener("click", () => {
    modalBlock.classList.add("d-block");
    playTest();
  });
  btnOpenModal.addEventListener("click", () => {
    modalBlock.classList.add("d-block");
    playTest();
  });

  closeModal.addEventListener("click", () => {
    modalBlock.classList.remove("d-block");
  });
  const playTest = () => {
    let numberQuestion = 0;

    const renderAnswers = (index) => {
      questions[index].answers.forEach((answer) => {
        const answerItem = document.createElement("div");
        answerItem.classList.add("answers-item", "d-flex", "flex-column");
        answerItem.innerHTML = `
        <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
                <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                  <img class="answerImg" src=${answer.url} alt="burger">
                  <span>${answer.title}</span>
                </label>`;
        formAnswers.appendChild(answerItem);
      });
    };
    const renderQuestions = (indexQuestion) => {
      formAnswers.innerHTML = "";
      questionTitle.textContent = `${questions[indexQuestion].question}`;
      renderAnswers(indexQuestion);
      numberQuestion > 0
        ? (prevBtn.style.display = "block")
        : (prevBtn.style.display = "none");
      numberQuestion < questions.length - 1
        ? (nextBtn.style.display = "block")
        : (nextBtn.style.display = "none");
    };
    renderQuestions(numberQuestion);
    nextBtn.onclick = () => {
      if (numberQuestion === questions.length - 1) {
        nextBtn.style = "display: none";
      } else {
        numberQuestion++;
        renderQuestions(numberQuestion);
      }
    };
    prevBtn.onclick = () => {
      if (numberQuestion === 0) {
        prevBtn.style = "display: none";
      } else if (numberQuestion > 0) {
        numberQuestion--;
        renderQuestions(numberQuestion);
      }
    };
  };
});
