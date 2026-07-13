function replaceGreatestElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    let greatestCharacter = -Infinity;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > greatestCharacter) {
        greatestCharacter = arr[j];
      }
    }

    arr[i] = greatestCharacter;
    greatestCharacter = 0;

    if (i === arr.length - 1) {
      arr[i] = -1;
    }
  }

  return arr;
}

console.log(replaceGreatestElement([2, 5, 2, 5, 2]));
