var expect = require('chai').expect;
var Parent = require('../../scripts/inheritance/inheritance06-sharing-prototype').Parent;
var Child = require('../../scripts/inheritance/inheritance06-sharing-prototype').Child;

describe('inheritance 06 - Sharing the prototype', function () {

	describe('Parent and Child', function () {

		var nacho, mauro;

		beforeEach(function () {
			mauro = new Parent();
			nacho = new Child('Ignacio');
		});

		it('should create two persons, a parent and a child', function () {
			expect(mauro.getName()).to.equal('Mauro');
			expect(nacho.getName()).to.equal('Ignacio');
		});

		it('should share the same prototype', function () {
			expect(Parent.prototype).to.equal(Child.prototype);
		});

		it('should affect the Parent prototype if Child.prototype changes', function () {
			Child.prototype.getName = function () {
				return this.name.split('').reverse().join('');
			};
			expect(mauro.getName()).to.equal('oruaM');
		});

	});

});
