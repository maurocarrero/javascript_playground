/*
* Douglas Crockford "sugar" methods
*/

// method method
// Class augmentation: All Function instances will receive the new functionality

Function.prototype.method = function (name, fn) {
	if (!Function.prototype[name]) {
		Function.prototype[name] = fn;
	}
	return this;
};

// inherits method

Function.method('inherits', function (parent) {
	this.prototype = new parent();
	var d = {},
		p = this.prototype;
	this.prototype.constructor = parent;
	this.method('uber', function uber(name) {
		if (!(name in d)) {
			d[name] = 0;
		}
		var f, r, t = d[name], v = parent.prototype;
		if (t) {
			while (t) {
				v = v.constructor.prototype;
				t -= 1;
			}
			f = v[name];
		} else {
			f = p[name];
			if (f == this[name]) {
				f = v[name];
			}
		}
		d[name] += 1;
		r = f.apply(this, Array.prototype.slice.apply(arguments, [1]));
		d[name] -= 1;
		return r;
	});
	return this;
});