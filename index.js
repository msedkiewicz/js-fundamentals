showNumbers(10);

function showNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    if (i % 2 !== 0) {
      console.log(i, "ODD");
    } else {
      console.log(i, "EVEN");
    }
  }
}
