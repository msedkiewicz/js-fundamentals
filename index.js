// Prime and Composite numbers - composite has many factors, prime only 1 and prime number itself

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}

showPrimes(20);
