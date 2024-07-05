const message1 = "hi";

function hello() {
  const message2 = "hello";
  if (true) {
    const another = "bye";
  }
  console.log(another); // error - accesible only in block if(true)
}
hello();

console.log(message1);
console.log(message2); // error - accesible only in block

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // error - accesible only in block

const color = "red";
function start() {
  const message = "hello";
  const color = "green";
  console.log(message, color);
}

function stop() {
  const message = "bye";
  console.log(message, color);
}

start();
stop();
