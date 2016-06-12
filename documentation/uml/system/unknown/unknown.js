/*
 * Filename: unknown.js
 */

var self = this;

/**
 * Create a new Unknown that let users create sub-unknown.
 * @return {Unknown}
 */
function Unknown() {
  self._directory = 'unknown';
  self._document = 'unknown.html';
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set
  self._linktitle = 'Foo';
  self._style = 'body { background-color: #ffffff; }'; // Default   
  self._title = 'Unknown'; // Default
}

module.exports = Unknown;