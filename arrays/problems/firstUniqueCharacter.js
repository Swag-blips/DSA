function firstUniqueCharacter(s) {
  const characters = {};
  let firstUniqueIndex;

  const arrOfChar = s.split("");
  let count = 0;
  for (const char of arrOfChar) {
    let singleCharacter = characters[char];

    if (!singleCharacter) {
      characters[char] = [count];
    } else {
      singleCharacter.push(count);
    }

    count++;
  }

  for (const char in characters) {
    const keys = characters[char];

    if (keys.length > 1) {
      continue;
    } else {
      firstUniqueIndex = keys[0];
      break;
    }
  }

  return typeof firstUniqueIndex !== "number" ? -1 : firstUniqueIndex;
}
