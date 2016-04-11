var expect = require('chai').expect;
var klass = require('../../scripts/inheritance/inheritance10-klass').klass;

describe('klass: a class constructor', function () {

	var Man, SuperMan;

	before(function () {

		Man = klass(null, {
			__construct: function (what) {
				console.log('Man\'s constructor');
				this.name = what;
			},
			getName: function () {
				return this.name;
			}
		});

		SuperMan = klass(Man, {
			__construct: function () {
				console.log('SuperMan\'s constructor');
			},
			getName: function () {
				var name = SuperMan.uber.getName.call(this);
				return 'I am ' + name;
			}
		});

	});


	describe('The new Man class', function () {

		describe('[prototype]', function () {
			it('Man prototype should have the getName method', function () {
				expect(Man.prototype).to.not.equal(Function.prototype);
				expect(Man.prototype).to.have.property('getName');
			});
		});


		describe('[__proto__]', function () {
			it('Man.__proto__ should be Function.prototype', function () {
				expect(Man.__proto__).to.equal(Function.prototype);
			});
		});

		describe('[constructor]', function () {
			it('Man constructor should be Function', function () {
				expect(Man.constructor).to.equal(Function);
			});
		});

		describe('[uber object - super class]', function () {
			it('Man uber method should be null', function () {
				expect(Man.uber).to.equal(Object.prototype);
			});
		});

	});

	describe('An instance of Man and SuperMan', function () {

		var mauro, clark;

		beforeEach(function () {
			mauro = new Man('Mauro');
			clark = new SuperMan('Clark');
		});

		it('should have the name set', function () {
			expect(mauro.getName()).to.equal('Mauro');
			expect(clark.getName()).to.equal('I am Clark');
		});

		it('clark should be an instance of Man and SuperMan', function () {
			expect(mauro).to.be.an.instanceof(Man);
			expect(clark).to.be.an.instanceof(Man);
			expect(clark).to.be.an.instanceof(SuperMan);
		});

	});

});
