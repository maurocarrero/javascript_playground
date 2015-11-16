var expect = require('chai').expect;
var Parent = require('../scripts/inheritance07-classical-temporary-constructor').Parent;
var Child = require('../scripts/inheritance07-classical-temporary-constructor').Child;

describe('inheritance 07 - Using a proxy for breaking the link between Parent and Child', function () {

	describe('Parent and Child - Temporary constructor', function () {

		describe('prototype', function () {
			it('Parent prototype should be Function.prototype and have the methods defined', function () {
				expect(Child.prototype).to.not.equal(Function.prototype);
				expect(Parent.prototype).to.be.an.object;
				expect(Parent.prototype).to.have.property('getName');
			});

			it('Child prototype should have the Parent methods defined', function () {
				expect(Child.prototype).to.not.equal(Function.prototype);
				expect(Child.prototype).to.be.an.object;
				expect(Child.prototype).to.have.property('getName');
			});

			it('Parent and Child should NOT share the same prototype', function () {
				expect(Parent.prototype).to.not.equal(Child.prototype);
			});
		});


		describe('__proto__', function () {
			it('Parent.__proto__ should be Function', function () {
				expect(Parent.__proto__).to.equal(Function.prototype);
			});

			it('Child.__proto__ should be Function', function () {
				expect(Child.__proto__).to.equal(Function.prototype);
				expect(Child.__proto__).to.equal(Function.prototype);
			});
		});

		describe('constructor', function () {
			it('Parent constructor should be Function', function () {
				expect(Parent.constructor).to.equal(Function);
			});

			it('FLAW: Child constructor should be Parent but is Function', function () {
				expect(Child.constructor).to.equal(Function);
			});
		});

	});

	describe('The children', function () {

		var mauro, lucas;

		beforeEach(function () {
			mauro = new Parent();
			lucas = new Child('Lucas');
		});

		it('lucas should not have a name property defined', function () {
			expect(lucas.getName()).to.be.undefined;
		});

		it('mauro should have his name defined', function () {
			expect(mauro.getName()).to.equal('Mauro');
		});

		it('should only inherit properties from the prototype', function () {
			lucas.name = 'Lucas';
			expect(lucas.getName()).to.equal('Lucas');
			delete lucas.name;
			expect(lucas.getName()).to.equal(undefined);
		});

		describe('prototype', function () {
			it('any instance should have an undefined prototype', function () {
				expect(mauro.prototype).to.be.undefined;
				expect(lucas.prototype).to.be.undefined;
			});
		});

		describe('__proto__', function () {
			it('mauro.__proto__ should be Parent.prototype', function () {
				expect(mauro.__proto__).to.equal(Parent.prototype);
			});
			it('lucas.__proto__ should be Child.prototype', function () {
				expect(mauro.__proto__).to.equal(Parent.prototype);
			});
		});

		describe('constructor', function () {
			it('mauro constructor should be Parent', function () {
				expect(mauro.constructor).to.equal(Parent);
			});
			it('FLAW: lucas constructor should be Child but is still Parent', function () {
				expect(lucas.constructor).to.equal(Parent);
			});
		});

	});

});
