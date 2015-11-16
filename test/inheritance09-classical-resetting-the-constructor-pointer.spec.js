var expect = require('chai').expect;
var Parent = require('../scripts/inheritance09-classical-resetting-the-constructor-pointer').Parent;
var Child = require('../scripts/inheritance09-classical-resetting-the-constructor-pointer').Child;

describe('inheritance 09 - Temporary constructor: resetting the constructor pointer', function () {

	describe('Parent and Child', function () {

		describe('[prototype]', function () {
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


		describe('[__proto__]', function () {
			it('Parent.__proto__ should be Function.prototype', function () {
				expect(Parent.__proto__).to.equal(Function.prototype);
			});

			it('Child.__proto__ should be Function.prototype', function () {
				expect(Child.__proto__).to.equal(Function.prototype);
			});
		});

		describe('[constructor]', function () {
			it('Parent constructor should be Function', function () {
				expect(Parent.constructor).to.equal(Function);
			});

			it('Child constructor should be Parent but is Function', function () {
				expect(Child.constructor).to.equal(Function);
			});
		});

		describe('[uber object - super class]', function () {
			it('Child.uber should be Parent.prototype', function () {
				expect(Child.uber).to.equal(Parent.prototype);
			});

			it('Parent.uber should be undefined', function () {
				expect(Parent.uber).to.be.undefined;
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
			expect(lucas.getName()).to.equal('Lucas');
		});

		it('mauro should have his name defined', function () {
			expect(mauro.getName()).to.equal('Mauro');
		});

		it('should only inherit properties from the prototype', function () {
			expect(lucas.getName()).to.equal('Lucas');
			delete lucas.name;
			expect(lucas.getName()).to.equal(undefined);
		});

		describe('[prototype]', function () {
			it('any instance should have an undefined prototype', function () {
				expect(mauro.prototype).to.be.undefined;
				expect(lucas.prototype).to.be.undefined;
			});
		});

		describe('[__proto__]', function () {
			it('mauro.__proto__ should be Parent.prototype', function () {
				expect(mauro.__proto__).to.equal(Parent.prototype);
			});
			it('lucas.__proto__ should be Child.prototype', function () {
				expect(mauro.__proto__).to.equal(Parent.prototype);
			});
		});

		describe('[constructor]', function () {
			it('mauro constructor should be Parent', function () {
				expect(mauro.constructor).to.equal(Parent);
			});
			it('[fixed] lucas constructor should be Child', function () {
				expect(lucas.constructor).to.equal(Child);
			});
		});

		describe('[uber object - super class]', function () {
			it('any children .uber should be undefined', function () {
				expect(mauro.uber).to.be.undefined;
				expect(lucas.uber).to.be.undefined;
			});

			it('the instance should reflect the uber access', function () {
				expect(lucas.getBaseName()).to.equal('I am the Parent function prototype, who method');
			});
		});

	});

});
