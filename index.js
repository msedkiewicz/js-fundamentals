// Speed limit - 70
// every 5 km over - 1 point
// if driver gets more than 12 points - driver licence is suspended

console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(75));
console.log(checkSpeed(74));
console.log(checkSpeed(98));
console.log(checkSpeed(150));
function checkSpeed(speed) {
    if (typeof speed === 'number') {
        if (speed <= 70) {
            return speed;
        } else if (speed > 70) {
            const points = Math.floor((speed - 70) / 5);
            if (points === 0) {
                return speed;
            } else if (points > 0 && points < 12) {
                return points;
            } else {
                return 'License suspended';
            }
        }
    }
}