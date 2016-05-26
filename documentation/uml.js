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
  self._foo = 'bar'; // placeholder
}

UML.prototype.sequencediagram = function() {
  return new UMLSequenceDiagram();
}

module.exports = UML;