function Checkins(properties) {
	properties = properties || {};
	this.apiName = 'Modules.Cloud.Checkins';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;
	return this;
}
Checkins.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
Checkins.prototype.create = function () {
};
Checkins.prototype.getApiName = function () {
	return this.apiName;
};
Checkins.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
Checkins.prototype.getLifecycleContainer = function () {
	return this.lifecycleContainer;
};
Checkins.prototype.query = function () {
};
Checkins.prototype.remove = function () {
};
Checkins.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
Checkins.prototype.setLifecycleContainer = function (property) {
	this.lifecycleContainer = property;
};
Checkins.prototype.show = function () {
};
module.exports = function (properties) {
	return new Checkins(properties);
};