function palindromeIndex(s) {

  const stringReversed = s.split("").reverse().join("");

  // check if the string is already a palindrome
  // if it is, return -1
  if (stringReversed === s) {
    return -1;
  } else {
    // loop through the string and check if the string is a palindrome without the letter(s[i])
    // by comparing the original string with the reversed version
    // if it's equal, it means that the letter(s[i]) is the right letter to remove and return the letter's index (i)

    for (let i = 1; i < s.length; i++) {
      const newString = s.slice(0, i) + s.slice(i + 1);
      const newStringReversed = newString.split("").reverse().join("");

      if (newString === newStringReversed) {
        return i;
      }
    }
  }
}
