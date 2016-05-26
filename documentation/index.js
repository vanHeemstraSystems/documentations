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
  self._foo = 'bar'; // placeholder
}

Documentation.prototype.uml = function() {
  return new DocumentationUML();
}

module.exports = Documentation;