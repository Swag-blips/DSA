const { Stack } = require("../../data-structures/stack");

function applyOperator(numberArr, operatorIndex, operator) {
  const previous = numberArr[operatorIndex - 1];
  const next = numberArr[operatorIndex + 1];

  let answer;

  if (operator === "/") {
    answer = Math.trunc(previous / next);
  } else if (operator === "*") {
    answer = previous * next;
  } else if (operator === "+") {
    answer = previous + next;
  } else if (operator === "-") {
    answer = previous - next;
  }

  numberArr[operatorIndex - 1] = answer;
  numberArr.splice(operatorIndex, 2);
}

function basicCalculator(s) {
  const splittedStr = s.split("");
  const finalArr = [];

  for (let i = 0; i < splittedStr.length; i++) {
    let currentElement = splittedStr[i];
    let splicedOffOindexes = [];
    if (!isNaN(currentElement)) {
      if (!isNaN(splittedStr[i + 1])) {
        for (let j = i + 1; j < splittedStr.length; j++) {
          if (isNaN(splittedStr[j])) {
            break;
          } else {
            currentElement += splittedStr[j];
            splicedOffOindexes.push(j);
          }
          i = j;
        }

        finalArr.push(currentElement);
      } else {
        finalArr.push(currentElement);
      }
    } else {
      finalArr.push(currentElement);
    }
  }

  const numberArr = finalArr.map((num) => {
    if (!isNaN(num.trim())) {
      return Number(num);
    } else {
      return num;
    }
  });

  for (let i = 0; i < numberArr.length; i++) {
    const currentElement = numberArr[i];

    if (currentElement === "/") {
      applyOperator(numberArr, i, "/");
      i = i - 1;
    } else if (currentElement === "*") {
      applyOperator(numberArr, i, "*");
      i = i - 1;
    }
  }

  for (let i = 0; i < numberArr.length; i++) {
    const currentElement = numberArr[i];

    if (currentElement === "+") {
      applyOperator(numberArr, i, "+");
      i = i - 1;
    } else if (currentElement === "-") {
      applyOperator(numberArr, i, "-");
      i = i - 1;
    }
  }
  return numberArr[0];
}

console.log(basicCalculator("10-3-2"));


// SHITTIEST ALGO EVER
