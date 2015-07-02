function CharacterData(properties) {
	properties = properties || {};
	this.ATTRIBUTE_NODE = properties.ATTRIBUTE_NODE || undefined;
	this.CDATA_SECTION_NODE = properties.CDATA_SECTION_NODE || undefined;
	this.COMMENT_NODE = properties.COMMENT_NODE || undefined;
	this.DOCUMENT_FRAGMENT_NODE = properties.DOCUMENT_FRAGMENT_NODE || undefined;
	this.DOCUMENT_NODE = properties.DOCUMENT_NODE || undefined;
	this.DOCUMENT_TYPE_NODE = properties.DOCUMENT_TYPE_NODE || undefined;
	this.ELEMENT_NODE = properties.ELEMENT_NODE || undefined;
	this.ENTITY_NODE = properties.ENTITY_NODE || undefined;
	this.ENTITY_REFERENCE_NODE = properties.ENTITY_REFERENCE_NODE || undefined;
	this.NOTATION_NODE = properties.NOTATION_NODE || undefined;
	this.PROCESSING_INSTRUCTION_NODE = properties.PROCESSING_INSTRUCTION_NODE || undefined;
	this.TEXT_NODE = properties.TEXT_NODE || undefined;
	this.apiName = 'Titanium.XML.CharacterData';
	this.attributes = properties.attributes || undefined;
	this.bubbleParent = properties.bubbleParent || undefined;
	this.childNodes = properties.childNodes || undefined;
	this.data = properties.data || undefined;
	this.firstChild = properties.firstChild || undefined;
	this.lastChild = properties.lastChild || undefined;
	this.length = properties.length || undefined;
	this.localName = properties.localName || undefined;
	this.namespaceURI = properties.namespaceURI || undefined;
	this.nextSibling = properties.nextSibling || undefined;
	this.nodeName = properties.nodeName || undefined;
	this.nodeType = properties.nodeType || undefined;
	this.nodeValue = properties.nodeValue || undefined;
	this.ownerDocument = properties.ownerDocument || undefined;
	this.parentNode = properties.parentNode || undefined;
	this.prefix = properties.prefix || undefined;
	this.previousSibling = properties.previousSibling || undefined;
	this.text = properties.text || undefined;
	this.textContent = properties.textContent || undefined;
	return this;
}
CharacterData.prototype.addEventListener = function () {
};
CharacterData.prototype.appendChild = function () {
	return {};
};
CharacterData.prototype.appendData = function () {
};
CharacterData.prototype.applyProperties = function (params) {
	for (var key in params) {
		this[key] = params[key];
	}
};
CharacterData.prototype.cloneNode = function () {
	return {};
};
CharacterData.prototype.deleteData = function () {
};
CharacterData.prototype.fireEvent = function () {
};
CharacterData.prototype.getApiName = function () {
	return this.apiName;
};
CharacterData.prototype.getAttributes = function () {
	return this.attributes;
};
CharacterData.prototype.getBubbleParent = function () {
	return this.bubbleParent;
};
CharacterData.prototype.getChildNodes = function () {
	return this.childNodes;
};
CharacterData.prototype.getData = function () {
	return this.data;
};
CharacterData.prototype.getFirstChild = function () {
	return this.firstChild;
};
CharacterData.prototype.getLastChild = function () {
	return this.lastChild;
};
CharacterData.prototype.getLength = function () {
	return this.length;
};
CharacterData.prototype.getLocalName = function () {
	return this.localName;
};
CharacterData.prototype.getNamespaceURI = function () {
	return this.namespaceURI;
};
CharacterData.prototype.getNextSibling = function () {
	return this.nextSibling;
};
CharacterData.prototype.getNodeName = function () {
	return this.nodeName;
};
CharacterData.prototype.getNodeType = function () {
	return this.nodeType;
};
CharacterData.prototype.getNodeValue = function () {
	return this.nodeValue;
};
CharacterData.prototype.getOwnerDocument = function () {
	return this.ownerDocument;
};
CharacterData.prototype.getParentNode = function () {
	return this.parentNode;
};
CharacterData.prototype.getPrefix = function () {
	return this.prefix;
};
CharacterData.prototype.getPreviousSibling = function () {
	return this.previousSibling;
};
CharacterData.prototype.getText = function () {
	return this.text;
};
CharacterData.prototype.getTextContent = function () {
	return this.textContent;
};
CharacterData.prototype.hasAttributes = function () {
	return true;
};
CharacterData.prototype.hasChildNodes = function () {
	return true;
};
CharacterData.prototype.insertBefore = function () {
	return {};
};
CharacterData.prototype.insertData = function () {
};
CharacterData.prototype.isSupported = function () {
	return true;
};
CharacterData.prototype.normalize = function () {
};
CharacterData.prototype.removeChild = function () {
	return {};
};
CharacterData.prototype.removeEventListener = function () {
};
CharacterData.prototype.replaceChild = function () {
	return {};
};
CharacterData.prototype.replaceData = function () {
};
CharacterData.prototype.setBubbleParent = function (property) {
	this.bubbleParent = property;
};
CharacterData.prototype.setData = function (property) {
	this.data = property;
};
CharacterData.prototype.setLocalName = function (property) {
	this.localName = property;
};
CharacterData.prototype.setNodeValue = function (property) {
	this.nodeValue = property;
};
CharacterData.prototype.setPrefix = function (property) {
	this.prefix = property;
};
CharacterData.prototype.substringData = function () {
	return '';
};
module.exports = function (properties) {
	return new CharacterData(properties);
};