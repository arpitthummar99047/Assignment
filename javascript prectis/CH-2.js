// Chapter-2

// Q1

let age = prompt("What is your age");

if (age > 10 && age < 20) {
  alert("Your age lies between 10 or 20");
} else {
  alert("Your age dosent lies between 10 or 20");
}

// Q2

let Name = prompt("Enter your Name");

let RollNo = prompt("Enter your RollNo");

switch (RollNo) {
  case "1":
    alert(`Hi ${Name} You are pass With `);

    break;
  case "2":
    alert(`Hi ${Name} You are pass With `);

    break;
  case "3":
    alert(`Hi ${Name} You are pass With `);

    break;
  case "4":
    alert(`Hi ${Name} You are pass With `);

    break;
  case "5":
    alert(`Hi ${Name} You are pass With `);

    break;

  default:
    alert(`This ${Name} Data not found`);
    break;
}

// Q3

let num = prompt("Enter the number");

num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
  alert("This number is devided by 2 and 3");
} else {
  alert("This number is not devided by 2 and 3");
}

// Q4

let nume = prompt("Enter the number");

nume = Number.parseInt(nume);

if (nume % 2 == 0 || nume % 3 == 0) {
  alert("This number is devided by 2 and 3");
} else {
  alert("This number is not devided by 2 and 3");
}

// Q5

let age1 = prompt("Enter your age");

let a = age1 > 18 ? "You can drive" : "You can not drive";

console.log(a);
