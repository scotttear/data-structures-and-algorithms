const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

const isuNumPalindrome = (num) => {
  if (num < 0) {
    return false;
  }

  let reversed = 0;
  let numClone = num;

  while (numClone > 0) {
    const lastDigit = numClone % 10;
    reversed = reversed * 10 + lastDigit;
    numClone = (numClone / 10) | 0;

    console.log(reversed);
    console.log(numClone);
  }

  return num === reversed;
};

// isPalindrome('test');

// isuNumPalindrome(12321);

// Get length of a number with Math
const num = 2385775;

console.log(Math.ceil(Math.log10(num + 1)));
console.log(Math.ceil(Math.log(num + 1) / Math.LN10));
