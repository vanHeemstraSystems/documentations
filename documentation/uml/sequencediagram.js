/*
 * Filename: sequencediagram.js
 */

var self = this;

/**
 * Create a new SequenceDiagram that let users create sub-sequencediagram.
 * @return {SequenceDiagram}
 */
function SequenceDiagram() {
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set
  self._title = 'Sequence Diagram'; // Default
}

SequenceDiagram.prototype.filename = function() {
  return self._filename;
}

SequenceDiagram.prototype.setfilename = function(fnOrValue) {
  self._filename = fnOrValue;
}

SequenceDiagram.prototype.filepath = function() {
  return self._filepath;
}

SequenceDiagram.prototype.setfilepath = function(fnOrValue) {
  self._filepath = fnOrValue;
}

SequenceDiagram.prototype.proxies = function() {
  return self._proxies;
}

SequenceDiagram.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

SequenceDiagram.prototype.title = function() {
  return self._title;
}

SequenceDiagram.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

SequenceDiagram.prototype.append = function() {} // Will be set

SequenceDiagram.prototype.buildHtml = function() {} // Will be set

SequenceDiagram.prototype.ensureExists = function() {} // Will be set

module.exports = SequenceDiagram;