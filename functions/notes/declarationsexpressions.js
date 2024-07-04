//Function declaration

function walk() {
  console.log("walk");
}

// Anonymous Function expression

const run = function () {
  console.log("run");
};

// Named Function expression

const crawl = function crawl() {
  console.log("crawl");
};

let move = run;
walk();
run();
crawl();
move();
