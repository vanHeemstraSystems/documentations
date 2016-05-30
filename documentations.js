/*
 * Filename: documentations.js
 */
var DocumentationsDocumentation = require(__dirname+'/documentation.js');

var self = this; // Set the context locally, for access protection

/**
 * Create a new Documentations that let users create sub-documentations.
 * @return {Documentations}
 */
function Documentations() { 
  self._proxies = {}; // Will be set
  self._filepath = ''; // Will be set
  self._filename = ''; // Will be set
  self._title = 'Documentations'; // Will be set
}

Documentations.prototype.proxies = function() {
  return self._proxies;
}

Documentations.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Documentations.prototype.filepath = function() {
  return self._filepath;
}

Documentations.prototype.setfilepath = function(fnOrValue) {
  self._filepath = fnOrValue;
}

Documentations.prototype.filename = function() {
  return self._filename;
}

Documentations.prototype.setfilename = function(fnOrValue) {
  self._filename = fnOrValue;
}

Documentations.prototype.title = function() {
  return self._title;
}

Documentations.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

/**
 * Create a new DocumentationsDocumentation object.
 * @return {DocumentationsDocumentation}
 */
Documentations.prototype.documentation = function() {
  console.log('documentations documentation called')
  var _document = 'documentation.html';
  var _directory = 'documentation';
  var _proxies = this.proxies();
  var _filepath = this.filepath();
  var _title = this.title();
  var _linktitle = 'Documentation';
  var _path = _proxies().proxy().libraries().library().path();
  this._documentationsdocumentation = new DocumentationsDocumentation();
  this._documentationsdocumentation.setfilename(_document);
  this._documentationsdocumentation.setfilepath(_path.join(_filepath, _directory));
  this._documentationsdocumentation.setproxies(_proxies);
  this._documentationsdocumentation.append = this.append; // Assign the function, don't call it
  this._documentationsdocumentation.buildHtml = this.buildHtml; // Assign the function, don't call it
  this._documentationsdocumentation.ensureExists = this.ensureExists; // Assign the function, don't call it

  // Works up to here!

  // START TEST AREA
  var _jsdom = _proxies().proxy().libraries().library().jsdom();
  var _document = _jsdom.jsdom().implementation.createHTMLDocument('');
  var _script = _document.createElement("script");

  // Create a Node that contains the Title to go into the Head of the HTML Document
  var _title = _document.createElement("title");
  console.log('+++++++++++++++++++++++++++++++ _title: ', _title)

  // Create a Node that contains the Links to go into the Body of the HTML Document 
  var _ul = _document.createElement("ul");
  console.log('+++++++++++++++++++++++++++++++ _ul: ', _ul)

  // END TEST AREA

  this._documentationsdocumentation.append('<title>' + _title + '</title>','<h1>' + _title + '</h1><ul><li><a href="./' + _directory + '/' + _document + '">' + _linktitle + '</a></li></ul>');
  return this._documentationsdocumentation;
}

Documentations.prototype.append = function(header, body) {
  console.log('documentations append called')
  var _header = typeof header !== 'undefined' ? header : '';
  var _body = typeof body !== 'undefined' ? body : '';
  var _proxies = this.proxies();
  var _filepath = this.filepath();
  var _filename = this.filename();
  // temporarily we do all the file creation and appending in here
  // move most of this logic out to its best location. e.g. at documentation level

  console.log('documentations - append(header, body) +++++++ CHECKPOINT 000');

  var _path = _proxies().proxy().libraries().library().path();

  console.log('documentations - append(header, body) +++++++ CHECKPOINT 001');

  var filePathAndName = _path.join(_filepath, _filename);

  var _buildHtml = this.buildHtml(_header, _body);

  console.log('documentations - append(header, body) +++++++ CHECKPOINT 003');

  this.ensureExists(_filepath, 0744, function(err) {
    if (err) { // handle folder creation error
      console.log('documentations - error', err)
    }
    else { // we're all good
      var fs = _proxies().proxy().libraries().library().fs();
      var stream = fs.createWriteStream(filePathAndName);
      stream.once('open', function(fd) {
        var html = _buildHtml;

        stream.end(html);
      });    	
    }
  });
  console.log('documentations - append(header, body) +++++++ CHECKPOINT 004');
}

Documentations.prototype.buildHtml = function(head, body) {
  console.log('documentations - buildHtml(head, body) called')
  var head = typeof head !== 'undefined' ? head : '';
  var body = typeof body !== 'undefined' ? body : '';
  // concatenate head string
  // concatenate body string


  // START OF TEST AREA
  var _proxies = this.proxies();
  var _jsdom = _proxies().proxy().libraries().library().jsdom();
  var _document = _jsdom.jsdom().implementation.createHTMLDocument('');
  //_document.head.appendChild(head);
  //_document.body.appendChild(body);
  //For example: _document.body.setAttribute('onscroll', 'foo');

  console.log('documentations - buildHtml(head, body) _document: ', _document)

  // END OF TEST AREA


  return '<!DOCTYPE html>'
       + '<html><head>' + head + '</head><body>' + body + '</body></html>';
};

// This function is documented here:
// http://lmws.net/making-directory-along-with-missing-parents-in-node-js
Documentations.prototype.ensureExists = function(path, mask, callback) {
  console.log('documentations - ensureExists(path, mask, callback) called')
  console.log('documentations - ensureExists: path: ', path)
  console.log('documentations - ensureExists: mask: ', mask)
  if (typeof mask == 'function') { // Allow the `mask` parameter to be optional
    callback = mask;
    mask = 0777; // Read and Write permissions
  }
  var fs = require('fs');
  fs.mkdir(path, mask, function(error) {
    if (error) {
      if (error.code == 'EEXIST') {
      	// Ignore the error if the folder already exists
      	callback(null);
      }
      else { 
      	// Something else went wrong
        // When it fail in this way, do the custom steps
        if (error && error.errno === 34) {
          // Create all the parents recursively
          fs.mkdirParent(path.dirname(dirPath), mode, callback);
          // And then the directory
          fs.mkdirParent(dirPath, mode, callback);
        }
        // Manually run the callback since we used our own callback to do all these
        callback && callback(error);
      }
    } 
    else { 
      // Successfully created folder
      callback(null);
    }
  });
};

module.exports = Documentations;
