// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// other cases => return number
// Not a number => return 'not a number' phrase


const output1 = fizzBuzz(3);
const output2 = fizzBuzz(5);
const output3 = fizzBuzz(15);
const output4 = fizzBuzz(7);
const output5 = fizzBuzz(true);
console.log('Oputput1:', output1, 'Oputput2:', output2, 'Oputput3:', output3,'Oputput4:', output4, 'Oputput5:', output5);

function fizzBuzz(input) {
    if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    } else if (typeof input === 'number') {
        return input;
    } else {
        return 'Not a number';
    }
}