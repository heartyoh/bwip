// file: node-barcode-server
//
// ----------------------------------------------------------------------
// Node-js server using bwip.
//
// Usage :
//
// 1. Start Barcode Server
//
//     $ node example/node-barcode-server.js
//
// 2. Request Barcode Image from your browser (type URL like below examples)
//
//     http://127.0.0.1:3030/?bcid=code128&text=^FNC1011234567890&wscale=4&hscale=4&rotate=L&parsefnc&alttext=(01)01234567890
//     http://127.0.0.1:3030/?text=1234567890&wscale=4&hscale=5&rotate=L&parsefnc&alttext=1234567890&bcid=code39
//     http://127.0.0.1:3030/?text=http://www.abc.com/xyz&wscale=4&hscale=4&rotate=L&parsefnc&bcid=qrcode
//
//
// Possible values to specify in the query string are:
//
// `bcid' is the name of the bwip-js barcode rendering function e.g.
//
//		bcid=code128
//
// `text' is the text to be bar coded.
//
// `wscale' is an integer value from 1 .. 10.  Default is 2.
// `hscale' is an integer value from 1 .. 10.  Default is 2.
//
// `rotate' takes the values:
//		N	normal, unrotated (the default)
//		R	clockwise, 90 rotation
//		L	counter-clockwise, 90 rotation
//		I	inverted, 180 rotation
//
// Plus any of the bar code options defined in the BWIPP documentation.
//
// For example:
//
//		http://127.0.0.1:3030/?bcid=code128&text=^FNC1011234567890&wscale=4&hscale=4&
//					rotate=L&parsefnc&alttext=(01)01234567890
//
// A complete list of the bcid's can be determined from the bwipp directory.
// Valid bcid's are the same as the names of the files, minus the .js
// extension.  For example:
//
//		bcid=code128	-->  bwipp/code128.js
//
// Omit the file names beginning with 'ren'; they contain the postscript
// rendering logic.
//
var url = require('url');
var http = require('http');
var bwip = require('../src/bwip-node');

function error(res, status, message) {
	res.writeHead(status, { 'Content-Type':'text/plain' });
	res.end(message, 'ascii');
}

http.createServer(function(req, res) {

	var args = url.parse(req.url, true).query;

	// Set the defaults
    var wscale = parseInt(args.wscale, 10) || 2;
    var hscale = parseInt(args.hscale, 10) || 2;
	var rotate   = args.rotate || 'N';
	var bcid  = args.bcid;
	var text  = args.text;

	if (!text)
		return error(res, 400, 'Bar code text not specified.\r\n');
	if (!bcid)
		return error(res, 400, 'Bar code type not specified.\r\n');

	// Remove the non-BWIPP options
    delete args.hscale;
    delete args.wscale;
	delete args.rotate;
	delete args.text;
	delete args.bcid;

	// Return a PNG-encoded image
	var png = bwip.png(bcid, text, wscale, hscale, rotate, args);

	res.writeHead(200, { 'Content-Type':'image/png' });
	res.end(png, 'binary');
}).listen(3030);
