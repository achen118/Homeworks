function madLib(verb, adjective, noun) {
  return `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`;
}

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

function fizzBuzz(arr) {
  let newArr = []
  arr.forEach((el) => {
    if (el % 3 === 0 || el % 5 === 0) {
      newArr.push(el);
    }
  })
  return newArr;
}

function isPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function firstNPrimes(n) {
  let primeArr = []
  let i = 2;
  while (primeArr.length < n) {
    if (isPrime(i)) {
        primeArr.push(i);
    }
    i++;
  }
  return primeArr;
}

function sumofNPrimes(n) {
  let sum = 0;
  firstNPrimes(n).forEach((el) => {
    sum += el;
  })
  return sum;
}
