function hideParams(properties) {
	properties = properties || {};

	this.animated = properties.animated || undefined;

	return this;
}



module.exports = function(properties){ return new hideParams(properties); };