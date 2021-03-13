const loopExample = arr => {

  // let itemOne = arr[0];
  // let itemtwo = arr[1];

  // arr[0] = itemtwo;
  // arr[1] = itemOne;

  for (let i = 0; i < arr.length; i++) {
    console.log('first loop i:', arr[i]);

    for (let j = 0; j < arr.length; j++) {
      console.log('inner loop j:', arr[j]);

      if (arr[i] > arr[j]) {
        console.log('higher than do nothing');
      }
    }
  }

  console.log('orignal', arr);

  return arr;
};

loopExample([1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
