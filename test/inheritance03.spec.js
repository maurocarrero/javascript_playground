var expect = require('chai').expect;
var Parent = require('../scripts/inheritance03').Parent;
var Child = require('../scripts/inheritance03').Child;

describe('inheritance 03 - Inherit: Parent and Child', function () {

	describe('constructors', function () {

		it('Parent constructor should be Function', function () {
			expect(Parent.constructor).to.equal(Function);
		});

		it('Child constructor should be Function', function () {
			expect(Child.constructor).to.equal(Function);
		});
	});

	describe('prototypes', function () {

		it('Parent prototype should be Function.prototype', function () {
			expect(Parent.prototype).to.be.an.object;
			expect(Parent.prototype).to.have.property('getName');
		});

		it('Child prototype should be an instance of Parent', function () {
			expect(Child.prototype).to.be.an.instanceof(Parent);
			expect(Child.prototype.__proto__).to.equal(Parent.prototype);
		});

	});

	describe('the children', function () {

		var nacho;

		beforeEach(function () {
			nacho = new Child();
		});

		it('nacho should provide his name ("Mauro")', function () {
			expect(typeof nacho.getName).to.equal('function');
			expect(nacho.getName()).to.equal('Mauro');
		});

		it('nacho constructor should be Child but it is Parent, because we did not change the constructor', function () {
			expect(nacho.constructor).to.equal(Parent);
		});

		it('nacho __proto__ should be Child.prototype, so an instance of Parent', function () {
			expect(nacho.__proto__).to.equal(Child.prototype);
			expect(nacho.__proto__).to.be.an.instanceof(Parent);
		});

		it('nacho __proto__ should have the getName method and the name property of the parent', function () {
			expect(nacho.__proto__).to.have.property('getName');
			expect(nacho.__proto__).to.have.property('name');
			expect(nacho.__proto__.getName()).to.equal('Mauro');
		});

		it('should change the name for nacho: "Ignacio"', function () {
			nacho.name = 'Ignacio';
			expect(nacho.getName()).to.equal('Ignacio');
		});

	});

});
