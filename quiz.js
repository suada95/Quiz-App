function check() {
  let x = 0;
  let q1 = document.quiz.question1.value;
  let q2 = document.quiz.question2.value;
  let q3 = document.quiz.question3.value;
  let q4 = document.quiz.question4.value;
  let q5 = document.quiz.question5.value;
  let q6 = document.quiz.question6.value;
  let q7 = document.quiz.question7.value;
  let q8 = document.quiz.question8.value;
  let result = document.getElementById("result");
  let quiz = document.getElementById("quiz");
  if (q1 == "True") {
    x++;
  }
  if (q2 == "True") {
    x++;
  }
  if (q3 == "False") {
    x++;
  }
  if (q4 == "True") {
    x++;
  }
  if (q5 == "False") {
    x++;
  }

  quiz.style.display = "none";
  if (x <= 3) {
    result.textContent = `Your result is ${x}  work on your self`;
  } else {
    result.textContent = `Your result is ${x}  Keep it up`;
  }
}
