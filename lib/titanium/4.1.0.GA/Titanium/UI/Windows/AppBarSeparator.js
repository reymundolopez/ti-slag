var crypto = require('crypto');
function AppBarSeparator(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = ['id'];
	if (__SLAG_NAMES.length > 0 && process.env.SLAG_STRICT === 'true') {
		for (var __SLAG_NAME in __SLAG_PROPERTIES) {
			if (__SLAG_NAMES.indexOf(__SLAG_NAME) === -1) {
				throw new Error('Use user custom property ' + __SLAG_NAME);
			}
		}
	} else if (__SLAG_NAMES.length === 0 && __SLAG_PROPERTIES.length > 0 && process.env.SLAG_STRICT === 'true') {
		throw new Error('Use user custom properties. ' + __SLAG_PROPERTIES.join(', '));
	}
	var md5 = crypto.createHash('md5');
	md5.update(crypto.randomBytes(32), 'binary');
	this.__SLAG_ID = md5.digest('hex');
	this.__SLAG_PARENT;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
AppBarSeparator.prototype.addEventListener = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AppBarSeparator.prototype.removeEventListener = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AppBarSeparator.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
AppBarSeparator.prototype.fireEvent = function () {
	if (['windowsphone'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new AppBarSeparator(properties);
};