// S=> single responsibility every function do one thing

function sum(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function Opertaions(x, y) {
  console.log(`in case of sum result will be ${sum(x, y)}`);
  console.log(`in case of multiply result will be ${multiply(x, y)}`);
}

Opertaions(5, 2);
