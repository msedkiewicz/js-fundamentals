// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// 0 = 00000000

console.log(1 | 2); // BitWise OR - returns 3
console.log(1 & 2); // BitWise AND - returns 0

// Usecase for BitWise operators - giving permissions (Read / Write / Execute)

// 00000100 - Read
// 00000010 - Write
// 00000001 - Execute
// 00000110 - Read and Write

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission; // add permissions
console.log(myPermission); // 6 -> read + write

let message = (myPermission & readPermission) ? 'yes' : 'no'; // check permissions
console.log(message); // yes