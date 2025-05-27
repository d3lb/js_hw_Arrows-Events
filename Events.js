'use strict';

// אירועי דפדפן

// Task 1

const box = document.getElementById("hoverBox");
box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "lightblue";
});

// Task 2

const box2 = document.getElementById("hoverBox2");
box2.addEventListener("mouseover", () => {
  box2.style.backgroundColor = "lightblue";
});
box2.addEventListener("mouseout", () => {
  box2.style.backgroundColor = "gray";
});

// Task 3

let count = 0;
const btn = document.getElementById("clickBtn");
const span = document.getElementById("clickCount");

btn.addEventListener("click", () => {
  count++;
  span.textContent = count;
});
