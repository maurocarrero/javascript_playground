/**
 *
 * Almost a "Class"
 *
 * 1. Using a Proxy constructor
 * 2. Storing the SuperClass
 * 3. Resetting the constructor pointer, otherwise all Child instances
 * will have Parent as constructor.
 * 4. Borrow the Parent constructor
 */


var inherits = (function () {

	// This way the proxy function is declared once, only change its prototype.
	var Proxy = function () {};
	return function (Derived, Base) {
		Proxy.prototype = Base.prototype;
		Derived.prototype = new Proxy();
		Derived.uber = Base.prototype;

		// Resetting the constructor pointer
		Derived.prototype.constructor = Derived;
	}

}());

/*-----------------------------------------------------------*/

function Parent(name) {
	this.name = name || 'Mauro';
}

Parent.prototype.getName = function () {
	return this.name;
};

Parent.prototype.who = function () {
	return 'I am the Parent function prototype, who method';
};

/*-----------------------------------------------------------*/

function Child() {
	// Borrow the parent constructor
	Parent.apply(this, arguments);
}

inherits(Child, Parent);

Child.prototype.getBaseName = function () {
	return Child.uber.who();
};


module.exports = { Parent: Parent, Child: Child };