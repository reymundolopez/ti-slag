var assert = require('assert'),
	path = require('path'),
	slag = require('./');

describe('slag', function(){
	var appjs = path.join(__dirname, 'test', 'Resources', 'app.js'),
		modjs = path.join(__dirname, 'test', 'Resources', 'module.js');

	it('should support Titanium SDK version 4.0.0.GA', function(){
		assert.doesNotThrow(function(){
			slag(appjs, '4.0.0.GA', 'ios');
		});
	});

	it('should support Titanium SDK version 3.5.1.GA', function(){
		assert.doesNotThrow(function(){
			slag(appjs, '3.5.1.GA', 'ios');
		});
	});

	it('should support platform iOS', function(){
		assert.doesNotThrow(function(){
			slag(appjs, '4.0.0.GA', 'ios');
		});
	});

	it('should support platform Android', function(){
		assert.doesNotThrow(function(){
			slag(appjs, '4.0.0.GA', 'android');
		});
	});

	it('should support modules specified', function(){
		assert.doesNotThrow(function(){
			slag(modjs, '4.0.0.GA', 'ios', {
				'be.k0suke.module': {
					createWindow: function(){
						return this;
					},
					open: function(){}
				}
			});
		});
	});

	it('should throw exception invalid file path', function(){
		assert.throws(function(){
			slag('file_does_not_exist.js', '4.0.0.GA', 'ios');
		}, Error);
	});

	it('should throw exception invalid Titanium SDK version', function(){
		assert.throws(function(){
			slag(appjs, '0.0.0.GA', 'ios');
		}, Error);
	});

	it('should throw exception invalid plafrom specified', function(){
		assert.throws(function(){
			slag(appjs, '4.0.0.GA', 'tizen');
		}, Error);
	});

	it('should throw exception invalid modules specified', function(){
		assert.throws(function(){
			slag(modjs, '4.0.0.GA', 'ios', []);
		}, Error);
	});
});