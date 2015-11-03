var expect = require('chai').expect;
var Parent = require('../scripts/inheritance04').Parent;
var Child = require('../scripts/inheritance04').Child;
var CatWings = require('../scripts/inheritance04').CatWings;

describe('inheritance 04 - Applying the Parent constructor to each instance', function () {

	describe('Article, Post, Tutorial', function () {

		var Article, Post, Tutorial;

		beforeEach(function () {

			Article = function () {
				this.tags = ['css', 'js'];
			};

			article = new Article();

			Post = function () {};
			Post.prototype = new Article();

			Tutorial = function () {
				Article.apply(this);
			};

		});

		it('article should have tags as own property', function () {
			var article = new Article();
			expect(article.hasOwnProperty('tags')).to.be.true;
		});

		it('post should NOT have tags as own property', function () {
			var post = new Post();
			expect(post.hasOwnProperty('tags')).to.be.false;
		});

		it('tutorial should have tags as own property', function () {
			var tutorial = new Tutorial();
			expect(tutorial.hasOwnProperty('tags')).to.be.true;
		});

	});

	describe('Parent and Child', function () {

		var nacho;

		beforeEach(function () {
			nacho = new Child('Ignacio');
		});
		it('should use the given parameter', function () {
			expect(nacho.name).to.equal('Ignacio');
		});

		it('Child should not have a prototypal link to Parent', function () {
			expect(nacho.getName).to.equal(undefined);
		});

	});

	describe('Catwings', function () {

		var catty;

		beforeEach(function () {
			catty = new CatWings();
		});

		it('should have the properties of Cat and Bird', function () {
			expect(catty).to.have.property('legs');
			expect(catty).to.have.property('wings');
			expect(catty).to.have.property('fly');
			expect(catty).to.have.property('say');
		});

		it('should be an instanceof CatWings', function () {
			expect(catty).to.be.an.instanceof(CatWings);
		});

		it('should not have any link to Cat neither Bird', function () {
			expect(CatWings.prototype).to.be.an.instanceof(Object);
			expect(CatWings.__proto__).to.equal(Function.prototype);
			expect(CatWings.constructor).to.equal(Function);
		});

	});

});
