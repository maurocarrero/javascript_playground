var expect = require('chai').expect;
var Parent = require('../scripts/inheritance07').Parent;
var Child = require('../scripts/inheritance07').Child;

describe('inheritance 07 - Using a proxy for breaking the link between Parent and Child', function () {

	describe('Parent and Child', function () {

		var mauro;

		beforeEach(function () {
			mauro = new Parent();
		});

		it('should create two persons, a parent and a child', function () {
			expect(mauro.getName()).to.equal('Mauro');
		});

		it('should NOT share the same prototype', function () {
			expect(Parent.prototype).to.not.equal(Child.prototype);
		});

		it('should only inherit properties from the prototype', function () {
			delete mauro.name;
			expect(mauro.getName()).to.equal(undefined);
		});

	});

});
