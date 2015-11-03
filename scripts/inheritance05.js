/**
 * Combining Patterns:
 *
 * 1. Assigning an instance of the Parent as Child's prototype
 * 2. Borrow the Parent constructor for building each Child instance
 *
 */

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
Child.prototype = new Parent();

module.exports = { Parent: Parent, Child: Child };