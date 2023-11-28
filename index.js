const movie = {
  title: "Star Wars",
  releaseYear: 1980,
  rating: 10,
  director: "George Lucas",
};
function showProperties(obj) {
  for (const property in obj) {
    if (typeof obj[property] === "string")
      console.log(`${property}: ${obj[property]}`);
  }
}

showProperties(movie);