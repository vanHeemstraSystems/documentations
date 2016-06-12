/*
 * Filename: system.js
 */
var SystemUnknown = require(__dirname+'/unknown/unknown.js');

var self = this;

/**
 * Create a new System that let users create sub-system.
 * @return {System}
 */
function System() {
  self._directory = 'system';
  self._document = 'system.html';
  self._filename = ''; // Will be set
  self._filepath = ''; // Will be set
  self._proxies = {}; // Will be set
  self._linktitle = 'Unknown';
  self._style = 'body { background-color: #ffffff; }'; // Default   
  self._title = 'System'; // Default
}

System.prototype.directory = function() {
  return self._directory;
}

System.prototype.setdirectory = function(fnOrValue) {
  self._directory = fnOrValue;
}

System.prototype.document = function() {
  return self._document;
}

System.prototype.setdocument = function(fnOrValue) {
  self._document = fnOrValue;
}

System.prototype.filename = function() {
  return self._filename;
}

System.prototype.setfilename = function(fnOrValue) {
  self._filename = fnOrValue;
}

System.prototype.filepath = function() {
  return self._filepath;
}

System.prototype.setfilepath = function(fnOrValue) {
  self._filepath = fnOrValue;
}

System.prototype.linktitle = function() {
  return self._linktitle;
}

System.prototype.setlinktitle = function(fnOrValue) {
  self._linktitle = fnOrValue;
}

System.prototype.proxies = function() {
  return self._proxies;
}

System.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

System.prototype.style = function() {
  return self._style;
}

System.prototype.setstyle = function(fnOrValue) {
  self._style = fnOrValue;
}

System.prototype.title = function() {
  return self._title;
}

System.prototype.settitle = function(fnOrValue) {
  self._title = fnOrValue;
}

System.prototype.append = function() {} // Will be set

System.prototype.buildHtml = function() {} // Will be set

System.prototype.ensureExists = function() {} // Will be set

System.prototype.unknown = function() {
  console.log('documentations documentation unknown called')
  /* Creates the ./documentations/documentation/documentation.html page */
  var _document = 'system.html'; // this.document(); /* The _document should be 'system.html' */
  var _directory = 'system'; // this.directory(); /* The _directory should be 'system' */
  var _subdirectory = 'unknown';
  var _subdocument = 'unknown.html';
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

  this._systemunknown = new SystemUnkown();
  /* START OPENING UP ALL BELOW LOGIC STEP BY STEP */
  console.log('documentations documentation uml sequencediagram system ------------------- CHECKPOINT 000 --------------------- OK')

  console.log('documentations documentation uml sequencediagram system - _document: ', _document) 
  this._systemunknown.setfilename(_document);

  console.log('documentations documentation uml sequencediagram system - _path.join(_filepath, _directory): ', _path.join(_filepath, _directory))  
  this._systemunknown.setfilepath(_path.join(_filepath, _directory)); // The _directory should be '.\docs\documentations' */

  this._systemunknown.setproxies(_proxies);
  this._systemunknown.append = this.append; // Assign the function, don't call it
  this._systemunknown.buildHtml = this.buildHtml; // Assign the function, don't call it
  this._systemunknown.ensureExists = this.ensureExists; // Assign the function, don't call it

  var _jsdom = _proxies().proxy().libraries().library().jsdom();
  var _htmlDocument = _jsdom.jsdom().implementation.createHTMLDocument('');

  /* Title: System */
  var _titleElem = _htmlDocument.createElement('title');
  _titleElem.innerHTML = _title;
  console.log('documentations documentation uml sequencediagram system - documentation _titleElem: ',
    _titleElem)

  /* Style: Tether */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml sequencediagram system - documentation _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../../../../assets/asset/tether/dist/css/tether.min.css");
  console.log('documentations documentation uml sequencediagram system - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Style: Bootstrap */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml sequencediagram system - documentation _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../../../../assets/asset/bootstrap/dist/css/bootstrap.min.css");
  console.log('documentations documentation uml sequencediagram system - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Style: Bootstrap - sticky footer */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml sequencediagram system _styleElem: ',
    _styleElem)
  _styleElem.setAttribute("rel",
    "stylesheet");
  _styleElem.setAttribute("type",
    "text/css");
  _styleElem.setAttribute("href",
    "../../../../../../assets/asset/bootstrap/dist/css/sticky-footer-navbar.css");
  console.log('documentations documentation uml sequencediagram system _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Style: inline */
  var _styleElem = _htmlDocument.createElement('link');
  console.log('documentations documentation uml sequencediagram system - documentation _styleElem: ',
    _styleElem)
  _styleElem.innerHTML = _style;
  console.log('documentations documentation uml sequencediagram system - documentation _styleElem: ',
    _styleElem)

  _styleArray.push(_styleElem);

  /* Head */
  _headArray.push(_titleElem);

  _styleArray.forEach(function(styleElem) {
    _headArray.push(styleElem); // Possible to add more elements to head
  }, _headArray);

  console.log('documentations documentation uml sequencediagram system - documentation _headArray: ',
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
  console.log('documentations documentation uml sequencediagram system - documentation _ulElem: ',
    _ulElem)

  var _liElem = _htmlDocument.createElement('li');
  _liElem.setAttribute("class",
    "list-group-item");
  console.log('documentations documentation uml sequencediagram system - documentation _liElem: ',
  _liElem)

  var _aElem = _htmlDocument.createElement('a');
  console.log('documentations documentation uml sequencediagram system - documentation _aElem: ',
    _aElem)

  console.log('documentations documentation uml sequencediagram system ------------------- CHECKPOINT 001 ---------------------')
  /* The _subdirectory should be 'documentation' */
  /* The _subdocument should be 'documentation.html' */
  console.log('documentations documentation uml sequencediagram system - href:', "./" + _subdirectory + "/" + _subdocument)

  console.log('documentations documentation uml sequencediagram system ------------------- CHECKPOINT 002 ---------------------')

  _aElem.setAttribute("href", "./" + _subdirectory + "/" + _subdocument);
  _aElem.innerHTML = _linktitle;
  _liElem.appendChild(_aElem);
  _ulElem.appendChild(_liElem);
  _divElem.appendChild(_ulElem);

  _bodyArray.push(_divElem); // Possible to add more elements to body
  console.log('documentations documentation uml sequencediagram system - documentation _bodyArray: ',
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
  console.log('documentations documentation uml sequencediagram system - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Tether */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../../../assets/asset/tether/dist/js/tether.min.js");
  console.log('documentations documentation uml sequencediagram system - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Bootstrap */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../../../assets/asset/bootstrap/dist/js/bootstrap.min.js");
  console.log('documentations documentation uml sequencediagram system - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  /* Script: Raphael */
  var _scriptElem = _htmlDocument.createElement('script');
  _scriptElem.setAttribute("type", "text/javascript");
  _scriptElem.setAttribute("src", "../../../../../../assets/asset/raphael/dist/js/raphael.min.js");
  console.log('documentations documentation uml sequencediagram system - documentation _scriptElem: ',
    _scriptElem)

  _scriptArray.push(_scriptElem);

  _scriptArray.forEach(function(scriptElem) {
    _bodyArray.push(scriptElem);
  }, _bodyArray);

  this._systemunknown.append(_headArray, _bodyArray);

  return this._systemunknown;
}

module.exports = System;