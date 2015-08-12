var crypto = require('crypto');
function Attr(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'ATTRIBUTE_NODE',
			'CDATA_SECTION_NODE',
			'COMMENT_NODE',
			'DOCUMENT_FRAGMENT_NODE',
			'DOCUMENT_NODE',
			'DOCUMENT_TYPE_NODE',
			'ELEMENT_NODE',
			'ENTITY_NODE',
			'ENTITY_REFERENCE_NODE',
			'NOTATION_NODE',
			'PROCESSING_INSTRUCTION_NODE',
			'TEXT_NODE',
			'apiName',
			'attributes',
			'bubbleParent',
			'childNodes',
			'firstChild',
			'lastChild',
			'localName',
			'name',
			'namespaceURI',
			'nextSibling',
			'nodeName',
			'nodeType',
			'nodeValue',
			'ownerDocument',
			'ownerElement',
			'parentNode',
			'prefix',
			'previousSibling',
			'specified',
			'text',
			'textContent',
			'value',
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
	if (__SLAG_PROPERTIES.ATTRIBUTE_NODE) {
		throw new Error('Ti.XML.Attr.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG_PROPERTIES.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Attr.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG_PROPERTIES.COMMENT_NODE) {
		throw new Error('Ti.XML.Attr.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Attr.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Attr.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Attr.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG_PROPERTIES.ELEMENT_NODE) {
		throw new Error('Ti.XML.Attr.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_NODE) {
		throw new Error('Ti.XML.Attr.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Attr.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG_PROPERTIES.NOTATION_NODE) {
		throw new Error('Ti.XML.Attr.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG_PROPERTIES.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Attr.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG_PROPERTIES.TEXT_NODE) {
		throw new Error('Ti.XML.Attr.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.XML.Attr.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Attr';
	if (__SLAG_PROPERTIES.attributes) {
		throw new Error('Ti.XML.Attr.attributes is read only property');
	}
	this.attributes = {};
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.childNodes) {
		throw new Error('Ti.XML.Attr.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG_PROPERTIES.firstChild) {
		throw new Error('Ti.XML.Attr.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG_PROPERTIES.lastChild) {
		throw new Error('Ti.XML.Attr.lastChild is read only property');
	}
	this.lastChild = {};
	this.localName = __SLAG_PROPERTIES.localName || '';
	if (__SLAG_PROPERTIES.name) {
		throw new Error('Ti.XML.Attr.name is read only property');
	}
	this.name = '';
	if (__SLAG_PROPERTIES.namespaceURI) {
		throw new Error('Ti.XML.Attr.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	if (__SLAG_PROPERTIES.nextSibling) {
		throw new Error('Ti.XML.Attr.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG_PROPERTIES.nodeName) {
		throw new Error('Ti.XML.Attr.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG_PROPERTIES.nodeType) {
		throw new Error('Ti.XML.Attr.nodeType is read only property');
	}
	this.nodeType = 0;
	this.nodeValue = __SLAG_PROPERTIES.nodeValue || '';
	if (__SLAG_PROPERTIES.ownerDocument) {
		throw new Error('Ti.XML.Attr.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG_PROPERTIES.ownerElement) {
		throw new Error('Ti.XML.Attr.ownerElement is read only property');
	}
	this.ownerElement = {};
	if (__SLAG_PROPERTIES.parentNode) {
		throw new Error('Ti.XML.Attr.parentNode is read only property');
	}
	this.parentNode = {};
	this.prefix = __SLAG_PROPERTIES.prefix || '';
	if (__SLAG_PROPERTIES.previousSibling) {
		throw new Error('Ti.XML.Attr.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG_PROPERTIES.specified) {
		throw new Error('Ti.XML.Attr.specified is read only property');
	}
	this.specified = true;
	if (__SLAG_PROPERTIES.text) {
		throw new Error('Ti.XML.Attr.text was deprecated, since 2.0.0');
	}
	if (__SLAG_PROPERTIES.textContent) {
		throw new Error('Ti.XML.Attr.textContent is read only property');
	}
	this.textContent = '';
	this.value = __SLAG_PROPERTIES.value || '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Attr.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Attr.prototype.appendChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Attr.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Attr.prototype.cloneNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Attr.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Attr.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Attr.prototype.getAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.attributes;
};
Attr.prototype.getBubbleParent = function () {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Attr.prototype.getChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.childNodes;
};
Attr.prototype.getFirstChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.firstChild;
};
Attr.prototype.getLastChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastChild;
};
Attr.prototype.getLocalName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.localName;
};
Attr.prototype.getName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.name;
};
Attr.prototype.getNamespaceURI = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.namespaceURI;
};
Attr.prototype.getNextSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nextSibling;
};
Attr.prototype.getNodeName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeName;
};
Attr.prototype.getNodeType = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeType;
};
Attr.prototype.getNodeValue = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeValue;
};
Attr.prototype.getOwnerDocument = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ownerDocument;
};
Attr.prototype.getOwnerElement = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ownerElement;
};
Attr.prototype.getParentNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.parentNode;
};
Attr.prototype.getPrefix = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.prefix;
};
Attr.prototype.getPreviousSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.previousSibling;
};
Attr.prototype.getSpecified = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.specified;
};
Attr.prototype.getText = function () {
	throw new Error('Ti.XML.Attr.getText was deprecated, since 2.0.0');
};
Attr.prototype.getTextContent = function () {
	if ([
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.textContent;
};
Attr.prototype.getValue = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.value;
};
Attr.prototype.hasAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Attr.prototype.hasChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Attr.prototype.insertBefore = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Attr.prototype.isSupported = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Attr.prototype.normalize = function () {
	if ([
			'android',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Attr.prototype.removeChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Attr.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Attr.prototype.replaceChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Attr.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'ios',
			'android'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Attr.prototype.setLocalName = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.localName = __SLAG__PROPERTY;
};
Attr.prototype.setNodeValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.nodeValue = __SLAG__PROPERTY;
};
Attr.prototype.setPrefix = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.prefix = __SLAG__PROPERTY;
};
Attr.prototype.setValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'tizen'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.value = __SLAG__PROPERTY;
};
module.exports = function (properties) {
	return new Attr(properties);
};