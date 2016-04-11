'use strict';

const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const expect = chai.expect;
const spy = chai.spy;

describe('EcmaScript 6 - Arrows and Lexical This', function () {

  it('Javascript has function scope', function () {

    var name = 'Pepe';

    {
      // Duplicate declaration
      var name = 'Mengano';
    }

    var fnName = null;

    function fn() {
      var name = 'Inside the function';
      fnName = name;
    }

    fn();

    expect(name).to.equal('Mengano');
    expect(fnName).to.equal('Inside the function');

  });

  it('Arrow functions should share the same lexical this as their surrounding code.', function () {

    var self = this;
    var fnThis = null;
    var arrowThis = null;

    var fn = function () { fnThis = this; };
    var arrow = () => { arrowThis = this; };

    fn();
    arrow();

    expect(fnThis).to.not.equal(self);
    expect(fnThis).to.not.equal(arrowThis);
    expect(arrowThis).to.equal(self);
  });

  /**
   * https://babeljs.io sample
   */
  it('Arrows and Lexical This - Babel', function () {

    var evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    // Expression bodies
    var odds = evens.map(v => v + 1);
    var nums = evens.map((v, i) => v + i);
    var fives = [];

    expect(odds.length).to.equal(10);
    expect(odds).to.deep.equal([3, 5, 7, 9, 11, 13, 15, 17, 19, 21]);

    expect(nums.length).to.equal(10);
    expect(nums).to.deep.equal([2, 5, 8, 11, 14, 17, 20, 23, 26, 29]);

    // Statement bodies
    nums.forEach(v => {
      if (v % 5 === 0)
        fives.push(v);
    });

    expect(fives).to.deep.equal([5, 20]);

  });

  it('Lexical scope on object methods', function () {

    function fn() {}

    // Lexical this
    var naruto = {
      _name: "Naruto",
      _friends: [],
      printFriends() { // Same as printFriends: function () {} but !arrow
        this._friends.forEach(f => {
          fn(f + ' is ' + this._name + '\'s friend.');
        });
      }
    };

    var fn = spy(fn);

    naruto._friends.push('Sasuke');
    naruto._friends.push('Sakura');
    naruto._friends.push('Hinata');
    naruto._friends.push('Konohamaru');
    naruto._friends.push('Kakashi');

    naruto.printFriends();

    // Spy on an object method
    expect(fn).to.have.been.called.exactly(5);
    expect(fn).to.have.been.called.with('Sasuke is Naruto\'s friend.');
    expect(fn).to.have.been.called.with('Sakura is Naruto\'s friend.');
    expect(fn).to.have.been.called.with('Hinata is Naruto\'s friend.');
    expect(fn).to.have.been.called.with('Konohamaru is Naruto\'s friend.');
    expect(fn).to.have.been.called.with('Kakashi is Naruto\'s friend.');

    fn.reset();
  });
});