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
  self._directory = 'uml';
  self._document = 'uml.html';
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set 
  self._linktitle = 'Sequence Diagram';
  self._style = 'body { background-color: #ffffff; }'; // Default
  self._title = 'UML'; // Default
}

UML.prototype.directory = function() {
  return self._directory;
}

UML.prototype.setdirectory = function(fnOrValue) {
  self._directory = fnOrValue;
}

UML.prototype.document = function() {
  return self._document;
}

UML.prototype.setdocument = function(fnOrValue) {
  self._document = fnOrValue;
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

UML.prototype.linktitle = function() {
  return self._linktitle;
}

UML.prototype.setlinktitle = function(fnOrValue) {
  self._linktitle = fnOrValue;
}

UML.prototype.proxies = function() {
  return self._proxies;
}

UML.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

UML.prototype.style = function() {
  return self._style;
}

UML.prototype.setstyle= function(fnOrValue) {
  self._style = fnOrValue;
}

UML.prototype.title = function() {
  return self._title;
}

UML.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

UML.prototype.append = function() {} // Will be set

UML.prototype.buildHtml = function() {} // Will be set

UML.prototype.ensureExists = function() {} // Will be set

UML.prototype.sequencediagram = function() {
  console.log('documentations documentation uml called')
  /* Creates the ./documentations/documentation/documentation.html page */
  var _document = 'uml.html'; // this.document(); /* The _document should be 'uml.html' */
  var _directory = 'uml'; // this.directory(); /* The _directory should be 'uml' */
  var _subdirectory = 'sequencediagram';
  var _subdocument = 'sequencediagram.html';
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

  this._umlsequencediagram = new UMLSequenceDiagram();
  /* START OPENING UP ALL BELOW LOGIC STEP BY STEP */
  console.log('documentations documentation uml sequencediagram ------------------- CHECKPOINT 000 --------------------- OK')

  console.log('documentations documentation uml sequencediagram - _document: ', _document) 
  this._umlsequencediagram.setfilename(_document);

  console.log('documentations documentation sequencediagram uml - _path.join(_filepath, _directory): ', _path.join(_filepath, _directory))  
  this._umlsequencediagram.setfilepath(_path.join(_filepath, _directory)); // The _directory should be '.\docs\documentations' */

  this._umlsequencediagram.setproxies(_proxies);
  this._umlsequencediagram.append = this.append; // Assign the function, don't call it
  this._umlsequencediagram.buildHtml = this.buildHtml; // Assign the function, don't call it
  this._umlsequencediagram.ensureExists = this.ensureExists; // Assign the function, don't call it

  var _jsdom = _proxies().proxy().libraries().library().jsdom();
  var _htmlDocument = _jsdom.jsdom().implementation.createHTMLDocument('');

  /* Title: System */
  var _titleElem = _htmlDocument.createElement('title');
  _titleElem.innerHTML = _title;
  console.log('documentations documentation uml sequencediagram - documentation _titleElem: ',
    _titleElem)

  /* Style: Tether */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml sequencediagram - documentation _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../../../assets/asset/tether/dist/css/tether.min.css");
  console.log('documentations documentation uml sequencediagram - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Style: Bootstrap */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml sequencediagram - documentation _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../../../assets/asset/bootstrap/dist/css/bootstrap.min.css");
  console.log('documentations documentation uml sequencediagram - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Style: Bootstrap - sticky footer */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml sequencediagram _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../../../assets/asset/bootstrap/dist/css/sticky-footer-navbar.css");
  console.log('documentations documentation uml sequencediagram _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Style: inline */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml sequencediagram - documentation _styleElem: ',
    _styleElem)
  _styleElem.innerHTML = _style;
  console.log('documentations documentation uml sequencediagram - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Head */
  _headArray.push(_titleElem);

  _styleArray.forEach(function(styleElem) {
    _headArray.push(styleElem); // Possible to add more elements to head
  }, _headArray);

  console.log('documentations documentation uml sequencediagram - documentation _headArray: ',
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
  console.log('documentations documentation uml sequencediagram - documentation _ulElem: ',
    _ulElem)

  var _liElem = _htmlDocument.createElement('li');
  _liElem.setAttribute("class",
    "list-group-item");
  console.log('documentations documentation uml sequencediagram - documentation _liElem: ',
  _liElem)

  var _aElem = _htmlDocument.createElement('a');
  console.log('documentations documentation uml sequencediagram - documentation _aElem: ',
    _aElem)

  console.log('documentations documentation uml sequencediagram ------------------- CHECKPOINT 001 ---------------------')
  /* The _subdirectory should be 'documentation' */
  /* The _subdocument should be 'documentation.html' */
  console.log('documentations documentation uml sequencediagram - href:', "./" + _subdirectory + "/" + _subdocument)

  console.log('documentations documentation uml sequencediagram ------------------- CHECKPOINT 002 ---------------------')

  _aElem.setAttribute("href", "./" + _subdirectory + "/" + _subdocument);
  _aElem.innerHTML = _linktitle;
  _liElem.appendChild(_aElem);
  _ulElem.appendChild(_liElem);
  _divElem.appendChild(_ulElem);

  _bodyArray.push(_divElem); // Possible to add more elements to body
  console.log('documentations documentation uml sequencediagram - documentation _bodyArray: ',
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
  _scriptElem.setAttribute("src", "../../../../../assets/asset/jquery/dist/js/jquery.min.js");
  console.log('documentations documentation uml sequencediagram - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Tether */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../../assets/asset/tether/dist/js/tether.min.js");
  console.log('documentations documentation uml sequencediagram - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Bootstrap */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../../assets/asset/bootstrap/dist/js/bootstrap.min.js");
  console.log('documentations documentation uml sequencediagram - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  _scriptArray.forEach(function(scriptElem) {
    _bodyArray.push(scriptElem);
  }, _bodyArray);

  this._umlsequencediagram.append(_headArray, _bodyArray);

  return this._umlsequencediagram;
}

module.exports = UML;