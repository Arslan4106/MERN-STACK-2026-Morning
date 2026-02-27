let btnOpenModal = document.querySelectorAll(".btn");
console.log(btnOpenModal);
console.log(btnOpenModal.length);
for (let i = 0; i < btnOpenModal.length; i++) {
  console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener("click", function () {
    console.log("You have Clicked on the Button");
  });
}
