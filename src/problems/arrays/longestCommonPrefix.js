// weird algo

function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0];

  if (strs.includes("")) return "";
  let notCommon = strs.every((str) => {
    console.log(str);
    return strs[0][0] === str[0];
  });
  if (!notCommon) return "";

  let prefixFrequency = {};
  for (let i = 0; i < strs.length; i++) {
    const currentStr = strs[i];

    for (let j = 1; j <= currentStr.length; j++) {
      const prefix = currentStr.slice(0, j);

      if (prefixFrequency[prefix]) {
        prefixFrequency[prefix] += 1;
      } else {
        prefixFrequency[prefix] = 1;
      }
    }
  }
  const sortedPrefixes = Object.entries(prefixFrequency).sort(
    (a, b) => b[1] - a[1] && a[0].length - b[0].length,
  );

  let firstPrefix = sortedPrefixes[0][0];

  const allSame = sortedPrefixes.every((prefix) => prefix[0] === firstPrefix);
  const allOnes = sortedPrefixes.every((prefix) => prefix[1] === 1);

  if (!allSame && allOnes) return "";

  let longestCount = 0;
  let longestPrefix = "";

  for (let i = 0; i < sortedPrefixes.length; i++) {
    const currentPrefix = sortedPrefixes[i];

    if (currentPrefix[1] > longestCount) {
      longestCount = currentPrefix[1];
      longestPrefix = currentPrefix[0];
    } else if (
      currentPrefix[1] === longestCount &&
      currentPrefix[0].length > longestPrefix.length
    ) {
      longestPrefix = currentPrefix[0];
    }
  }
  return longestPrefix;
}

console.log(longestCommonPrefix(["reflower", "flow", "flight"]));
