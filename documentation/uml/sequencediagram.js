/*
 * Filename: sequencediagram.js
 */

var self = this;

/**
 * Create a new SequenceDiagram that let users create sub-sequencediagram.
 * @return {SequenceDiagram}
 */
function SequenceDiagram() {
  self._filename = ''; // placeholder
  self._filepath = ''; // placeholder
  self._proxies = {};
}

SequenceDiagram.prototype.append = function() {
  // temporarily we do all the file creation and appending in here
  // move most of this logic out to its best location. e.g. at documentation level
  var fs = self._proxies.proxy().libraries().library().fs(); // WAS require('fs');
  var path = self._proxies.proxy().libraries().library().path();
  var filePathAndName = path.join(self._filepath,self._filename);
  var stream = fs.createWriteStream(filePathAndName);
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

module.exports = SequenceDiagram;