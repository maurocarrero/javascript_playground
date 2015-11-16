var expect = require('chai').expect;
var animal = require('../scripts/inheritance02-object-create').animal;
var dog = require('../scripts/inheritance02-object-create').dog;

describe('inheritance 02 - Object.create - NO constructors', function () {

	describe('animal and dog', function () {

		it('should have the dog methods', function () {
			dog.name = 'Tito';
			expect(dog.getName()).to.equal('Tito');
		});

		it('should have the animal methods', function () {
			dog.specie = 'Dog';
			expect(dog.getSpecie()).to.equal('Dog');
		});

		it('should be instances of Object', function () {
			expect(animal).to.be.an.instanceof(Object);
			expect(dog).to.be.an.instanceof(Object);
		});

		it('should have Object as constructor', function () {
			expect(animal.constructor).to.be.an.instanceof(Object);
			expect(dog.constructor).to.be.an.instanceof(Object);
		});

		it('should NOT have prototype', function () {
			expect(animal.prototype).to.equal(undefined);
			expect(dog.prototype).to.equal(undefined);
		});

		it('animal should have Object.prototype as __proto__ property', function () {
			expect(animal.__proto__).to.equal(Object.prototype);
		});

		it('dog should have animal as __proto__ property', function () {
			expect(dog.__proto__).to.equal(animal);
		});


	});

});
