// TLE



function longestPalindromicSubstring(s) {
  let subArrays = [];
  let longestPalindromicArr = [];

  const splittedStr = s.split("");

  for (let start = 0; start < splittedStr.length; start++) {
    for (let end = start; end < splittedStr.length; end++) {
      const subArray = splittedStr.slice(start, end + 1);
      subArrays.push(subArray);
    }
  }

  for (const arr of subArrays) {
    const reversed = [...arr].reverse().join("");

    const lengthOfArr = arr.length;

    if (reversed === arr.join("")) {
      if (lengthOfArr > longestPalindromicArr.length) {
        longestPalindromicArr = arr;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }

  return longestPalindromicArr.join("");
}

console.log(longestPalindromicSubstring("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
