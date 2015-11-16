var expect = require('chai').expect;
var object = require('../scripts/inheritance11-prototypal-inheritance').object;

describe('Prototypal inheritance classless pattern', function () {

	var parent, child, Parent, daddy, kid, kid2;


	before(function () {
		// object to inherit from
		parent = {
			name: 'Papá',
			getName: function () {
				return this.name;
			}
		};

		// the new object
		child = object(parent);

		// The parent can be an instance of some constructor
		Parent = function (name) {
			this.name = name;
		};

		Parent.prototype.say = function () {
			return 'I\'m your father';
		};

		// Inherits both own properties and constructor's prototype
		daddy = new Parent('Dad');
		kid = object(daddy);
		kid2 = object(Parent.prototype);

	});

	it('parent and child should be objects', function () {
		expect(parent).to.be.an.object;
		expect(Object.prototype.toString.apply(parent)).to.equal('[object Object]');
		expect(child).to.be.an.object;
		expect(Object.prototype.toString.apply(child)).to.equal('[object Object]');
	});

	it('child should have the same properties and methods than his father', function () {
		expect(child.name).to.equal('Papá');
		expect(child.getName()).to.equal('Papá');
	});

	it('daddy, kid and kid2 should be objects', function () {
		expect(daddy).to.be.an.object;
		expect(Object.prototype.toString.apply(daddy)).to.equal('[object Object]');
		expect(kid).to.be.an.object;
		expect(Object.prototype.toString.apply(kid)).to.equal('[object Object]');
		expect(kid2).to.be.an.object;
		expect(Object.prototype.toString.apply(kid2)).to.equal('[object Object]');
	});

	it('kid should inherit both own properties and constructor\'s prototype', function () {
		expect(kid.name).to.equal('Dad');
		expect(kid.say()).to.equal('I\'m your father');
	});

	it('kid2 should inherit only from the Parent prototype', function () {
		expect(kid2.name).to.be.undefined;
		expect(kid2.say()).to.equal('I\'m your father');
	});

	describe('[prototype]', function () {
		it('objects should not have prototype', function () {
			expect(parent.prototype).to.be.undefined;
			expect(child.prototype).to.be.undefined;
			expect(daddy.prototype).to.be.undefined;
			expect(kid.prototype).to.be.undefined;
			expect(kid2.prototype).to.be.undefined;
		});
	});

	describe('[__proto__]', function () {
		it('parent.__proto__ should be Object.prototype', function () {
			expect(parent.__proto__).to.equal(Object.prototype);
		});
		it('child.__proto__ should be parent', function () {
			expect(child.__proto__).to.equal(parent);
		});
		it('daddy.__proto__ should be Parent.prototype', function () {
			expect(daddy.__proto__).to.equal(Parent.prototype);
		});
		it('kid.__proto__ should be daddy', function () {
			expect(kid.__proto__).to.equal(daddy);
		});
		it('kid2.__proto__ should be Parent.prototype', function () {
			expect(kid2.__proto__).to.equal(Parent.prototype);
		});
	});

	describe('[constructor]', function () {
		it('objects should have Object as constructor', function () {
			expect(parent.constructor).to.equal(Object);
			expect(child.constructor).to.equal(Object);
			expect(daddy.constructor).to.equal(Parent);
			expect(kid.constructor).to.equal(Parent);
			expect(kid2.constructor).to.equal(Parent);
		});
	});

	describe('ECMAScript 5 Object.create', function () {

		it('should inherit and also add the new properties', function () {
			var kiddy = Object.create(kid, {
				nickname: { writable:true, configurable:true, value: 'Kiddy' },
			});
			expect(kiddy.name).to.equal('Dad');
			expect(kiddy.say()).to.equal('I\'m your father');
			expect(kiddy.nickname).to.equal('Kiddy');
		});

	});

});
