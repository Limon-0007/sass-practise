let showButton = document.querySelector("#btn");

let closeButton = document.querySelector("#pop-up-btn");

let bg = document.querySelector("#bg");

let popUp = document.querySelector("#pop-up");

let logInForm = document.querySelector(".container");

function myFunction () {
  document.getElementById("form").reset();
}



showButton.addEventListener("click", function () {
  logInForm.classList.add("active");
  bg.style = "display: block;";
  popUp.style = "display: block;";
  logInForm.reset();
});

closeButton.addEventListener("click", function () {
  logInForm.classList.remove("active");
  bg.style = "display: none";
  popUp.style = "display: none";
});
