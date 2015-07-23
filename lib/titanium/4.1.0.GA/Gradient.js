function Gradient(properties) {
	properties = properties || {};
	this.type = properties.type || '';
	this.startPoint = properties.startPoint || {
		x: 0,
		y: 0
	};
	this.endPoint = properties.endPoint || {
		x: 0,
		y: 0
	};
	this.startRadius = properties.startRadius || 0;
	this.endRadius = properties.endRadius || 0;
	this.colors = properties.colors || '';
	this.backfillStart = properties.backfillStart || true;
	this.backfillEnd = properties.backfillEnd || true;
	return this;
}
module.exports = function (properties) {
	return new Gradient(properties);
};