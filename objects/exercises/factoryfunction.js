// Factory function

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let address = createAddress("Pl. Bankowy", "Warsaw", "01-001");
