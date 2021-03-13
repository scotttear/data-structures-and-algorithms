const fixData = arr => {
  let fixedArr = [];
  const arrayMaxNum = Math.max(...arr);

  // Fix one comparing index
  for (let i = 0; i < arrayMaxNum; i++) {
    if (arr[i] !== i + 1) {
      fixedArr.push(i + 1);
    } else {
      fixedArr.push(arr[i]);
    }
  }

  // Fix two compare values
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i - 1] && arr[i] - arr[i - 1] !== 1) {
  //     fixedArr.push(arr[i], arr[i] - 1);
  //   } else {
  //     fixedArr.push(arr[i]);
  //   }
  // }

  console.log('orignal', arr);
  console.log('fixed', fixedArr);

  return fixedArr;
};

const data = [2, 3, 5, 6, 7, 10, 11, 12, 14, 15];

fixData(data);
