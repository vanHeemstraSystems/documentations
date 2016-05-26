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
  self._proxies = {}; 
}

SequenceDiagram.prototype.append = function(fileName) {
  // Note: fileName includes path; e.g.	'path/to/file'
  // temporarily we do all the file creation and appending in here
  // move most of this logic out to its best location. e.g. at documentation level
  var fs = self._proxies.proxy().libraries().library().fs(); // WAS require('fs');
  //var fileName = fileName;
  var stream = fs.createWriteStream(fileName);
  stream.once('open', function(fd) {
    var html = self.buildHtml();

    stream.end(html);
  });
}

SequenceDiagram.prototype.buildHtml = function() {
  var header = '';
  var body = '';
  // concatenate header string
  // concatenate body string
  return '<!DOCTYPE html>'
       + '<html><header>' + header + '</header><body>' + body + '</body></html>';
};

SequenceDiagram.prototype.proxies = function() {
  return self._proxies;
}

SequenceDiagram.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

module.exports = SequenceDiagram;