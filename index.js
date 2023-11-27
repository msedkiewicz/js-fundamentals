console.log(isLandscape(100,200));
console.log(isLandscape(200,100));
console.log(isLandscape(200,200));

function isLandscape(width, height) {
  return (width > height); // function already returns true or false
}