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
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set
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

UML.prototype.sequencediagram = function() {
  var path = self._proxies.proxy().libraries().library().path();
  this._umlsequencediagram = new UMLSequenceDiagram();
  this._umlsequencediagram.setfilename('sequencediagram.html');
  this._umlsequencediagram.setfilepath(path.join(self._filepath,'sequencediagram'));
  this._umlsequencediagram.setproxies(self._proxies);
  return this._umlsequencediagram;
}

module.exports = UML;