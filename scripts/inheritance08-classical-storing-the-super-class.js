/**
 *
 * Almost a "Class"
 *
 * 1. Using a Proxy constructor
 * 2. Storing the SuperClass
 */

function inherits(Derived, Base) {

	// Using a proxy function to break the link between prototypes
	var Proxy = function () {};
	Proxy.prototype = Base.prototype;
	Derived.prototype = new Proxy();

	// Saving the Uber (Base) function
	Derived.uber = Base.prototype;

}

/*-----------------------------------------------------------*/

function Parent(name) {
	this.name = name || 'Mauro';
}

Parent.prototype.getName = function () {
	return this.name;
};

/*-----------------------------------------------------------*/

function Child() {}

inherits(Child, Parent);

module.exports = { Parent: Parent, Child: Child };