function lengthOfLastWord(s) {
  const splittedStr = s.split(" ").map((word) => {
    if (word.trim() !== undefined) {
     
      return word;
    }
  }).filter(word => word !== '')
  console.log(splittedStr);
  return splittedStr[splittedStr.length - 1].length;
}

c
