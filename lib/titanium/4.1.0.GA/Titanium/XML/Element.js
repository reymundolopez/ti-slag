var crypto = require('crypto');
function Element(__SLAG_PROPERTIES) {
	__SLAG_PROPERTIES = __SLAG_PROPERTIES || {};
	var __SLAG_CHECKS = [], __SLAG_NAMES = [
			'bubbleParent',
			'apiName',
			'lifecycleContainer',
			'ELEMENT_NODE',
			'ATTRIBUTE_NODE',
			'TEXT_NODE',
			'CDATA_SECTION_NODE',
			'ENTITY_REFERENCE_NODE',
			'ENTITY_NODE',
			'PROCESSING_INSTRUCTION_NODE',
			'COMMENT_NODE',
			'DOCUMENT_NODE',
			'DOCUMENT_TYPE_NODE',
			'DOCUMENT_FRAGMENT_NODE',
			'NOTATION_NODE',
			'textContent',
			'text',
			'nodeValue',
			'prefix',
			'nodeName',
			'nodeType',
			'parentNode',
			'childNodes',
			'firstChild',
			'lastChild',
			'previousSibling',
			'nextSibling',
			'attributes',
			'ownerDocument',
			'namespaceURI',
			'localName',
			'tagName',
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
	this.bubbleParent = __SLAG_PROPERTIES.bubbleParent || true;
	if (__SLAG_PROPERTIES.apiName) {
		throw new Error('Ti.XML.Element.apiName is read only property');
	}
	this.apiName = 'Ti.XML.Element';
	this.lifecycleContainer = __SLAG_PROPERTIES.lifecycleContainer || {};
	if (__SLAG_PROPERTIES.ELEMENT_NODE) {
		throw new Error('Ti.XML.Element.ELEMENT_NODE is read only property');
	}
	this.ELEMENT_NODE = 0;
	if (__SLAG_PROPERTIES.ATTRIBUTE_NODE) {
		throw new Error('Ti.XML.Element.ATTRIBUTE_NODE is read only property');
	}
	this.ATTRIBUTE_NODE = 0;
	if (__SLAG_PROPERTIES.TEXT_NODE) {
		throw new Error('Ti.XML.Element.TEXT_NODE is read only property');
	}
	this.TEXT_NODE = 0;
	if (__SLAG_PROPERTIES.CDATA_SECTION_NODE) {
		throw new Error('Ti.XML.Element.CDATA_SECTION_NODE is read only property');
	}
	this.CDATA_SECTION_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_REFERENCE_NODE) {
		throw new Error('Ti.XML.Element.ENTITY_REFERENCE_NODE is read only property');
	}
	this.ENTITY_REFERENCE_NODE = 0;
	if (__SLAG_PROPERTIES.ENTITY_NODE) {
		throw new Error('Ti.XML.Element.ENTITY_NODE is read only property');
	}
	this.ENTITY_NODE = 0;
	if (__SLAG_PROPERTIES.PROCESSING_INSTRUCTION_NODE) {
		throw new Error('Ti.XML.Element.PROCESSING_INSTRUCTION_NODE is read only property');
	}
	this.PROCESSING_INSTRUCTION_NODE = 0;
	if (__SLAG_PROPERTIES.COMMENT_NODE) {
		throw new Error('Ti.XML.Element.COMMENT_NODE is read only property');
	}
	this.COMMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_NODE) {
		throw new Error('Ti.XML.Element.DOCUMENT_NODE is read only property');
	}
	this.DOCUMENT_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_TYPE_NODE) {
		throw new Error('Ti.XML.Element.DOCUMENT_TYPE_NODE is read only property');
	}
	this.DOCUMENT_TYPE_NODE = 0;
	if (__SLAG_PROPERTIES.DOCUMENT_FRAGMENT_NODE) {
		throw new Error('Ti.XML.Element.DOCUMENT_FRAGMENT_NODE is read only property');
	}
	this.DOCUMENT_FRAGMENT_NODE = 0;
	if (__SLAG_PROPERTIES.NOTATION_NODE) {
		throw new Error('Ti.XML.Element.NOTATION_NODE is read only property');
	}
	this.NOTATION_NODE = 0;
	if (__SLAG_PROPERTIES.textContent) {
		throw new Error('Ti.XML.Element.textContent is read only property');
	}
	this.textContent = '';
	if (__SLAG_PROPERTIES.text) {
		throw new Error('Ti.XML.Element.text was deprecated, since 2.0.0');
	}
	this.nodeValue = __SLAG_PROPERTIES.nodeValue || '';
	this.prefix = __SLAG_PROPERTIES.prefix || '';
	if (__SLAG_PROPERTIES.nodeName) {
		throw new Error('Ti.XML.Element.nodeName is read only property');
	}
	this.nodeName = '';
	if (__SLAG_PROPERTIES.nodeType) {
		throw new Error('Ti.XML.Element.nodeType is read only property');
	}
	this.nodeType = 0;
	if (__SLAG_PROPERTIES.parentNode) {
		throw new Error('Ti.XML.Element.parentNode is read only property');
	}
	this.parentNode = {};
	if (__SLAG_PROPERTIES.childNodes) {
		throw new Error('Ti.XML.Element.childNodes is read only property');
	}
	this.childNodes = {};
	if (__SLAG_PROPERTIES.firstChild) {
		throw new Error('Ti.XML.Element.firstChild is read only property');
	}
	this.firstChild = {};
	if (__SLAG_PROPERTIES.lastChild) {
		throw new Error('Ti.XML.Element.lastChild is read only property');
	}
	this.lastChild = {};
	if (__SLAG_PROPERTIES.previousSibling) {
		throw new Error('Ti.XML.Element.previousSibling is read only property');
	}
	this.previousSibling = {};
	if (__SLAG_PROPERTIES.nextSibling) {
		throw new Error('Ti.XML.Element.nextSibling is read only property');
	}
	this.nextSibling = {};
	if (__SLAG_PROPERTIES.attributes) {
		throw new Error('Ti.XML.Element.attributes is read only property');
	}
	this.attributes = {};
	if (__SLAG_PROPERTIES.ownerDocument) {
		throw new Error('Ti.XML.Element.ownerDocument is read only property');
	}
	this.ownerDocument = {};
	if (__SLAG_PROPERTIES.namespaceURI) {
		throw new Error('Ti.XML.Element.namespaceURI is read only property');
	}
	this.namespaceURI = '';
	this.localName = __SLAG_PROPERTIES.localName || '';
	if (__SLAG_PROPERTIES.tagName) {
		throw new Error('Ti.XML.Element.tagName is read only property');
	}
	this.tagName = '';
	this.id = __SLAG_PROPERTIES.id || '';
	return this;
}
Element.prototype.addEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.removeEventListener = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.applyProperties = function (__SLAG_PROPERTIES) {
	for (var __SLAG_NAME in __SLAG_PROPERTIES) {
		this[__SLAG_NAME] = __SLAG_PROPERTIES[__SLAG_NAME];
	}
};
Element.prototype.fireEvent = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.insertBefore = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.replaceChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.removeChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.appendChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.hasChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.cloneNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.normalize = function () {
	if ([
			'android',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.isSupported = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.hasAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.getAttribute = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
Element.prototype.setAttribute = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.removeAttribute = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.getAttributeNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.setAttributeNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.removeAttributeNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.getElementsByTagName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.getAttributeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return '';
};
Element.prototype.setAttributeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.removeAttributeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
};
Element.prototype.getAttributeNodeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.setAttributeNodeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.getElementsByTagNameNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return {};
};
Element.prototype.hasAttribute = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.hasAttributeNS = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return true;
};
Element.prototype.getBubbleParent = function () {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.bubbleParent;
};
Element.prototype.setBubbleParent = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.bubbleParent = __SLAG__PROPERTY;
};
Element.prototype.getApiName = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.apiName;
};
Element.prototype.getLifecycleContainer = function () {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lifecycleContainer;
};
Element.prototype.setLifecycleContainer = function (__SLAG__PROPERTY) {
	if (['android'].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.lifecycleContainer = __SLAG__PROPERTY;
};
Element.prototype.getTextContent = function () {
	if ([
			'android',
			'ios',
			'mobileweb'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.textContent;
};
Element.prototype.getText = function () {
	throw new Error('Ti.XML.Element.getText was deprecated, since 2.0.0');
};
Element.prototype.getNodeValue = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeValue;
};
Element.prototype.setNodeValue = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.nodeValue = __SLAG__PROPERTY;
};
Element.prototype.getPrefix = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.prefix;
};
Element.prototype.setPrefix = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.prefix = __SLAG__PROPERTY;
};
Element.prototype.getNodeName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeName;
};
Element.prototype.getNodeType = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nodeType;
};
Element.prototype.getParentNode = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.parentNode;
};
Element.prototype.getChildNodes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.childNodes;
};
Element.prototype.getFirstChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.firstChild;
};
Element.prototype.getLastChild = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.lastChild;
};
Element.prototype.getPreviousSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.previousSibling;
};
Element.prototype.getNextSibling = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.nextSibling;
};
Element.prototype.getAttributes = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.attributes;
};
Element.prototype.getOwnerDocument = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.ownerDocument;
};
Element.prototype.getNamespaceURI = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.namespaceURI;
};
Element.prototype.getLocalName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.localName;
};
Element.prototype.setLocalName = function (__SLAG__PROPERTY) {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	this.localName = __SLAG__PROPERTY;
};
Element.prototype.getTagName = function () {
	if ([
			'android',
			'ios',
			'mobileweb',
			'windowsphone'
		].indexOf(process.env.SLAG_PLATFORM) === -1) {
		throw new Error('This method is not support specified platform');
	}
	return this.tagName;
};
module.exports = function (properties) {
	return new Element(properties);
};