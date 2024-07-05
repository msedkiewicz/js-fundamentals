// method - > obj
// function -> global object (window, global)

const video = {
  title: "Star Wars",
  play() {
    console.log(this); // references to object itself
  },
};

video.play();

video.stop = function () {
  console.log(this); // references to object itself
};

video.stop();

function playVideo() {
  console.log(this);
}

playVideo(); // shows window object

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("Lorem Ipsum"); // this reference a new empty object.
// console.log(v);
const x = new Video("X archive");

const bestMovies = {
  title: "Star Wars",
  actors: ["Carrie Fisher", "Mark Hamill", "Harison Ford"],
  showActors() {
    // this.actors.forEach(function (tag) {
    //   console.log(this.title, tag); // this references to window object - it's a regular function
    // });
    this.actors.forEach(function (actor) {
      console.log(this.title, actor);
    }, this); // make this refference to object
  },
};

bestMovies.showActors();
