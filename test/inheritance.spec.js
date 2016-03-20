var expect = require('chai').expect;
var Animal = require('../scripts/inheritance').Animal;
var Dog = require('../scripts/inheritance').Dog;

describe('inheritance - Animal and Dog', function () {

	describe('__proto__ is a reference to the prototype of the function from which this object inherits', function () {

		it('Animal.__proto__ should be different from Animal.prototype', function () {
			expect(Animal.__proto__).to.not.equal(Animal.prototype);
		});

		it('Animal.__proto__ is the prototype of the constructor function', function () {
			expect(Animal.__proto__).to.equal(Object.getPrototypeOf(Animal));
		});

		it('A constructor function should have Function.prototype as its __proto__', function () {
			expect(Animal.__proto__).to.equal(Function.prototype);
			expect(Object.getPrototypeOf(Animal)).to.equal(Function.prototype);
		});
	});

	describe('Animal', function () {

		it('should exist the Animal contructor function', function () {
			expect(Animal).to.be.defined;
			expect(typeof Animal).to.equal('function');
		});

		it('Animal.constructor should be Function', function () {
			expect(Animal.constructor).to.equal(Function);
		});

		it('Animal.__proto__ should be the Function.prototype object', function () {
			expect(Animal.__proto__).to.equal(Object.getPrototypeOf(Animal));
			expect(Animal.__proto__).to.equal(Function.prototype);
		});

		it('Animal.prototype should have all the defined methods', function () {
			expect(Animal.prototype).to.be.defined;
			expect(Animal.prototype.getSpecie).to.be.defined;
			expect(Animal.prototype.getFamily).to.be.defined;
			expect(Animal.prototype.getName).to.not.be.defined;
			expect(Animal.prototype).to.not.equal(Object.getPrototypeOf(Animal));
			expect(Animal.prototype).to.be.an.instanceOf(Object);
		});
	});

	describe('Dog', function () {

		it('should exist the Dog constructor function', function () {
			expect(Dog).to.be.defined;
			expect(typeof Dog).to.equal('function');
		});

		it('Dog.constructor should be the Function object', function () {
			expect(Dog.constructor).to.equal(Function);
		});

		it('Dog.__proto__ should be the Function.prototype object', function () {
			expect(Dog.__proto__).to.equal(Object.getPrototypeOf(Animal));
			expect(Dog.__proto__).to.equal(Function.prototype);
		});

		it('Dog.prototype should inherits from Animal.prototype object', function () {
			expect(Dog.prototype).to.be.defined;
			expect(Dog.prototype.getSpecie).to.be.defined;
			expect(Dog.prototype.getFamily).to.be.defined;
			expect(Dog.prototype.getName).to.be.defined;
		});

		it('Dog.prototype should be an object created from Animal.prototype', function () {
			expect(Dog.prototype).to.be.defined;
			expect(Dog.prototype).to.be.an.instanceof(Animal);
			expect(Dog.prototype.getSpecie).to.be.defined;
			expect(Dog.prototype.getFamily).to.be.defined;
			expect(Dog.prototype.getName).to.be.defined;
			expect(Dog.prototype).to.not.equal(Animal);
			expect(Dog.prototype).to.not.equal(Animal.prototype);
			expect(Dog.prototype).to.not.equal(Object.getPrototypeOf(Dog));
			expect(Dog.prototype).to.not.equal(Object.getPrototypeOf(Animal));
		});
	});

	describe('fifi: a generic animal', function () {

		var fifi;

		beforeEach(function () {
			fifi = new Animal({
				specie: 'Generic',
				family: 'Unknown'
			});
		});

		it('Fifi should be an instance of Animal', function () {
			expect(fifi).to.be.an.instanceof(Animal);
		});

		it('Fifi\'s constructor should be Animal', function () {
			expect(fifi.constructor).to.not.equal(Dog);
			expect(fifi.constructor).to.equal(Animal);
		});

		it('Fifi\'s __proto__ should be Animal.prototype', function () {
			expect(fifi.__proto__).to.equal(Animal.prototype);
			expect(fifi.__proto__).to.not.equal(Dog.prototype);
			expect(fifi.__proto__).to.not.equal(Function.prototype);
		});

		it('should be able to use all the methods from Animal prototype', function () {
			expect(fifi.getSpecie()).to.equal('Generic');
			expect(fifi.getFamily()).to.equal('Unknown');
			expect(fifi.getName).to.not.be.defined;
		});
	});

	describe('Boby: a dog', function () {

		var boby;

		beforeEach(function () {
			boby = new Dog({
				name: 'Boby',
				specie: 'Dog',
				family: 'Mammal'
			});
		});

		it('Boby should be an instance of Animal and Dog', function () {
			expect(boby).to.be.an.instanceof(Animal);
			expect(boby).to.be.an.instanceof(Dog);
		});

		it('Boby\'s constructor should be Dog and not Animal', function () {
			expect(boby.constructor).to.equal(Dog);
			expect(boby.constructor).to.not.equal(Animal);
		});

		it('Boby\'s __proto__ should be Dog.prototype and not Animal.prototype', function () {
			expect(boby.__proto__).to.equal(Dog.prototype);
			expect(boby.__proto__).to.not.equal(Animal.prototype);
		});

		it('should be able to use all the methods from Animal and Dog prototypes', function () {
			expect(boby.getName).to.be.defined;
			expect(boby.getSpecie).to.be.defined;
			expect(boby.getFamily).to.be.defined;
			expect(boby.getName()).to.equal('Boby');
			expect(boby.getSpecie()).to.equal('Dog');
			expect(boby.getFamily()).to.equal('Mammal');
		});
	});
});
