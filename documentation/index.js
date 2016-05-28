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

Documentation.prototype.uml = function() {
  var path = self._proxies.proxy().libraries().library().path();	
  this._documentationuml = new DocumentationUML();
  this._documentationuml.setfilename('uml.html');
  this._documentationuml.setfilepath(path.join(self._filepath, 'uml'));
  this._documentationuml.setproxies(self._proxies);
  return this._documentationuml;
}

module.exports = Documentation;