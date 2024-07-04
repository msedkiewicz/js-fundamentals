const movies = [
  { title: "Star Wars: The Acolyte", year: 2024, rating: 4.7 },
  { title: "Star Wars: Ashoka", year: 2023, rating: 6 },
  { title: "Star Wars: Skeleton Crew", year: 2024, rating: 0 },
  { title: "Andor", year: 2024, rating: 7.9 },
  { title: "Obi Wan Kenobi", year: 2022, rating: 6.1 },
  { title: "The Mandalorian", year: 2019, rating: 8.1 },
];

const titles = movies
  .filter((m) => m.year === 2024 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);
