function Socket(properties) {
	properties = properties || {};

	this.CLOSED = properties.CLOSED || undefined;
	this.CONNECTED = properties.CONNECTED || undefined;
	this.ERROR = properties.ERROR || undefined;
	this.INITIALIZED = properties.INITIALIZED || undefined;
	this.LISTENING = properties.LISTENING || undefined;
	this.apiName = 'Titanium.Network.Socket';
	this.bubbleParent = properties.bubbleParent || undefined;
	this.lifecycleContainer = properties.lifecycleContainer || undefined;

	return this;
}

Socket.prototype.addEventListener = function(){};

Socket.prototype.applyProperties = function(params){ for (var key in params) { this[key] = params[key]; } };

Socket.prototype.createTCP = function(params){ var TCP = require('./Socket/TCP'); return TCP(params); };

Socket.prototype.fireEvent = function(){};

Socket.prototype.getApiName = function(){ return this.apiName; };

Socket.prototype.getBubbleParent = function(){ return this.bubbleParent; };

Socket.prototype.getLifecycleContainer = function(){ return this.lifecycleContainer; };

Socket.prototype.removeEventListener = function(){};

Socket.prototype.setBubbleParent = function(property){ this.bubbleParent = property; };

Socket.prototype.setLifecycleContainer = function(property){ this.lifecycleContainer = property; };

module.exports = function(properties){ return new Socket(properties); };