// Q1

// let number = [1, 2, 3, 4, 5, 6, 7];

// let userinpt = prompt("enter a number");

// userinpt = Number.parseInt(userinpt);

// number.push(userinpt);

// console.log(number);

// Q2

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let a;

// do {
//   a = prompt("enter a number");

//   a = Number.parseInt(a);

//   arr.push(a);
// } while (a != 0);

// console.log(arr);

//Q3

// let arr = [5, 10, 20, 15, 12, 13, 40, 50, 70, 71];

// let arr2 = arr.filter((x) => {
//   return x % 10 == 0;
// });

// console.log(arr2);

//Q4

// let arr = [5, 10, 20, 15, 12, 13, 40, 50, 70, 71];

// let arr2 = arr.map((x) => {
//   return x * x;
// });

// console.log(arr2);

// Q5

// let arr = [1, 2, 3, 4];

// let arr2 = arr.reduce((a1, a2) => {
//   return a1 * a2;
// });

// console.log(arr2);

// Extra example

let rendomnumber = Math.floor(Math.random() * 101);

console.log(rendomnumber);

let num = Number.parseInt(prompt("Enter the number"));

let counter = 1;
while (counter <= num) {
  console.log(counter);
  counter = counter + 1;
}

while (rendomnumber <= num) {
  num = Number.parseInt(prompt("gass the smoller number"));
}

while (rendomnumber >= num) {
  num = Number.parseInt(prompt("gass the bigger number"));
}

if (rendomnumber == num) {
  console.log("This is write anser");
}
