function DB(properties) {
	properties = properties || {};
	this.bubbleParent = properties.bubbleParent || true;
	this.apiName = 'Ti.Database.DB';
	this.lifecycleContainer = properties.lifecycleContainer || {};
	this.file = properties.file || {};
	this.lastInsertRowId = properties.lastInsertRowId || 0;
	this.name = properties.name || '';
	this.rowsAffected = properties.rowsAffected || 0;
	return this;
}
DB.prototype.addEventListener = function () {
};
DB.prototype.removeEventListener = function () {
};
DB.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
DB.prototype.fireEvent = function () {
};
DB.prototype.close = function () {
};
DB.prototype.execute = function () {
	return {};
};
DB.prototype.remove = function () {
};
DB.prototype.getBubbleParent = function () {
	return true;
};
DB.prototype.setBubbleParent = function () {
};
DB.prototype.getApiName = function () {
	return '';
};
DB.prototype.getLifecycleContainer = function () {
	return {};
};
DB.prototype.setLifecycleContainer = function () {
};
DB.prototype.getFile = function () {
	return {};
};
DB.prototype.getLastInsertRowId = function () {
	return 0;
};
DB.prototype.setLastInsertRowId = function () {
};
DB.prototype.getName = function () {
	return '';
};
DB.prototype.setName = function () {
};
DB.prototype.getRowsAffected = function () {
	return 0;
};
DB.prototype.setRowsAffected = function () {
};
module.exports = function (properties) {
	return new DB(properties);
};