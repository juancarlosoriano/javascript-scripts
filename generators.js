// Simple Natural Number Generator
function* generateNaturalNumbers() {
  let num = 1;
  while (true) {
    yield num++;
  }
}

const generateNum = generateNaturalNumbers();

// Controlled Fibonacci Generator
function* fibonnaciNumbers() {
  let prev = 0;
  let curr = 0;
  let next = 1;
  let n = 0;
  while (n < 10) {
    yield curr;
    prev = curr;
    curr = next;
    next = prev + curr;
    n++;
  }
}

const generateFibonacci = fibonnaciNumbers();
//console.log([...generateFibonacci]); // Spread Operator to return an array of values

// Infinite Fibonacci Generator
function* fibonnaciNumbersInf() {
  let prev = 0;
  let curr = 0;
  let next = 1;
  while (true) {
    yield curr;
    prev = curr;
    curr = next;
    next = prev + curr;
  }
}

const generateFibonacciInf = fibonnaciNumbersInf();

// for (let i = 0; i < 14; i++) {
//   console.log(generateFibonacciInf.next().value);
// }

// Create a generator that will yield powers of
// x from 0 to specified number of terms
function generatePowersOfX(x, numberOfTerms) {
  return function*() {
    let power = 0;
    while (power <= numberOfTerms) {
      yield x ** power;
      power++;
    }
  };
}

const powersOfThree = generatePowersOfX(3, 5)();
//console.log([...powersOfThree]);

// Store values passed from next() in a variable
function* generateAnimals() {
  const animals = ["Dog", "Cat", "Rabbit"];
  let arr = [];
  for (let animal of animals) {
    const nextValue = yield animal;
    arr.push(nextValue);
  }
  yield arr;
}

const generateSomeAnimals = generateAnimals();
// generateSomeAnimals.next();
// generateSomeAnimals.next("First"); // The second .next() variable will be stored
// generateSomeAnimals.next("Second");
// console.log(generateSomeAnimals.next("Third")); // Outputs { value: [ 'First', 'Second', 'Third' ], done: false }
// console.log(generateSomeAnimals.next()); // Value undefined but done = true

// Return functions using yield
function* generatePrintLines() {
  const arr = [1, 2, 3];

  function display(value) {
    console.log(value);
  }
  for (let i in arr) {
    // Yield a function call
    yield console.log("I am printing a line");
    yield display(i);
  }
}

const generateLine = generatePrintLines();

// generateLine.next(); // Outputs I am printing a line
// generateLine.next(); // Outputs 0
// generateLine.next(); // Outputs I am printing a line
// generateLine.next(); // Outputs 1
// generateLine.next(); // Outputs I am printing a line
// generateLine.next(); // Outputs 2

// Generate cyclic values
function* generateAngles() {
  const angles = ["0", "pi/4", "pi/2", "3pi/4"];
  while (true) {
    // Will loop forever but pauses after every yield call
    for (let angle of angles) {
      yield angle;
    }
  }
}

const generateQuarterPis = generateAngles();
// console.log(generateQuarterPis.next()); // { value: '0', done: false }
// console.log(generateQuarterPis.next()); // { value: 'pi/4', done: false }
// console.log(generateQuarterPis.next()); // { value: 'pi/2', done: false }
// console.log(generateQuarterPis.next()); // { value: '3pi/4', done: false }
// console.log(generateQuarterPis.next()); // { value: '0', done: false }
// console.log(generateQuarterPis.next());
// console.log(generateQuarterPis.next());
// console.log(generateQuarterPis.next());
// console.log(generateQuarterPis.next()); // { value: '0', done: false }

// Use yield* to delegate yield value to another generator
function* generatePrimaryColors() {
  const primaryColors = ["Red", "Green", "Blue"];

  for (let color of primaryColors) {
    yield* generateSecondaryColors(color);
  }
}

function* generateSecondaryColors(primaryColor) {
  const prefixes = ["Light", "Dark"];

  for (let prefix of prefixes) {
    yield console.log(`${prefix} ${primaryColor}`);
  }
}

const generateColor = generatePrimaryColors();

// generateColor.next(); // Outputs Light Red
// generateColor.next(); // Outputs Dark Red
// generateColor.next(); // Outputs Light Green
// generateColor.next(); // Outputs Dark Green
// generateColor.next(); // Outputs Light Blue
// generateColor.next(); // Outputs Dark Blue

// Yield* working with iterables

function* sampleGenerator1() {
  yield `This is a template literal`;
  // yield * will work on every single element of an iterable
  yield* "HELLO";
  yield* [1, 2];
}

const sampleGen = sampleGenerator1();
console.log(sampleGen.next()); // Outputs This is a template literal
console.log(sampleGen.next()); // Outputs H
console.log(sampleGen.next()); // Outputs E
console.log(sampleGen.next()); // Outputs L
console.log(sampleGen.next()); // Outputs L
console.log(sampleGen.next()); // Outputs O
console.log(sampleGen.next()); // Outputs 1
console.log(sampleGen.next()); // Outputs 2
