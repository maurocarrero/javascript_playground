var expect = require('chai').expect;
var Parent = require('../scripts/inheritance05').Parent;
var Child = require('../scripts/inheritance05').Child;

describe('inheritance 05 - Applying and linking', function () {

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

		it('nacho.constructor should incorrectly be Parent', function () {
			expect(nacho.constructor).to.equal(Parent);
		});

		it('nacho.name should emerge from the prototype if we delete the current one', function () {
			delete nacho.name;
			expect(nacho.getName()).to.equal('Mauro');
		});

	});

});
