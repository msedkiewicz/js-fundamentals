// Speed limit - 70
// every 5 km over - 1 point
// if driver gets more than 12 points - driver licence is suspended

console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(75));
console.log(checkSpeed(74));
console.log(checkSpeed(98));
console.log(checkSpeed(150));
console.log(checkSpeed(130));

function checkSpeed(speed) {
  if (typeof speed === "number") {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const penaltyPoints = 12;
    if (speed <= speedLimit) {
      return speed;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points === 0) {
      return speed;
    } else if (points > 0 && points < penaltyPoints) {
      return `Points: ${points}`;
    } else {
      return "License suspended";
    }
  }
}
