// Constructor function

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address = new Address("Pl. Bankowy", "Warsaw", "01-001");

console.log(address);
