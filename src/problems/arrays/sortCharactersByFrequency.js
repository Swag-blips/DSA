// To review

function frequencySort(string) {
  const strArr = string.split("");

  const freqCounter = {};

  for (let i = 0; i < strArr.length; i++) {
    if (freqCounter[strArr[i]]) {
      freqCounter[strArr[i]] += 1;
    } else {
      freqCounter[strArr[i]] = 1;
    }
  }

  const finalArr = Object.entries(freqCounter).sort((a, b) => b[1] - a[1]);

  let text = "";

  for (let i = 0; i < finalArr.length; i++) {
    let currentElement = finalArr[i];

    for (let j = 0; j < currentElement[1]; j++) {
      text += currentElement[0];
    }
  }

  return text;
}
