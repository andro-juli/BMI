let button = document.getElementById("btn");
button.addEventListener("click", calculateBMI);

function calculateBMI(event) {
  event.preventDefault();
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let answer = document.getElementById("answer");

  //   calculate BMI
  let bmi = (weight / (height * height)) * 10000;
  if (bmi < 18.6)
    answer.innerHTML = `Under Weight : <span>${bmi.toFixed(2)}</span>`;
  else if (bmi >= 18.6 && bmi < 24.9)
    answer.innerHTML = `Normal : <span>${bmi.toFixed(2)}</span>`;
  else bmi >= 24.9 && bmi < 29.9;
  answer.innerHTML = `Over Weight : <span>${bmi.toFixed(2)}</span>`;
}
