var expect = require('chai').expect;

describe('Binary Numbers', function () {

	it('should count until 10', function () {
		expect(1).to.equal(parseInt('1', 2));
		expect(2).to.equal(parseInt('10', 2));
		expect(3).to.equal(parseInt('11', 2));
		expect(4).to.equal(parseInt('100', 2));
		expect(5).to.equal(parseInt('101', 2));
		expect(6).to.equal(parseInt('110', 2));
		expect(7).to.equal(parseInt('111', 2));
		expect(8).to.equal(parseInt('1000', 2));
		expect(9).to.equal(parseInt('1001', 2));
		expect(10).to.equal(parseInt('1010', 2));
	});

	it('1111 = 15', function () {
		expect(parseInt('1111', 2)).to.equal(15);
		expect(0b1111).to.equal(15);
	});

	it('110010 = 50', function () {
		expect(0b110010).to.equal(50);
	});

	it('10110 = 22', function () {
		expect(0b10110).to.equal(22);
	});

});

