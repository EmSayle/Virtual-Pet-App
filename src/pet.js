const MAXIMUM_FITNESS = 10;
const MINUMUM_HUNGER = 10;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = MINUMUM_HUNGER;
  this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype.growUp = function(){
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function() {
  if(this.fitness < 6) {
  this.fitness += 4;
} else {
  this.fitness = MAXIMUM_FITNESS;
};
};

Pet.prototype.feed = function () {
  if(this.hunger > 3) {
    this.hunger -= 3;
  } else (this.hunger = MINIMUM_HUNGER);
}

module.exports = Pet;