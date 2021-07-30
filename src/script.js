"use strict";

let backgroundColor = document.querySelector(".color");

function generateRandomColor() {
  let randomC = "";
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 6; i++) {
    randomC += chars[Math.floor(Math.random() * 16)];
  }
  return randomC;
}

const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  //   e.preventDefault();
  const color = `#${generateRandomColor()}`;
  backgroundColor.innerHTML = document.body.style.backgroundColor = color;
});
