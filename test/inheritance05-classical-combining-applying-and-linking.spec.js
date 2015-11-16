var expect = require('chai').expect;
var Parent = require('../scripts/inheritance05-classical-combining-applying-and-linking').Parent;
var Child = require('../scripts/inheritance05-classical-combining-applying-and-linking').Child;

describe('inheritance 05 - Combining: applying and linking', function () {

	describe('Parent and Child', function () {

		var nacho;

		beforeEach(function () {
			nacho = new Child('Ignacio');
		});

		it('should use the given parameter', function () {
			expect(nacho.name).to.equal('Ignacio');
		});

		it('Child should have a link to Parent\'s prototype', function () {
			expect(nacho.getName()).to.equal('Ignacio');
		});

		it('Flaw: nacho.constructor should incorrectly be Parent', function () {
			expect(nacho.constructor).to.equal(Parent);
		});

		it('Flaw: the default value of the parent property, Parent.name should emerge from the prototype if we delete the current nacho.name property', function () {
			delete nacho.name;
			expect(nacho.getName()).to.equal('Mauro');
		});

	});

});
