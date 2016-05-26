/*
 * Filename: documentations.js
 */
var DocumentationsDocumentation = require(__dirname+'/documentation.js');

/**
 * Create a new Documentations that let users create sub-documentations.
 * @return {Documentations}
 */
function Documentations() { }

/**
 * Create a new DocumentationsDocumentation object.
 * @return {DocumentationsDocumentation}
 */
Documentations.prototype.documentation = function() {
  return new DocumentationsDocumentation();
}

module.exports = Documentations;
