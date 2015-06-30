function CloudClientsResponse(properties) {
	properties = properties || {};

	this.code = properties.code || undefined;
	this.error = properties.error || undefined;
	this.ip_address = properties.ip_address || undefined;
	this.location = properties.location || undefined;
	this.message = properties.message || undefined;
	this.meta = properties.meta || undefined;
	this.success = properties.success || undefined;

	return this;
}



module.exports = function(properties){ return new CloudClientsResponse(properties); };