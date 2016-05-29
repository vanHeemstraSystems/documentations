/*
 * Filename: index.js
 */
var DocumentationUML = require(__dirname+'/uml.js');

var self = this;

/**
 * Create a new Documentation that let users create sub-documentation.
 * @return {Documentation}
 */
function Documentation() {
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set 
  self._title = 'Documentation'; // Default
}

Documentation.prototype.filename = function() {
  return self._filename;
}

Documentation.prototype.setfilename = function(fnOrValue) {
  self._filename = fnOrValue;
}

Documentation.prototype.filepath = function() {
  return self._filepath;
}

Documentation.prototype.setfilepath = function(fnOrValue) {
  self._filepath = fnOrValue;
}

Documentation.prototype.proxies = function() {
  return self._proxies;
}

Documentation.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Documentation.prototype.title = function() {
  return self._title;
}

Documentation.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

Documentation.prototype.append = function() {} // Will be set

Documentation.prototype.buildHtml = function() {} // Will be set

Documentation.prototype.ensureExists = function() {} // Will be set

Documentation.prototype.uml = function() {
  console.log('documentations documentation uml called')
  var _document = 'uml.html';
  var _directory = 'uml';
  var _proxies = this.proxies();
  var _path = _proxies.proxy().libraries().library().path();
  var _filepath = this.filepath();
  var _title = this.title();
  var _linktitle = 'UML';  

  this._documentationuml = new DocumentationUML();
  this._documentationuml.setfilename(_document);
  this._documentationuml.setfilepath(_path.join(_filepath, _directory));
  this._documentationuml.setproxies(_proxies);

  this._documentationnuml.append = this.append();
  this._documentationnuml.buildHtml = this.buildHtml();
  this._documentationnuml.ensureExists = this.ensureExists();

  this._documentationnuml.append('<title>' + _title + '</title>',
  	'<h1>' + _title + '</h1><ul><li><a href="./' + _directory + '/' + _document + '">' + _linktitle + '</a></li></ul>');
  return this._documentationuml;
}

module.exports = Documentation;