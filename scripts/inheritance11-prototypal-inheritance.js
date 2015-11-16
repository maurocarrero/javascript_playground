/**
 *
 * Prototypal Inheritance Pattern
 *
 * objects that inherits from objects
 *
 * The "object" method
 *
 * ECMAScript 5 Object.create method
 *
 **/

function object(obj) {
	var F = function () {};
	F.prototype = obj;
	return new F();
}

// object to inherit from
var parent = {
	name: 'Papá'
};

// the new object
var child = object(parent);

module.exports = { object: object };