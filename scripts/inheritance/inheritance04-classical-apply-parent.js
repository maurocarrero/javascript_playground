/**
 * The classical Pattern - Apply the parent
 * Rent-a-constructor (Stoyan Stefanov)
 */

/*-----------------------------------------------------------*/

function Parent(name) {
	this.name = name || 'Mauro';
}

Parent.prototype.getName = function () {
	return this.name;
};

/*-----------------------------------------------------------*/

/**
 * Child constructor
 *
 * Now the Child constructor function uses the Parent constructor
 * and applies it with the instance of Child as this, and the
 * given arguments to this instance.
 *
 * Drawbacks:
 * 1. Does not inherit anything from the prototype, there's
 * no link with the used constructor/s.
 *
 * @constructor
 */
function Child() {
	Parent.apply(this, arguments);
}

/*-----------------------------------------------------------*/

/**
 * Multiple inheritance
 */

/*-----------------------------------------------------------*/

function Cat() {
	this.legs = 4;
	this.say = function () {
		return 'Meaow';
	};
}

function Bird() {
	this.wings = 2;
	this.fly = true;
}

/*-----------------------------------------------------------*/

/**
 * CatWings
 *
 * Multiple inheritance/copy of parent's own members
 *
 * @constructor
 */
function CatWings() {
	Cat.apply(this);
	Bird.apply(this);
}


module.exports = { Parent: Parent, Child: Child, CatWings: CatWings, Cat: Cat, Bird: Bird };