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
  self._directory = 'documentation';
  self._document = 'documentation.html';  
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set 
  self._linktitle = 'UML';
  self._style = 'body { background-color: #ffffff; }'; // Default
  self._title = 'Documentation'; // Default
}

Documentation.prototype.directory = function() {
  return self._directory;
}

Documentation.prototype.setdirectory = function(fnOrValue) {
  self._directory = fnOrValue;
}

Documentation.prototype.document = function() {
  return self._document;
}

Documentation.prototype.setdocument = function(fnOrValue) {
  self._document = fnOrValue;
}

Documentation.prototype.filename = function() {
  return self._filename;
}

Documentation.prototype.setfilename = function(fnOrValue) {
  self._filename = fnOrValue;
}

Documentation.prototype.filepath = function() {
  return self._filepath;
}

Documentation.prototype.setfilepath = function(fnOrValue) {
  self._filepath = fnOrValue;
}

Documentation.prototype.proxies = function() {
  return self._proxies;
}

Documentation.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Documentation.prototype.linktitle = function() {
  return self._linktitle;
}

Documentation.prototype.setlinktitle = function(fnOrValue) {
  self._linktitle = fnOrValue;
}

Documentation.prototype.style = function() {
  return self._style;
}

Documentation.prototype.setstyle= function(fnOrValue) {
  self._style = fnOrValue;
}

Documentation.prototype.title = function() {
  return self._title;
}

Documentation.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

Documentation.prototype.append = function() {} // Will be set

Documentation.prototype.buildHtml = function() {} // Will be set

Documentation.prototype.ensureExists = function() {} // Will be set

Documentation.prototype.uml = function() {
  console.log('documentations documentation uml called')
  /* Creates the ./documentations/documentation/documentation.html page */
  var _document = 'documentation.html'; // this.document(); /* The _document should be 'documentation.html' */
  var _directory = 'documentation'; // this.directory(); /* The _directory should be 'documentation' */
  var _subdirectory = 'uml';
  var _subdocument = 'uml.html';
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

  this._documentationuml = new DocumentationUML();
  /* START OPENING UP ALL BELOW LOGIC STEP BY STEP */
  console.log('documentations documentation uml ------------------- CHECKPOINT 000 --------------------- OK')

  console.log('documentations documentation uml - _document: ', _document) 
  this._documentationuml.setfilename(_document);

  console.log('documentations documentation uml - _path.join(_filepath, _directory): ', _path.join(_filepath, _directory))  
  this._documentationuml.setfilepath(_path.join(_filepath, _directory)); // The _directory should be '.\docs\documentations' */

  this._documentationuml.setproxies(_proxies);
  this._documentationuml.append = this.append; // Assign the function, don't call it
  this._documentationuml.buildHtml = this.buildHtml; // Assign the function, don't call it
  this._documentationuml.ensureExists = this.ensureExists; // Assign the function, don't call it

  var _jsdom = _proxies().proxy().libraries().library().jsdom();
  var _htmlDocument = _jsdom.jsdom().implementation.createHTMLDocument('');

  /* Title: System */
  var _titleElem = _htmlDocument.createElement('title');
  _titleElem.innerHTML = _title;
  console.log('documentations documentation uml - documentation _titleElem: ',
    _titleElem)

  /* Style: Tether */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml - documentation _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../../assets/asset/tether/dist/css/tether.min.css");
  console.log('documentations documentation uml - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Style: Bootstrap */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml - documentation _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../../assets/asset/bootstrap/dist/css/bootstrap.min.css");
  console.log('documentations documentation uml - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Style: Bootstrap - sticky footer */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../../assets/asset/bootstrap/dist/css/sticky-footer-navbar.css");
  console.log('documentations documentation uml _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Style: inline */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml - documentation _styleElem: ',
    _styleElem)
  _styleElem.innerHTML = _style;
  console.log('documentations documentation uml - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Head */
  _headArray.push(_titleElem);

  _styleArray.forEach(function(styleElem) {
    _headArray.push(styleElem); // Possible to add more elements to head
  }, _headArray);

  console.log('documentations documentation uml - documentation _headArray: ',
    _headArray)

  /*
   * Body
   */

  /* Navbar */
  var _navElem = _htmlDocument.createElement("nav");
  _navElem.setAttribute("class",
    "navbar navbar-light bg-faded");
    
  var _ulElem = _htmlDocument.createElement("ul");
  _ulElem.setAttribute("class",
    "nav navbar-nav");

  var _liElem = _htmlDocument.createElement("li");
  _liElem.setAttribute("class",
    "nav-item active");

  var _aElem = _htmlDocument.createElement("a");
  _aElem.setAttribute("class",
    "nav-link");
  _aElem.setAttribute("href",
    "#");
  _aElem.innerHTML = _title; 

  _liElem.appendChild(_aElem);
  _ulElem.appendChild(_liElem);
  _navElem.appendChild(_ulElem);

  _bodyArray.push(_navElem);

  /* Container */
  var _divElem = _htmlDocument.createElement("div");
  _divElem.setAttribute("class",
    "container")

  /* List */
  var _ulElem = _htmlDocument.createElement('ul');
  _ulElem.setAttribute("class",
    "list-group");
  console.log('documentations documentation uml - documentation _ulElem: ',
    _ulElem)

  var _liElem = _htmlDocument.createElement('li');
  _liElem.setAttribute("class",
    "list-group-item");
  console.log('documentations documentation uml - documentation _liElem: ',
  _liElem)

  var _aElem = _htmlDocument.createElement('a');
  console.log('documentations documentation uml - documentation _aElem: ',
    _aElem)

  console.log('documentations documentation uml ------------------- CHECKPOINT 001 ---------------------')
  /* The _subdirectory should be 'documentation' */
  /* The _subdocument should be 'documentation.html' */
  console.log('documentations documentation uml - href:', "./" + _subdirectory + "/" + _subdocument)

  console.log('documentations documentation uml ------------------- CHECKPOINT 002 ---------------------')

  _aElem.setAttribute("href", "./" + _subdirectory + "/" + _subdocument);
  _aElem.innerHTML = _linktitle;
  _liElem.appendChild(_aElem);
  _ulElem.appendChild(_liElem);
  _divElem.appendChild(_ulElem);

  _bodyArray.push(_divElem); // Possible to add more elements to body
  console.log('documentations documentation uml - documentation _bodyArray: ',
    _bodyArray)

  /* Footer */
  var _footerElem = _htmlDocument.createElement("footer");
  _footerElem.setAttribute("class",
    "footer");
  var _divElem = _htmlDocument.createElement("div");
  _divElem.setAttribute("class",
    "container");
  var _spanElem = _htmlDocument.createElement("span");
  _spanElem.setAttribute("class",
    "text_muted");
  _spanElem.innerHTML = "Generated on: " +new Date;

  _divElem.appendChild(_spanElem);
  _footerElem.appendChild(_divElem);

  _bodyArray.push(_footerElem);

  /* Scripts, put at bottom of body to make the page load faster */

  /* Script: JQuery */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../assets/asset/jquery/dist/js/jquery.min.js");
  console.log('documentations documentation uml - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Tether */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../assets/asset/tether/dist/js/tether.min.js");
  console.log('documentations documentation uml - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Bootstrap */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../assets/asset/bootstrap/dist/js/bootstrap.min.js");
  console.log('documentations documentation uml - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  _scriptArray.forEach(function(scriptElem) {
    _bodyArray.push(scriptElem);
  }, _bodyArray);

  this._documentationuml.append(_headArray, _bodyArray);

  return this._documentationuml;
}

module.exports = Documentation;