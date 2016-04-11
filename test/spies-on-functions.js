'use strict';

const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

const expect = chai.expect;
const spy = chai.spy;

describe('Chai-spies', function () {

  it('should spy on an object\'s method', function () {

    // https://babeljs.io sample
    var naruto = {
      _name: "Naruto",
      _friends: [],
      printFriends() { // Same as printFriends: function () {} but !arrow
        this._friends.forEach(f => {
          this.log(f + ' is ' + this._name + '\'s friend.');
        });
      },
      log() {}
    };

    // Set the spy on the existent obj
    spy.on(naruto, 'log');
    spy.on(naruto, 'printFriends');

    naruto._friends.push('Sasuke');
    naruto._friends.push('Sakura');
    naruto._friends.push('Hinata');
    naruto._friends.push('Konohamaru');
    naruto._friends.push('Kakashi');

    naruto.printFriends();

    // Spy on an object method
    expect(naruto.printFriends).to.have.been.called.exactly(1);
    expect(naruto.log).to.have.been.called.exactly(5);
    expect(naruto.log).to.have.been.called.with('Sasuke is Naruto\'s friend.');
    expect(naruto.log).to.have.been.called.with('Sakura is Naruto\'s friend.');
    expect(naruto.log).to.have.been.called.with('Hinata is Naruto\'s friend.');
    expect(naruto.log).to.have.been.called.with('Konohamaru is Naruto\'s friend.');
    expect(naruto.log).to.have.been.called.with('Kakashi is Naruto\'s friend.');

    naruto.log.reset();
  });

  it('should spy on a function', function () {

    function fn() {}

    // Lexical this
    var naruto = {
      _name: "Naruto",
      _friends: [],
      printFriends() { // Same as printFriends: function () {} but !arrow
        this._friends.forEach(f => {
          fn(this._name + " knows " + f);
        });
      }
    };

    // Replace the original function with the spy
    var fn = spy(fn);

    naruto._friends.push('Gerard');
    naruto._friends.push('Pedro');
    naruto._friends.push('Andrew');
    naruto._friends.push('Rose');
    naruto._friends.push('Ximena');

    naruto.printFriends();

    // Spy on a function
    expect(fn).to.have.been.called.with('Naruto knows Gerard');
    expect(fn).to.have.been.called.with('Naruto knows Pedro');
    expect(fn).to.have.been.called.with('Naruto knows Andrew');
    expect(fn).to.have.been.called.with('Naruto knows Rose');
    expect(fn).to.have.been.called.with('Naruto knows Ximena');

    fn.reset(); // Restore the original function
  });
});