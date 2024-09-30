function pressButton() {
  let h1 = document.querySelector("h1");
  let name = document.querySelector("#first-name");
  let surname = document.querySelector("#last-name");
  h1.innerHTML = `Successful Registration! ${name} ${surname} `;
}
pressButton();
