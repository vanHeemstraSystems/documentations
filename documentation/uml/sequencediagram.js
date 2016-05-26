/*
 * Filename: sequencediagram.js
 */

var self = this;

/**
 * Create a new SequenceDiagram that let users create sub-sequencediagram.
 * @return {SequenceDiagram}
 */
function SequenceDiagram() {
  self._foo = 'bar'; // placeholder
}

SequenceDiagram.prototype.append = function() {
  // do something
}

module.exports = SequenceDiagram;