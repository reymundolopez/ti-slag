function CloudACLsResponse(properties) {
	properties = properties || {};

	this.acls = properties.acls || undefined;
	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.message = properties.message || undefined;
	this.meta = properties.meta || undefined;
	this.success = properties.success || undefined;

	return this;
}



module.exports = function(properties){ return new CloudACLsResponse(properties); };