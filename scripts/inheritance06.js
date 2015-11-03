/**
 * Sharing the same prototype
 *
 * Drawback:
 * 1. Changing the prototype of any child affects the Parent's
 * prototype as well.
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
Child.prototype = Parent.prototype;

module.exports = { Parent: Parent, Child: Child };