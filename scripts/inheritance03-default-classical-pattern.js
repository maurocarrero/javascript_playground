/**
 * The classical Pattern - The Default Pattern
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
 * Inherit function
 *
 * It is important that an instance of the constructor is
 * assigned to the prototype and not the constructor itself.
 *
 * Drawbacks:
 * 1. It inherits also the properties of the constructor,
 * not only the prototype.
 * 2. Cannot use parameters in the Child constructor
 *
 * Reusable members should be added to the prototype
 *
 * @param Derived
 * @param Base
 */
function inherit(Derived, Base) {
	Derived.prototype = new Base();
}

/*-----------------------------------------------------------*/

function Child() {}

inherit(Child, Parent);

var nacho = new Child();

nacho.getName();

module.exports = { Parent: Parent, Child: Child };