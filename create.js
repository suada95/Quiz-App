// local storage
let ftitle = document.getElementById("title");
let fquestion = document.getElementById("fquestion");
let fanswer = document.getElementById("answer");

const submiT = (e) => {
  (ftitle = document.getElementById("title").value),
    (fquestion = document.getElementById("fquestion").value),
    (fanswer = document.getElementById("answer").value);
};
let formData = JSON.parse(localStorage.getItem("formData")) || [];
// function store() {
//   let inputTitle = document.getElementById("title");
//   let inputQuestion = document.getElementById("fquestion");
//   let inputAnswer = document.getElementById("answer");
//   localStorage.setItem("title", inputTitle.value);
//   localStorage.setItem("fquestion", inputQuestion.value);
//   localStorage.setItem("answer", inputAnswer.value);
// }

// social media share button
const shareBtn = document.querySelector(".share-btn");
const shareOptions = document.querySelector(".share-options");

shareBtn.addEventListener("click", () => {
  shareOptions.classList.toggle("active");
});

// delete popup
// const deleteBtn = document.querySelector(".delete");
// const choose = document.querySelector(".choose");

// deleteBtn.addEventListener("click", () => {
//   choose.classList.toggle("active");
// });

const deleteBtn = document.querySelector(".delete");
const choose = document.querySelector(".choose");
deleteBtn.addEventListener("click", (e) => {
  if (choose.style.display === "none") {
    choose.style.display = "inline";
  } else {
    choose.style.display = "none";
  }
});
