/*
 * bwip
 * https://github.com/heartyoh/bwip
 *
 *		
 * Copyright (c) 2014 Hearty, Oh.
 * Licensed under the MIT license.
 */

'use strict';

var fs  = require('fs');
var vm  = require('vm');
var pnglib = require('pnglib');

function load(path) {
	var text = fs.readFileSync(__dirname + '/bwipjs/' + path);
	if (!text)
		throw new Error(path + ": could not read file");

	vm.runInThisContext(text, path);
}

// Load the primary bwip-js script
load('bwip.js');

// Set the hook for demand-loading the remaining bwip-js files
BWIPJS.load = load;

exports.png = function(bcid, text, scale, rotate, options) {

	if (!text)
		throw 'Bar code text not specified.';
	if (!bcid)
		throw 'Bar code type not specified.';
	if (!fs.existsSync(__dirname + '/bwipjs/bwipp/' + bcid + '.js'))
		throw 'Bar code type "' + bcid + '" unknown.';

	// Initialize a barcode writer object
	var bw = new BWIPJS;

	var opts = {};

	// Set the options
	for (var option in options) {
		opts[option] = bw.value(options[option]);
	}

	// Manually zero-out ink-spread and any other options, as needed.
	opts.inkspread = bw.value(0);

	// Fix a disconnect in the BWIPP rendering logic
	if (opts.alttext)
		opts.includetext = bw.value(true);

	// Render the bar code
	bw.bitmap(new Bitmap);
	bw.scale(scale, scale);
	bw.push(text);
	bw.push(opts);
	bw.call(bcid);

	return bw.bitmap().getPNG(rotate);
};

exports.base64 = function(bcid, text, scale, rotate, options) {
	var s = this.png(bcid, text, scale, rotate, options);
	
	var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var c1, c2, c3, e1, e2, e3, e4;
    var l = s.length;
    var i = 0;
    var r = "";

    do {
        c1 = s.charCodeAt(i);
        e1 = c1 >> 2;
        c2 = s.charCodeAt(i+1);
        e2 = ((c1 & 3) << 4) | (c2 >> 4);
        c3 = s.charCodeAt(i+2);
        if (l < i+2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }
        if (l < i+3) { e4 = 64; } else { e4 = c3 & 0x3f; }
        r+= ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);
    } while ((i+= 3) < l);
    
    return 'data:image/png;base64,' + r;
};

// bwip-js bitmap interface
function Bitmap() {
	var _clr  = 0;					// currently active color
	var _clrs = {};					// color map
	var _nclr = 0;					// color count
	var _bits = [];					// the x,y,c bits
	var _minx = Infinity;
	var _miny = Infinity;
	var _maxx = 0;
	var _maxy = 0;

	this.color = function(r,g,b) {
		var rgb = (r<<16) | (g<<8) | b;
		if (!_clrs[rgb])
			_clrs[rgb] = { n:_nclr++ };
		_clr = rgb;
	}

	this.set = function(x, y, b) {
		// postscript graphics work with floating-pt numbers
		x = Math.floor(x);
		y = Math.floor(y);

		if (_minx > x) _minx = x;
		if (_maxx < x) _maxx = x;
		if (_miny > y) _miny = y;
		if (_maxy < y) _maxy = y;

		_bits.push([x,y,_clr]);
	}

	this.getPNG = function(rot) {
		// determine image width and height
		if (rot == 'R' || rot == 'L') {
			var h = _maxx-_minx+1;
			var w = _maxy-_miny+1;
		} else {
			var w = _maxx-_minx+1;
			var h = _maxy-_miny+1;
		}

		var png = new pnglib(w, h, 256);

		// make sure the default color (index 0) is white
		png.color(255,255,255,255);

		// map the colors
		var cmap = [];
		for (var rgb in _clrs)
			cmap[rgb] = png.color(rgb>>16, (rgb>>8)&0xff, (rgb&0xff), 255);

		for (var i = 0; i < _bits.length; i++) {
			// PostScript builds bottom-up, we build top-down.
			var x = _bits[i][0] - _minx;
			var y = _bits[i][1] - _miny;
			var c = cmap[_bits[i][2]];

			if (rot == 'N') {
				y = h - y - 1; 	// Invert y
			} else if (rot == 'I') {
				x = w - x - 1;	// Invert x
			} else {
				y = w - y; 		// Invert y
				if (rot == 'L') {
					var t = y;
					y = h - x - 1;
					x = t - 1;
				} else {
					var t = x;
					x = w - y;
					y = t;
				}
			}

			png.buffer[png.index(x, y)] = c;
		}

		return png.getDump();
	}
}

