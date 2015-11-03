/**
 *
 * Almost a "Class"
 *
 * 1. Using a Proxy constructor
 * 2. Storing the SuperClass
 * 3. Resetting the constructor pointer, otherwise all Child instances
 * will have Parent as constructor.
 */

function inherits(Derived, Base) {

	// Using a proxy function to break the link between prototypes
	var Proxy = function () {};
	Proxy.prototype = Base.prototype;
	Derived.prototype = new Proxy();

	// Saving the Uber (Base) function
	Derived.uber = Base.prototype;

	// Resetting the constructor pointer
	Derived.prototype.constructor = Derived;

}

/*-----------------------------------------------------------*/

function Parent(name) {
	this.name = name || 'Mauro';
}

Parent.prototype.getName = function () {
	return this.name;
};

/*-----------------------------------------------------------*/

function Child() {
	Parent.apply(this, arguments);
}

inherits(Child, Parent);

module.exports = { Parent: Parent, Child: Child };