const bestMovies = {
  title: "Star Wars",
  actors: ["Carrie Fisher", "Mark Hamill", "Harison Ford"],
  showActors() {
    const that = this;
    this.actors.forEach(function (actor) {
      console.log(that.title, actor);
    });
  },
};

bestMovies.showActors();

function playVideo(a, b) {
  console.log(this);
}

playVideo.call({ name: "Video One" }, 1, 2); // object
playVideo(); // window
playVideo.apply({ name: "Video One" }, [1, 2]); // object
const fn = playVideo.bind({ name: "Video Two" });
fn();
