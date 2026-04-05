const letters = "abcdefghijklmnopqrstuvwxyz";
function isStringPalindrome(str) {
  const str1 = str.split("");
  const str2 = str.split("");

  const cleanedStr1 = str1
    .filter((char) => letters.includes(char.toLowerCase()) || Number(char))
    .map((char) => char.toLowerCase())
    .join("");

  const cleanedStr2 = str2
    .filter((char) => letters.includes(char.toLowerCase()) || Number(char))
    .map((char) => char.toLowerCase())
    .reverse()
    .join("");

  return cleanedStr1 === cleanedStr2;
}

console.log(isStringPalindrome("tab a cat "));
