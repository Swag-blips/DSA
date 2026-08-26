const letters = "abcdefghijklmnopqrstuvwxyz";
function isStringPalindrome(str) {
  const str1 = str.split("").filter((el) => el.trim() !== "");
  const str2 = str.split("").filter((el) => el.trim() !== "");

  const cleanedStr1 = str1
    .filter(
      (char) =>
        letters.includes(char.toLowerCase()) ||
        Number(char) === 0 ||
        Number(char),
    )
    .map((char) => char.toLowerCase())
    .join("");

  const cleanedStr2 = str2
    .filter(
      (char) =>
        letters.includes(char.toLowerCase()) ||
        Number(char.trim()) === 0 ||
        Number(char),
    )
    .map((char) => char.toLowerCase())
    .reverse()
    .join("");

  return cleanedStr1 === cleanedStr2;
}

console.log(isStringPalindrome("A man, a plan, a canal: Panama"));
