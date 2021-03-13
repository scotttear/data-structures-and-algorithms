function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.replace(/[^\w]/g, "").toLowerCase();
  str2 = str2.replace(/[^\w]/g, "").toLowerCase();

  const freqObj1 = {};
  const freqObj2 = {};

  for (const letter of str1) {
    freqObj1[letter] = freqObj1[letter] + 1 || 1;
  }

  for (const letter of str2) {
    freqObj2[letter] = freqObj2[letter] + 1 || 1;
  }

  console.log(freqObj1);
  console.log(freqObj2);

  for (let char in freqObj1) {
    if (freqObj1[char] !== freqObj2[char]) {
      return false;
    }
  }

  return true;

  // Also works with Object keys and every methods
  // return Object.keys(freqObj1).every(key => freqObj2.hasOwnProperty(key) && freqObj2[key] === freqObj1[key]);
}

isAnagram("radar", "darra");
