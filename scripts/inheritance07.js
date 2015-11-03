/**
 * Using a temporary constructor
 *
 * An empty function is used as proxy between Parent and Child.
 * It breaks the direct link between its prototypea and avoids
 * to inherits properties from the constructor.
 *
 */

function inherits(Derived, Base) {
	var Proxy = function () {};
	Proxy.prototype = Base.prototype;
	Derived.prototype = new Proxy(); // The Child's prototype is an instance of the Proxy function.
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