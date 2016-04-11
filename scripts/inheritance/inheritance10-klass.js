/**
 *
 * Klass
 *
 *	@params parent {Object} The parent from where we want to inherits
 *	@params props {Object} The implementation of the new class as an object literal
 *
 **/

function klass(Parent, props) {

	var Child, F, i;

	// 1.
	// new constructor:
	// a) Borrow the uber constructor if exists
	// b) Apply the constructor in props

	Child = function () {
		if (Child.uber && Child.uber.hasOwnProperty('__construct')) {
			Child.uber.__construct.apply(this, arguments);
		}
		if (Child.prototype.hasOwnProperty('__construct')) {
			Child.prototype.__construct.apply(this, arguments);
		}
	};

	// 2.
	// Inheritance

	Parent = Parent || Object;
	F = function () {};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.uber = Parent.prototype;
	Child.prototype.constructor = Child;

	// 3.
	// add implementation methods to the Child prototype

	for (i in props) {
		if (props.hasOwnProperty(i)) {
			Child.prototype[i] = props[i];
		}
	}

	return Child;
}


module.exports = { klass: klass };