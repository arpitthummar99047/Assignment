let arr = [5, 15, 25];

// array map() method

let a = arr.map((value, index, array) => {
  console.log(value, index, array);

  return value + index;
});

console.log(a);
