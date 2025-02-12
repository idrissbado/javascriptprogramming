// String Manipulation Functions
function reverseString() {
  const input = document.getElementById("reverseInput").value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("reverseResult").textContent = reversed;
}

function countCharacters() {
  const input = document.getElementById("countInput").value;
  document.getElementById("countResult").textContent = input.length;
}

function capitalizeWords() {
  const input = document.getElementById("capitalizeInput").value;
  const capitalized = input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  document.getElementById("capitalizeResult").textContent = capitalized;
}

// Array Functions
function findMax() {
  const input = document.getElementById("maxInput").value;
  const numbers = input.split(",").map(Number);
  const max = Math.max(...numbers);
  document.getElementById("maxResult").textContent = max;
}

function findMin() {
  const input = document.getElementById("minInput").value;
  const numbers = input.split(",").map(Number);
  const min = Math.min(...numbers);
  document.getElementById("minResult").textContent = min;
}

function sumArray() {
  const input = document.getElementById("sumInput").value;
  const numbers = input.split(",").map(Number);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  document.getElementById("sumResult").textContent = sum;
}

// Mathematical Functions
function calculateFactorial() {
  const input = parseInt(document.getElementById("factorialInput").value);
  let factorial = 1;
  for (let i = 2; i <= input; i++) {
    factorial *= i;
  }
  document.getElementById("factorialResult").textContent = factorial;
}

function checkPrime() {
  const input = parseInt(document.getElementById("primeInput").value);
  let isPrime = true;
  if (input < 2) isPrime = false;
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      isPrime = false;
      break;
    }
  }
  document.getElementById("primeResult").textContent = isPrime ? "Prime" : "Not Prime";
}

function generateFibonacci() {
  const input = parseInt(document.getElementById("fibonacciInput").value);
  let sequence = [0, 1];
  for (let i = 2; i < input; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  document.getElementById("fibonacciResult").textContent = sequence.slice(0, input).join(", ");
}