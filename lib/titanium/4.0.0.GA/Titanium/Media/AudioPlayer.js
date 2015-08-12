var crypto = require('crypto');
function AudioPlayer(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'STATE_BUFFERING',
			'STATE_INITIALIZED',
			'STATE_PAUSED',
			'STATE_PLAYING',
			'STATE_STARTING',
			'STATE_STOPPED',
			'STATE_STOPPING',
			'STATE_WAITING_FOR_DATA',
			'STATE_WAITING_FOR_QUEUE',
			'allowBackground',
			'apiName',
			'bitRate',
			'bubbleParent',
			'bufferSize',
			'duration',
			'idle',
			'lifecycleContainer',
			'paused',
			'playing',
			'progress',
			'state',
			'time',
			'url',
			'volume',
			'waiting',
			'id'
		];
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
	if (__SLAG_PROPERTIES.STATE_BUFFERING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_BUFFERING is read only property');
	}
	this.STATE_BUFFERING = 0;
	if (__SLAG_PROPERTIES.STATE_INITIALIZED) {
		throw new Error('Ti.Media.AudioPlayer.STATE_INITIALIZED is read only property');
	}
	this.STATE_INITIALIZED = 0;
	if (__SLAG_PROPERTIES.STATE_PAUSED) {
		throw new Error('Ti.Media.AudioPlayer.STATE_PAUSED is read only property');
	}
	this.STATE_PAUSED = 0;
	if (__SLAG_PROPERTIES.STATE_PLAYING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_PLAYING is read only property');
	}
	this.STATE_PLAYING = 0;
	if (__SLAG_PROPERTIES.STATE_STARTING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_STARTING is read only property');
	}
	this.STATE_STARTING = 0;
	if (__SLAG_PROPERTIES.STATE_STOPPED) {
		throw new Error('Ti.Media.AudioPlayer.STATE_STOPPED is read only property');
	}
	this.STATE_STOPPED = 0;
	if (__SLAG_PROPERTIES.STATE_STOPPING) {
		throw new Error('Ti.Media.AudioPlayer.STATE_STOPPING is read only property');
	}
	this.STATE_STOPPING = 0;
	if (__SLAG_PROPERTIES.STATE_WAITING_FOR_DATA) {
		throw new Error('Ti.Media.AudioPlayer.STATE_WAITING_FOR_DATA is read only property');
	}
	this.STATE_WAITING_FOR_DATA = 0;
	if (__SLAG_PROPERTIES.STATE_WAITING_FOR_QUEUE) {
		throw new Error('Ti.Media.AudioPlayer.STATE_WAITING_FOR_QUEUE is read only property');
	}
	this.STATE_WAITING_FOR_QUEUE = 0;
	this.allowBackground = __SLAG_PROPERTIES.allowBackground || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.Media.AudioPlayer.apiName is read only property');
	}
	this.apiName = 'Ti.Media.AudioPlayer';
	this.bitRate = __SLAG_PROPERTIES.bitRate || 0;
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	this.bufferSize = __SLAG_PROPERTIES.bufferSize || 0;
	if (__SLAG_PROPERTIES.duration) {
		throw new Error('Ti.Media.AudioPlayer.duration is read only property');
	}
	this.duration = 0;
	if (__SLAG_PROPERTIES.idle) {
		throw new Error('Ti.Media.AudioPlayer.idle is read only property');
	}
	this.idle = true;
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	this.paused = __SLAG_PROPERTIES.paused || true;
	if (__SLAG_PROPERTIES.playing) {
		throw new Error('Ti.Media.AudioPlayer.playing is read only property');
	}
	this.playing = true;
	if (__SLAG_PROPERTIES.progress) {
		throw new Error('Ti.Media.AudioPlayer.progress is read only property');
	}
	this.progress = 0;
	if (__SLAG_PROPERTIES.state) {
		throw new Error('Ti.Media.AudioPlayer.state is read only property');
	}
	this.state = 0;
	this.time = __SLAG_PROPERTIES.time || 0;
	this.url = __SLAG_PROPERTIES.url || '';
	this.volume = __SLAG_PROPERTIES.volume || 0;
	if (__SLAG_PROPERTIES.waiting) {
		throw new Error('Ti.Media.AudioPlayer.waiting is read only property');
	}
	this.waiting = true;
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
AudioPlayer.prototype.addEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
AudioPlayer.prototype.fireEvent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.getAllowBackground = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.allowBackground;
};
AudioPlayer.prototype.getApiName = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
AudioPlayer.prototype.getBitRate = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bitRate;
};
AudioPlayer.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
AudioPlayer.prototype.getBufferSize = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bufferSize;
};
AudioPlayer.prototype.getDuration = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.duration;
};
AudioPlayer.prototype.getIdle = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.idle;
};
AudioPlayer.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
AudioPlayer.prototype.getPaused = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.paused;
};
AudioPlayer.prototype.getPlaying = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.playing;
};
AudioPlayer.prototype.getProgress = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.progress;
};
AudioPlayer.prototype.getState = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.state;
};
AudioPlayer.prototype.getTime = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.time;
};
AudioPlayer.prototype.getUrl = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.url;
};
AudioPlayer.prototype.getVolume = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.volume;
};
AudioPlayer.prototype.getWaiting = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.waiting;
};
AudioPlayer.prototype.isPaused = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
AudioPlayer.prototype.isPlaying = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
AudioPlayer.prototype.pause = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.play = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.release = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.setBitRate = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bitRate = __SLAG__PROPERTY;
};
AudioPlayer.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
AudioPlayer.prototype.setBufferSize = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bufferSize = __SLAG__PROPERTY;
};
AudioPlayer.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
AudioPlayer.prototype.setPaused = function (__SLAG__PROPERTY) {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.paused = __SLAG__PROPERTY;
};
AudioPlayer.prototype.setTime = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.time = __SLAG__PROPERTY;
};
AudioPlayer.prototype.setUrl = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.url = __SLAG__PROPERTY;
};
AudioPlayer.prototype.setVolume = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.volume = __SLAG__PROPERTY;
};
AudioPlayer.prototype.start = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
AudioPlayer.prototype.stateDescription = function () {
	if (['ios'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
AudioPlayer.prototype.stop = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
module.exports = function (properties) {
	return new AudioPlayer(properties);
};