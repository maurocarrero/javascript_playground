require('./sugar');

/*-----------------------------*/
/*
 * Animal constructor
 * Base "class"
 **/
function Animal(spec) {
	this.specie = spec.specie;
	this.family = spec.family;
}

Animal.prototype.getSpecie = function () {
	return this.specie;
};
Animal.prototype.getFamily = function () {
	return this.family;
};

/*-----------------------------*/

function Dog(spec) {
	Animal.call(this, spec);
	this.name = spec.name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.getName = function () {
	return this.name;
};

module.exports = { Animal: Animal, Dog: Dog };
