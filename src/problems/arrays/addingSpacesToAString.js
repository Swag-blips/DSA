function addSpaces(s, spaces) {
  const str = s.split("");

  let spacePointer = 0;

  let filledBucket = [];

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (i === spaces[spacePointer]) {
      filledBucket.push(" ");
      filledBucket.push(letter);
      spacePointer++;
    } else {
      filledBucket.push(letter);
    }
  }

  return filledBucket.join("")
}

addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]);
