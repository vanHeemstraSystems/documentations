/*
 * Filename: sequencediagram.js
 */
var SequenceDiagramSystem = require(__dirname+'/system/system.js');

var self = this;

/**
 * Create a new SequenceDiagram that let users create sub-sequencediagram.
 * @return {SequenceDiagram}
 */
function SequenceDiagram() {
  self._directory = 'sequencediagram';
  self._document = 'sequencediagram.html';
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set
  self._linktitle = 'System';
  self._style = 'body { background-color: #ffffff; }'; // Default   
  self._title = 'Sequence Diagram'; // Default
}

SequenceDiagram.prototype.directory = function() {
  return self._directory;
}

SequenceDiagram.prototype.setdirectory = function(fnOrValue) {
  self._directory = fnOrValue;
}

SequenceDiagram.prototype.document = function() {
  return self._document;
}

SequenceDiagram.prototype.setdocument = function(fnOrValue) {
  self._document = fnOrValue;
}

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

SequenceDiagram.prototype.linktitle = function() {
  return self._linktitle;
}

SequenceDiagram.prototype.setlinktitle = function(fnOrValue) {
  self._linktitle = fnOrValue;
}

SequenceDiagram.prototype.proxies = function() {
  return self._proxies;
}

SequenceDiagram.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

SequenceDiagram.prototype.style = function() {
  return self._style;
}

SequenceDiagram.prototype.setstyle = function(fnOrValue) {
  self._style = fnOrValue;
}

SequenceDiagram.prototype.title = function() {
  return self._title;
}

SequenceDiagram.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

SequenceDiagram.prototype.append = function() {} // Will be set

SequenceDiagram.prototype.buildHtml = function() {} // Will be set

SequenceDiagram.prototype.ensureExists = function() {} // Will be set

SequenceDiagram.prototype.system = function() {
  console.log('documentations documentation uml sequencediagram system called')
  /* Creates the ./documentations/documentation/documentation.html page */
  var _document = 'sequencediagram.html'; // this.document(); /* The _document should be 'sequencediagram.html' */
  var _directory = 'sequencediagram'; // this.directory(); /* The _directory should be 'sequencediagram' */
  var _subdirectory = 'system';
  var _subdocument = 'system.html';
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

  this._sequencediagramsystem = new SequenceDiagramSystem();
  /* START OPENING UP ALL BELOW LOGIC STEP BY STEP */
  console.log('documentations documentation uml sequencediagram ------------------- CHECKPOINT 000 --------------------- OK')

  console.log('documentations documentation uml sequencediagram - _document: ', _document) 
  this._sequencediagramsystem.setfilename(_document);

  console.log('documentations documentation sequencediagram uml - _path.join(_filepath, _directory): ', _path.join(_filepath, _directory))  
  this._sequencediagramsystem.setfilepath(_path.join(_filepath, _directory)); // The _directory should be '.\docs\documentations' */

  this._sequencediagramsystem.setproxies(_proxies);
  this._sequencediagramsystem.append = this.append; // Assign the function, don't call it
  this._sequencediagramsystem.buildHtml = this.buildHtml; // Assign the function, don't call it
  this._sequencediagramsystem.ensureExists = this.ensureExists; // Assign the function, don't call it

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
    "../../../../../../assets/asset/tether/dist/css/tether.min.css");
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
    "../../../../../../assets/asset/bootstrap/dist/css/bootstrap.min.css");
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
    "../../../../../../assets/asset/bootstrap/dist/css/sticky-footer-navbar.css");
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
  _scriptElem.setAttribute("src", "../../../../../../assets/asset/jquery/dist/js/jquery.min.js");
  console.log('documentations documentation uml sequencediagram - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Tether */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../../../assets/asset/tether/dist/js/tether.min.js");
  console.log('documentations documentation uml sequencediagram - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Bootstrap */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../../../assets/asset/bootstrap/dist/js/bootstrap.min.js");
  console.log('documentations documentation uml sequencediagram - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Raphael */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../../../assets/asset/raphael/dist/js/raphael.min.js");
  console.log('documentations documentation uml sequencediagram - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  _scriptArray.forEach(function(scriptElem) {
    _bodyArray.push(scriptElem);
  }, _bodyArray);

  this._sequencediagramsystem.append(_headArray, _bodyArray);

  return this._sequencediagramsystem;
}

module.exports = SequenceDiagram;