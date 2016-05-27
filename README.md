#Documentations
Documentations

We have chosen JSDoc as the documentation generator tool of our choice, based on this review (http://www.fusioncharts.com/blog/2013/12/jsdoc-vs-yuidoc-vs-doxx-vs-docco-choosing-a-javascript-documentation-generator/).

See also https://github.com/jsdoc3/jsdoc

Adding JSDoc comments to CommonJS and Node.js modules.
http://usejsdoc.org/howto-commonjs-modules.html

##Generating A Website

Once your code is commented, you can use the JSDoc 3 Tool to generate an HTML website from the source.

By default, JSDoc will use the "default" template to turn the documentation data into HTML. You can edit this template to suit your own needs, or create an entirely new template if that is what you prefer.

Running the documentation generator on the command line.
./jsdoc sample.js

This command will create a folder named "out" in the current working directory. Within that you will find the generated HTML pages.

If you installed JSDoc locally, the JSDoc command-line tool is available in ./node_modules/.bin. To generate documentation for the file yourJavaScriptFile.js:

./node_modules/.bin/jsdoc yourJavaScriptFile.js

Or if you installed JSDoc globally, simply run the jsdoc command:

jsdoc yourJavaScriptFile.js

By default, the generated documentation is saved in a directory named out. You can use the --destination (-d) option to specify another directory.

Run jsdoc --help for a complete list of command-line options.

Run JSDoc as a Grunt Task using Grunt-JSDoc (https://github.com/krampstudio/grunt-jsdoc)

## DokkerJS

Also looking at DokkerJS (http://dokkerjs.com/).