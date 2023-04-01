let arr = [1, 5, 2, 4, 6, 3, 8, 7, 1];

let reduc_fun = (a, b) => {
  return a + b;
};

let newarr = arr.reduce(reduc_fun);

console.log(newarr);
