function Events(properties) {
	properties = properties || {};

	this.apiName = 'Titanium.Cloud.Events';
	this.bubbleParent = properties.bubbleParent || undefined;

	return this;
}

Events.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Events.prototype.create = function(){};

Events.prototype.getApiName = function(){ return this.apiName; };

Events.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Events.prototype.query = function(){};

Events.prototype.queryOccurrences = function(){};

Events.prototype.remove = function(){};

Events.prototype.search = function(){};

Events.prototype.searchOccurrences = function(){};

Events.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Events.prototype.show = function(){};

Events.prototype.showOccurrences = function(){};

Events.prototype.update = function(){};

module.exports = function(properties){ return new Events(properties); };