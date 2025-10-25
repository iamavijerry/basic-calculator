let calculation = '';
let result = '';
let history = [];

const historyDiv = document.querySelector('#history');
const display = document.querySelector('#display');

display.focus();


function calculationfun(value) {

  if (value === 'AC') {
    calculation = '';
  } else if (value === 'C') {
    calculation = calculation.slice(0, -1);
  }
  else if (value === '=') {

    try {
      let expression = calculation.replace(/÷/g, "/").replace(/×/g, "*").replace(/%/g, "/100");
      let result = eval(expression);
      history.push(calculation + " = " + result);
      calculation = result.toString();
      historyDiv.innerHTML = history.join('<br>');
    }

    catch {
      calculation = "Error";
    }

  } else {
    calculation += value;
  }
  display.value = calculation;
  console.log(calculation);
}

display.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log("Pressed", e.key);

  if (e.key === "=" || e.key === "Enter") {
    calculationfun('=');
  } else if (/[0-9+\-*/.]/.test(e.key)) {
    calculationfun(e.key);
  } else if (e.key === "Backspace") {
    calculationfun('C')
  } else if (e.key === "Delete") {
    calculationfun('AC');
  } else if (e.key === "+") {
    calculationfun('+');
  } else if (e.key === "-") {
    calculationfun('-');
  } else if (e.key === "*") {
    calculationfun('*');
  } else if (e.key === "/") {
    calculationfun('/');
  } else if (e.key === "%") {
    calculationfun('%');
  } else if (e.key === ".") {
    calculationfun('.');
  }
})

// function updateHistory() {
//   historyDiv.innerHTML = history.join('<br>');
// }