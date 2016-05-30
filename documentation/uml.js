/*
 * Filename: uml.js
 */
var UMLSequenceDiagram = require(__dirname+'/uml/sequencediagram.js');

var self = this;

/**
 * Create a new UML that let users create sub-uml.
 * @return {UML}
 */
function UML() {
  self._append = {}; // Will be set	
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set
  self._title = 'UML'; // Default
}

UML.prototype.append = function() {
  return self._append;
}

UML.prototype.setappend = function(fnOrValue) {
  self._append = fnOrValue;
}

UML.prototype.filename = function() {
  return self._filename;
}

UML.prototype.setfilename = function(fnOrValue) {
  self._filename = fnOrValue;
}

UML.prototype.filepath = function() {
  return self._filepath;
}

UML.prototype.setfilepath = function(fnOrValue) {
  self._filepath = fnOrValue;
}

UML.prototype.proxies = function() {
  return self._proxies;
}

UML.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

UML.prototype.title = function() {
  return self._title;
}

UML.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

UML.prototype.append = function() {} // Will be set

UML.prototype.buildHtml = function() {} // Will be set

UML.prototype.ensureExists = function() {} // Will be set

UML.prototype.sequencediagram = function() {
  console.log('documentations documentation uml sequencediagram called')
  var _document = 'sequencediagram.html';
  var _directory = 'sequencediagram';
  var _proxies = this.proxies();
  var _path = _proxies.proxy().libraries().library().path();
  var _filepath = this.filepath();
  var _title = this.title();
  var _linktitle = 'Sequence Diagram';

  this._umlsequencediagram = new UMLSequenceDiagram();
  this._umlsequencediagram.setfilename(_document);
  this._umlsequencediagram.setfilepath(_path.join(_filepath, _directory));
  this._umlsequencediagram.setproxies(_proxies);

  this._umlsequencediagram.append = this.append; // Assign function, don't call it
  this._umlsequencediagram.buildHtml = this.buildHtml; // Assign function, don't call it
  this._umlsequencediagram.ensureExists = this.ensureExists; // Assign function, don't call it

  this._umlsequencediagram.append('<title>' + _title + '</title>',
  	'<h1>' + _title + '</h1><ul><li><a href="./' + _directory + '/' + _document + '">' + _linktitle + '</a></li></ul>');
  return this._umlsequencediagram;
}

module.exports = UML;