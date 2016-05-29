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
  self._append = {}; // Will be set	
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set
  self._title = 'UML'; // Default
}

UML.prototype.append = function() {
  return self._append;
}

UML.prototype.setappend = function(fnOrValue) {
  self._append = fnOrValue;
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

UML.prototype.title = function() {
  return self._title;
}

UML.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

UML.prototype.append = function() {} // Will be set
// REMOVE ALL BELOW
// UML.prototype.append = function() {
//   console.log('documentations documentation uml - append() called')
//   // temporarily we do all the file creation and appending in here
//   // move most of this logic out to its best location. e.g. at documentation level
//   //var fs = self._proxies.proxy().libraries().library().fs(); // DOESN'T WORK!!
//   var path = self._proxies.proxy().libraries().library().path();
//   var filePathAndName = path.join(self._filepath, self._filename);
//   var _buildHtml = this.buildHtml();
//   this.ensureExists(self._filepath, 0744, function(err) {
//     if (err) { // handle folder creation error
//       console.log('documentations documentation uml - error', err)
//     }
//     else { // we're all good
//       var fs = require('fs');
//       var stream = fs.createWriteStream(filePathAndName);
//       stream.once('open', function(fd) {
//         var html = _buildHtml;

//         stream.end(html);
//       });    	
//     }
//   });
// }

UML.prototype.buildHtml = function() {} // Will be set
// REMOVE ALL BELOW
// UML.prototype.buildHtml = function() {
//   console.log('documentations documentation uml - buildHtml() called')
//   var header = '';
//   var body = '';
//   // concatenate header string
//   // concatenate body string
//   return '<!DOCTYPE html>'
//        + '<html><header>' + header + '</header><body>' + body + '</body></html>';
// };


UML.prototype.ensureExists = function() {} // Will be set
// REMOVE ALL BELOW
// This function is documented here:
// http://lmws.net/making-directory-along-with-missing-parents-in-node-js
// UML.prototype.ensureExists = function(path, mask, callback) {
//   console.log('documentations documentation uml - ensureExists(path, mask, callback) called')
//   console.log('documentations documentation uml - ensureExists: path: ', path)
//   console.log('documentations documentation uml - ensureExists: mask: ', mask)
//   if (typeof mask == 'function') { // Allow the `mask` parameter to be optional
//     callback = mask;
//     mask = 0777; // Read and Write permissions
//   }
//   var fs = require('fs');
//   fs.mkdir(path, mask, function(error) {
//     if (error) {
//       if (error.code == 'EEXIST') {
//       	// Ignore the error if the folder already exists
//       	callback(null);
//       }
//       else { 
//       	// Something else went wrong
//         // When it fail in this way, do the custom steps
//         if (error && error.errno === 34) {
//           // Create all the parents recursively
//           fs.mkdirParent(path.dirname(dirPath), mode, callback);
//           // And then the directory
//           fs.mkdirParent(dirPath, mode, callback);
//         }
//         // Manually run the callback since we used our own callback to do all these
//         callback && callback(error);
//       }
//     } 
//     else { 
//       // Successfully created folder
//       callback(null);
//     }
//   });
// };

UML.prototype.sequencediagram = function() {
  console.log('documentations documentation uml sequencediagram called')
  var _document = 'sequencediagram.html';
  var _directory = 'sequencediagram';
  var _proxies = this.proxies();
  var _path = _proxies.proxy().libraries().library().path();
  var _filepath = this.filepath();
  var _title = this.title();
  var _linktitle = 'Sequence Diagram';

  this._umlsequencediagram = new UMLSequenceDiagram();
  this._umlsequencediagram.setfilename(_document);
  this._umlsequencediagram.setfilepath(_path.join(_filepath, _directory));
  this._umlsequencediagram.setproxies(_proxies);

  this._umlsequencediagram.append = this.append();
  this._umlsequencediagram.buildHtml = this.buildHtml();
  this._umlsequencediagram.ensureExists = this.ensureExists();

  this._umlsequencediagram.append('<title>' + _title + '</title>',
  	'<h1>' + _title + '</h1><ul><li><a href="./' + _directory + '/' + _document + '">' + _linktitle + '</a></li></ul>');
  return this._umlsequencediagram;
}

module.exports = UML;