let a = parseInt(prompt('Enter your first number: '));
let b = prompt('Enter an operator (+, -, *, or /): ');
let c = parseInt(prompt('Enter your second number: '));

if (b === '+') {
  console.log(a + c);
} else if (b === '-') {
  console.log(a - c);
} else if (b === '*') {
  console.log(a * c);
} else if (b === '/') {
  console.log(a / c);
} else {
  console.log('Please enter a valid operator.');
}
