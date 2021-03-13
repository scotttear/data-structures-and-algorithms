function findItemByIndexBinary(arr, item) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  console.log(start, middle, end);

  while (arr[middle] !== item && start <= end) {
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);

    console.log(start, middle, end);
  }

  return arr[middle] === item ? middle : -1;
}

const search1 = findItemByIndexBinary([5, 8, 10, 12, 15, 22, 24, 30, 31, 43, 44, 45, 49, 50, 52, 54, 55, 56, 60, 70], 30);
const search2 = findItemByIndexBinary(['aligator', 'cat', 'dog', 'elephant', 'horse', 'lama', 'monkey', 'zebra'], 'monkey');

console.log(search1);
console.log(search2);
