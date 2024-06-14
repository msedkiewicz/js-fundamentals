function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new Address("Pl. Bankowy", "Warsaw", "01-001");
let address2 = new Address("Pl. Bankowy", "Warsaw", "01-001");
let address3 = address1;

// check individual properties
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

// reference to same object?
function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areEqual(address1, address3));
console.log(areSame(address1, address3));
