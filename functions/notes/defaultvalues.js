function interest(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000));

// ES 6
function interestTwo(principal, rate = 3.5, years = 5) {
  // give default value for all the parameters that go after first one with value
  return ((principal * rate) / 100) * years;
}

console.log(interestTwo(10000, 3.5, 5));
console.log(interestTwo(10000));
