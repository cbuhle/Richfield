function pressButton() {
  let h1 = document.querySelector("h1");
  let name = document.querySelector("#first-name");
  let surname = document.querySelector("#last-name");
  h1.innerHTML = `Successful Registration! ${name} ${surname} `;
}
let button = document.querySelector(".search-button");
button.addEventListener("submit", pressButton);
pressButton();
console.log(button);
