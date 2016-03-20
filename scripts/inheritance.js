/*-----------------------------*/
/*
 * Animal constructor
 * Base "class"
 *
 * __proto__ is a reference to the prototype of the function from which this object inherits.
 * Animal.constructor is Function
 * Animal.__proto__ is the prototype of the constructor function, the Function.prototype object.
 * Animal.__proto__ is different from Animal.prototype.
 * A constructor function should have Function.prototype as its __proto__.
 *
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
/*
 * Dog constructor
 * Child "class"
 *
 * Not classical:
 * 		Dog.constructor: Function object
 *		Dog.__proto__ : Function prototype
 *		Dog.prototype: object created from Animal.prototype
 *
 * Dog.prototype inherits from Animal.prototype because we assigned
 * an object that inherits from Animal.prototype as its prototype
 *
 **/
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
