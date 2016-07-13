// Business Logic

// Problem: Design a method for moving a player object through a 2D space, serving text to page based on: player location, player health and hazard checking.

// Sample Attribute Generator to Define Initial Player Attributes. Skip if no time.
var attributeGen = function() {
  return 1 + Math.floor(Math.random() * 4);
}

// Sample Skill Check function to test against hazard.
var skillCheck = function() {
  return 1 + Math.floor(Math.random() * 10);
}

var hazardCheck = function() {
  return 1 + Math.floor(Math.random() * 20);
}

//Using Constructor
function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll = function () {
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

var dice4 = new Dice(4);
var dice6 = new Dice(6);
var dice10 = new Dice(10);

// Adventurer Constructor, defines the player variable (below).
function Adventurer(name, xCord, yCord, health, str, dex, wit) {
  this.name = name;
  this.xCord = xCord;
  this.yCord = yCord;
  this.health = health;
  this.str = str; // if time
  this.dex = dex; // if time
  this.wit = wit; // if time
}

// Level Constructor
function Level() {
  this.hazards = hazards;
  this.xCords = [];
  this.yCords = [];
}

// Monster Constructor
function Monster() {

}


// Sample Hazard.
var pitTrap = function() {
  if ( xCord === 5 && yCord === 2 ) {
    if ((skillCheck() + player.dex) <= 4) { //not sure if this will pass, probably best as a prototype.
      alert("You have fallen into a pit trap, lose 1 health!");
      wound();
    } else alert("The ground begins to crumble beneath your feet, but you leap to safety!");
  }
}

// Sample prototype to wound player. Alert placeholder for ending game.
Adventurer.prototype.wound = function() {
  this.health -= 1;
  if (this.health === 0) {
    alert("Game Over");
  }
}

// Initial player state. inputtedName will require jQuery, if testing in console pass a string.
var player = new Adventurer("inputtedName", 0, 0, 10, attributeGen(), attributeGen(), attributeGen());

// Check for hazard. Should be a function in order to create and destroy move on each button press for direction. Prototype if we want to send to player the direction travelled on key or mouse press.
var hazardCheck() = function {
  if (move >= 15 ) {
    alert("Nothing Happens you move " + this.direction ) //
  } else if (move >= 10) {
    pitTrap();
  }
}

// movement

Adventurer.prototype.north = function() {
  this.yCord += 1;
  hazardCheck(); // Check for hazard on each movement.
};

Adventurer.prototype.south = function() {
  this.yCord -= 1;
};

Adventurer.prototype.east = function() {
  this.xCord += 1;
};

Adventurer.prototype.west = function() {
  this.xCord -= 1;
};
