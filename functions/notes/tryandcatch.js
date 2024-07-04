const personEditable = {
  firstName: "Luke",
  lastName: "Skywalker",
  get fullName() {
    return `${personEditable.firstName} ${personEditable.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value is not a string.");
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(personEditable.fullName);

try {
  personEditable.fullName = "";
} catch (e) {
  alert(e);
}

console.log(personEditable);
