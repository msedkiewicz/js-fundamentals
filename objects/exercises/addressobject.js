let address = {
  street: "Pl. Bankowy",
  city: "Warsaw",
  zipCode: "01-001",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);
