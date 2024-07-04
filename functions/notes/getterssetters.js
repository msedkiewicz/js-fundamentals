const person = {
  firstName: "Luke",
  lastName: "Skywalker",
  // fullName: function () {},
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};

console.log(person.fullName()); // read only

// getters => access properties
// setters => change (mutate) them

const personEditable = {
  firstName: "Luke",
  lastName: "Skywalker",
  get fullName() {
    return `${personEditable.firstName} ${personEditable.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(personEditable.fullName);
personEditable.fullName = "Leia Organa";
console.log(personEditable);
