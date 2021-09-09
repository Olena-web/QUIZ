document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const btnOpenModal = document.querySelector("#btnOpenModal");
  const modalBlock = document.querySelector("#modalBlock");
  const closeModal = document.querySelector("#closeModal");
  btnOpenModal.addEventListener("click", () => {
    modalBlock.classList.add("d-block");
  });

  closeModal.addEventListener("click", () => {
    modalBlock.classList.remove("d-block");
  });
});
