function findItemByIndexLinear(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

const search1 = findItemByIndexLinear([5, 8, 2, 40, 4, 70, 4, 3, 7], 4);
const search2 = findItemByIndexLinear([5, 8, 2, 40, 4, 70, 4, 3, 7], 200);
const search3 = findItemByIndexLinear(
  ["my", "other", "strings", "array"],
  "other"
);

console.log(search1);
console.log(search2);
console.log(search3);
