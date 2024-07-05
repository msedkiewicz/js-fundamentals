const bestMovies = {
  title: "Star Wars",
  actors: ["Carrie Fisher", "Mark Hamill", "Harison Ford"],
  showActors() {
    this.actors.forEach((actor) => {
      console.log(this.title, actor);
    }); // arrow function inherits this
  },
};

bestMovies.showActors();

function playVideo(a, b) {
  console.log(this);
}

playVideo.call({ name: "Video One" }, 1, 2); // object
playVideo(); // window
playVideo.apply({ name: "Video One" }, [1, 2]); // object
playVideo.bind({ name: "Video Two" })();
