let btnOpenModal = document.querySelectorAll(".btn");
console.log(btnOpenModal);
console.log(btnOpenModal.length);
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".closeModal");
let overlay = document.querySelector(".overlay");
console.log(modal);
for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener("click", function () {
    // console.log("You have Clicked on the Button");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
