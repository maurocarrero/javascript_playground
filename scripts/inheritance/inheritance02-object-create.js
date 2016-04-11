/*
 * Inheritance from other object
 * No "class".
 * Object.create - NO constructors
 **/

var animal = {};

animal.getSpecie = function () {
	return this.specie;
};
animal.getFamily = function () {
	return this.family;
};

/*-----------------------------*/

var dog = Object.create(animal);

dog.getName = function () {
	return this.name;
};

module.exports = { animal: animal, dog: dog };
