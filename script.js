let btn = document.querySelector(".advice-btn");
let adviceId = document.querySelector(".advice-id");
let advice = document.querySelector(".advice");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerHTML = data.slip.id;
      advice.innerHTML = data.slip.advice;
    });
});
