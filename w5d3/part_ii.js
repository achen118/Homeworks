function titleize(arr, callback) {
  const titleizedArr = arr.map(el => `Mx. ${el} Jingleheimer Schmidt`);
  callback(titleizedArr);
}

function printCallback(arr) {
  arr.forEach(el => console.log(el));
}

// console.log(titleize(["Mary", "Brian", "Leo"], printCallback));

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

// should print "(name) the elephant goes 'phrRRRRRRRRRRR!!!!!!!'"
Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

// should increase the elephant's height by 12 inches
Elephant.prototype.grow = function() {
  this.height += 12;
};

// add a new trick to their existing repertoire
Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

// print out a random trick, e.g. "(name) is (trick)!"
Elephant.prototype.play = function() {
  console.log(`${this.name} is ${this.tricks[Math.floor(Math.random() * this.tricks.length)]}!`)
};

// let oliver = new Elephant('Oliver', 96, ['painting a picture', 'playing the saxophone', 'spinning in a circle']);

// oliver.trumpet();
// oliver.grow();
// console.log(oliver.height);
// oliver.addTrick('blowing a bubble');
// console.log(oliver.tricks);
// oliver.play();

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is trotting by!`)
};

// Elephant.paradeHelper(micah);

// herd.forEach( el => Elephant.paradeHelper(el));

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please";
  console.log(order);
  return function(food) {
    order = `${order.slice(0, -7)} and ${food} please`;
    console.log(order)
  }
}

// let bfastOrder = dinerBreakfast();
// bfastOrder("chocolate chip pancakes");
// bfastOrder("grits");
