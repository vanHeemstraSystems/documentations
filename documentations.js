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
  self._directory = 'documentation';
  self._document = 'documentation.html';	
  self._proxies = {}; // Will be set
  self._filepath = ''; // Will be set
  self._filename = ''; // Will be set
  self._linktitle = 'Documentation';  
  self._style = 'body { background-color: #ffffff; }'; // Default
  self._title = 'Documentations'; // Will be set
}

Documentations.prototype.directory = function() {
  return self._directory;
}

Documentations.prototype.setdirectory = function(fnOrValue) {
  self._directory = fnOrValue;
}

Documentations.prototype.document = function() {
  return self._document;
}

Documentations.prototype.setdocument = function(fnOrValue) {
  self._document = fnOrValue;
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

Documentations.prototype.linktitle = function() {
  return self._linktitle;
}

Documentations.prototype.setlinktitle = function(fnOrValue) {
  self._linktitle = fnOrValue;
}

Documentations.prototype.style = function() {
  return self._style;
}

Documentations.prototype.setstyle= function(fnOrValue) {
  self._style = fnOrValue;
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
  var _document = this.document();
  var _directory = this.directory();
  var _proxies = this.proxies();
  var _filepath = this.filepath();
  var _title = this.title();
  var _style = this.style();
  var _linktitle = this.linktitle();
  var _styleArray = [];
  var _scriptArray = [];  
  var _headArray = [];
  var _bodyArray = [];
  var _path = _proxies().proxy().libraries().library().path();

  this._documentationsdocumentation = new DocumentationsDocumentation();

  /* START OPENING UP ALL BELOW LOGIC STEP BY STEP */

  console.log('documentations documentation - _document: ', _document) // 'documentation.html' 
  this._documentationsdocumentation.setfilename(_document);

  console.log('documentations documentation - _path.join(_filepath, _directory): ', _path.join(_filepath, _directory))  
  this._documentationsdocumentation.setfilepath(_path.join(_filepath, _directory));

  this._documentationsdocumentation.setproxies(_proxies);
  this._documentationsdocumentation.append = this.append; // Assign the function, don't call it
  this._documentationsdocumentation.buildHtml = this.buildHtml; // Assign the function, don't call it
  this._documentationsdocumentation.ensureExists = this.ensureExists; // Assign the function, don't call it

  var _jsdom = _proxies().proxy().libraries().library().jsdom();
  var _htmlDocument = _jsdom.jsdom().implementation.createHTMLDocument('');

  /* Title: System */
  var _titleElem = _htmlDocument.createElement('title');
  _titleElem.innerHTML = _title;
  console.log('documentations documentation - documentation _titleElem: ',
    _titleElem)

  /* Style: Tether */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation - documentation _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../assets/asset/tether/dist/css/tether.min.css");
  console.log('++++++++++++++ documentations documentation - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

/*

  var _styleElem = _htmlDocument.createElement('style');
  _styleElem.innerHTML = _style;
  console.log('documentations - documentation _styleElem: ',
    _styleElem)

  console.log('documentations - documentation _titleElem: ', _titleElem)
  _headArray.push(_titleElem); 
  _headArray.push(_styleElem); // Possible to add more Elements to head 
 
  // Create a Node that contains the Links to go into the Body of the HTML Document 
  var _ulElem = _htmlDocument.createElement('ul');
  console.log('documentations - documentation _ulElem: ',
    _ulElem)
  var _liElem = _htmlDocument.createElement('li');
  console.log('documentations - documentation _liElem: ',
    _liElem)
  var _aElem = _htmlDocument.createElement('a');
  console.log('documentations - documentation _aElem: ',
    _aElem)
  _aElem.setAttribute("href", "./" + _directory + "/" + _document);
  _aElem.innerHTML = _linktitle;
  _liElem.appendChild(_aElem);
  _ulElem.appendChild(_liElem);

  _bodyArray.push(_ulElem); // Possible to add more Elements to body

  this._documentationsdocumentation.append(_headArray, _bodyArray);
*/
  return this._documentationsdocumentation;
}

Documentations.prototype.append = function(headArray, bodyArray) {
  console.log('documentations append(headArray, bodyArray) called')
  var _headArray = typeof headArray !== 'undefined' ? headArray : [];
  var _bodyArray = typeof bodyArray !== 'undefined' ? bodyArray : [];
  var _proxies = this.proxies();
  var _filepath = this.filepath();
  var _filename = this.filename();
  // temporarily we do all the file creation and appending in here
  // move most of this logic out to its best location. e.g. at documentation level
  var _path = _proxies().proxy().libraries().library().path();

  var filePathAndName = _path.join(_filepath, _filename);

  console.log('documentations - append(headArray, bodyArray) _headArray: ', _headArray);
  console.log('documentations - append(headArray, bodyArray) _bodyArray: ', _bodyArray);  

  var _buildHtml = this.buildHtml(_headArray, _bodyArray);

  this.ensureExists(_filepath, 0744, function(err) {
    if (err) { // Handle folder creation error
      console.log('documentations - error', err)
    }
    else { // We're all good
      var fs = _proxies().proxy().libraries().library().fs();
      var stream = fs.createWriteStream(filePathAndName);
      stream.once('open', function(fd) {
      	console.log('documentations - append(headArray, bodyArray) _buildHtml: ', _buildHtml);
        var _jsdom = _proxies().proxy().libraries().library().jsdom();
        var _html = _jsdom.serializeDocument(_buildHtml); // Converts DOM Object to HTML as a String
        console.log('documentations - append(headArray, bodyArray) _html: ', _html);
        stream.end(_html);
      });    	
    }
  });
}

Documentations.prototype.buildHtml = function(headArray, bodyArray) {
  console.log('documentations - buildHtml(headArray, bodyArray) called')
  var _headArray = typeof headArray !== 'undefined' ? headArray : [];
  var _bodyArray = typeof bodyArray !== 'undefined' ? bodyArray : [];
  // concatenate head string
  // concatenate body string

  var _proxies = this.proxies();
  var _jsdom = _proxies().proxy().libraries().library().jsdom();
  var _htmlDocument = _jsdom.jsdom().implementation.createHTMLDocument('');
  _htmlDocument.head.innerHTML = ''; // Removes the default title element

  console.log('documentations - buildHtml(headArray, bodyArray) _headArray: ', _headArray);
  console.log('documentations - buildHtml(headArray, bodyArray) _bodyArray: ', _bodyArray);

  _headArray.forEach( function(entry) {
    _htmlDocument.head.appendChild(entry);
  }, _htmlDocument);

  _bodyArray.forEach( function(entry) {
    _htmlDocument.body.appendChild(entry);
  }, _htmlDocument);

  console.log('documentations - buildHtml(headArray, bodyArray) _htmlDocument: ', _htmlDocument)

  return _htmlDocument;
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
