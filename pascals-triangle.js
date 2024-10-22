//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (rowNum) => {
  let result = [[1], [1, 1]];

  for (let i = 2; i < rowNum; i++) {
    let arr = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr.push(1);
      } else if (j == 1 || j == i - 1) {
        arr.push(i);
      } else {
        let x = result[i - 1][j];
        let y = result[i - 1][j - 1];
        console.log("x :" + x);
        console.log("y :" + y);
        arr.push(x + y);
      }
    }

    result.push(arr);
  }
  if (rowNum <= 2) {
    return result.slice(0, rowNum);
  } else {
    return result;
  }
};
