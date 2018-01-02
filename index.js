/* Importing the node modules */
var edgegrid = require("edgegrid");
var sywac = require("sywac");
var yargs = require("yargs").argv;
var untildify = require("untildify");


/* CLI framework details */
sywac
  .positional('<ipaddress>', { paramsDesc: 'A required string argument' })
  .boolean('-b, --bool', { desc: 'A boolean option' })
  .number('-n, --num <number>', { desc: 'A number option' })
  .help('-h, --help')
  .version('-v, --version')
  .showHelpByDefault()
  .outputSettings({ maxWidth: 75 })
  .parseAndExit()
  .then(argv => {
	  //console.log('hello');
  });

 
/* Making the API call with Edgegrid */
/*
if(yargs._[0] != 'getgeolocation'){
	console.log('Kindly use only getgeolocation');
	process.exit();
}*/

var thisAPIAuthSection = 'default';
var thisAPIPath = '/diagnostic-tools/v2/ip-addresses/' + yargs.ipaddress + '/geo-location';
var thisAPIMethod = 'GET';

var edgegridInstance = new edgegrid({
  path: untildify('~/.edgerc'),
  section: thisAPIAuthSection
});
 
edgegridInstance.auth({
  path: thisAPIPath,
  method: thisAPIMethod
});

edgegridInstance.send(function(error, response, body) {
  console.log('Looking for the locations details of IP address = ' + yargs.ipaddress);
  var thisResponse = JSON.parse(body);
  console.log('This location of this IPaddress is ' + thisResponse.geoLocation.city + ', ' + thisResponse.geoLocation.countryCode);
});

 
 
 
/*


"dependencies": {
    "chalk": "^2.3.0", ---styling
    "edgegrid": "*",---required
    "md5": "^2.2.1",--creates md5
    "mocha": "^3.2.0",--testing
    "nexe": "^2.0.0-rc.22",--makes executable
    "options": "0.0.6", --options parser
    "pkg": "^4.3.0-beta.5",--makes executable to run without node
    "request": "^2.74.0",--http client
    "safe-buffer": "^5.1.1",--buffer
    "sywac": "^1.2.0",--for creating cli
    "untildify": "*",--expand ~ paths
    "yargonaut": "^1.1.2",---colors cli stuff
    "yargs": "^10.0.3"--parses args
  },
  
  "gulp": "^3.9.1",---automate
    "through2": "^2.0.1"--subclassing
	
	underscore--
	async--
	node-dev--auto restart, node-dev app.js
	jshint--checks js code, jshint app.js
	
	local install - npm install, npm install <module name> --save add to package.json, delete node_module folder, npm install takes look at package json and install everything, npm remove <module> --save removes dependency
	global install- sudo npm install -g
	
	npm init---creates package.json
	
	node --inspect --inspect-brk app.js
	chrome://inspect
	
	node --inspect-brk index.js 
	node --inspect-brk index.js sadfsadf gfdgdgsf dgdfg
	
	
	
	
	
var edgegridInstance = new edgegrid({
  path: untildify('~/.edgerc'),
  section: 'default'
});
 
edgegridInstance.auth({
  path: '/diagnostic-tools/v1/locations',
  method: 'GET'
});
 
edgegridInstance.send(function(error, response, body) {
  console.log(body);
});


sywac
  .positional('<input1>', { paramsDesc: 'A required string argument' })
  .positional('<input2>', { paramsDesc: 'A required string argument' })
  .boolean('-b, --bool', { desc: 'A boolean option' })
  .number('-n, --num <number>', { desc: 'A number option' })
  .help('-h, --help')
  .version('-v, --version')
  .showHelpByDefault()
  .outputSettings({ maxWidth: 75 })
  .parseAndExit()
  .then(argv => {
	  console.log(argv.input1);
	  console.log(argv.input2);
   // console.log(JSON.stringify(argv, null, 2))
  }); 

  
  var thisAPIAuthSection = 'default';
var thisAPIPath = '/diagnostic-tools/v1/locations';
var thisAPIMethod = 'GET';


*/


