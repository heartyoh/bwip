// file: lib/canvas.js
//
// Copyright (c) 2011-2013 Mark Warren
//
// See the COPYRIGHT file in the bwip.js root directory
// for the extended copyright notice.

BWIPJS.load = function(path) {};

(function(name, definition) {
    if(typeof module != 'undefined')
    	module.exports = definition();
    else if(typeof define == 'function' && typeof define.amd == 'object')
    	define(definition);
    else
    	this[name] = definition();
}('bwip', function() {
	var Bitmap = function() {
		var clr  = [0, 0, 0];
		var pts  = [];
		var minx = Infinity;	// min-x
		var miny = Infinity;	// min-y
		var maxx = 0;			// max-x
		var maxy = 0;			// max-y

		this.color = function(r, g, b) {
			clr = [r, g, b];
		}

		this.set = function(x,y) {
			x = Math.floor(x);
			y = Math.floor(y);
			pts.push([ x,y,clr ]);
			if (minx > x) minx = x;
			if (miny > y) miny = y;
			if (maxx < x) maxx = x;
			if (maxy < y) maxy = y;
		},
		
		this.error = function(cvs, rot) {
			cvs.width  = 64;
			cvs.height = 64;

			var ctx = cvs.getContext('2d');

			ctx.beginPath();

	        ctx.rect(0, 0, cvs.width, cvs.height);
			ctx.moveTo(0, 0);
			ctx.lineTo(cvs.width, cvs.height);
			ctx.moveTo(cvs.width, 0);
			ctx.lineTo(0, cvs.height);
			
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#ff0000';
			ctx.stroke();

			return cvs.toDataURL();
		}

		this.draw = function(cvs, rot) {
			if (pts.length == 0) {
				cvs.width  = 32;
				cvs.height = 32;
				cvs.getContext('2d').clearRect(0, 0, cvs.width, cvs.height);
				cvs.style.visibility = 'visible';
				return;
			}

			if (rot == 'R' || rot == 'L') {
				var h = maxx-minx+1;
				var w = maxy-miny+1;
			} else {
				var w = maxx-minx+1;
				var h = maxy-miny+1;
			}

			cvs.width  = w;
			cvs.height = h;

			var ctx = cvs.getContext('2d');
			ctx.fillStyle = '#fff';
			ctx.fillRect(0, 0, cvs.width, cvs.height);
			ctx.fillStyle = '#000';

			var id  = ctx.getImageData(0, 0, cvs.width, cvs.height);
			var dat = id.data;

			for (var i = 0; i < pts.length; i++) {
				// PostScript builds bottom-up, we build top-down.
				var x = pts[i][0] - minx;
				var y = pts[i][1] - miny;
				var c = pts[i][2];

				if (rot == 'N') {
					y = h - y - 1; 	// Invert y
				} else if (rot == 'I') {
					x = w - x - 1;	// Invert x
				} else {
					y = w - y; 	// Invert y
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

				var idx = (y * id.width + x) * 4
				dat[idx++] = c[0];	// r
				dat[idx++] = c[1];	// g
				dat[idx++] = c[2];	// b
				dat[idx]   = 255;
			}
			
	        ctx.putImageData(id, 0, 0);
			
			return cvs.toDataURL();
		}
	}

	BWIPJS.print = function(s) {
		console.log(s);
	};

	BWIPJS.debug = function(s) {
		// console.log(s);
	};

	BWIPJS.imageUrl = function(model) {
		var opts = 'includetext includecheck includecheckintext';

		var symbol = model.symbol;
		var bartext = model.text;
		var alttext = model.alttext;
		var scale_h = model.scale_h;
		var scale_w = model.scale_w;
		var rotation = model.rotation;

		var bw = new BWIPJS;

		var elt;
		for(var i = 0;i < symdesc.length;i++) {
			var desc = symdesc[i];
			if(desc === null) {
				// TODO Raise Exception Here. End Of symdesc entry ==> Not found
				;
			}
			if(desc.sym === symbol) {
				elt = desc;
				break;
			}
		}

		// Convert the options to a dictionary object, so we can pass alttext with spaces.
		var tmp = opts.split(' '); 
		opts = {};
		for (var i = 0; i < tmp.length; i++) {
			if (!tmp[i])
				continue;
			var eq = tmp[i].indexOf('=');
			if (eq == -1)
				opts[tmp[i]] = bw.value(true);
			else
				opts[tmp[i].substr(0, eq)] = bw.value(tmp[i].substr(eq+1));
		}

		// Add the alternate text
		if (alttext)
			opts.alttext = bw.value(alttext);

		// Add any hard-coded options required to fix problems in the javascript emulation. 
		opts.inkspread = bw.value(0);

		if (needyoffset[elt.sym] && !opts.textxalign && !opts.textyalign &&
				!opts.alttext && opts.textyoffset === undefined)
			opts.textyoffset = bw.value(-10);

		bw.bitmap(new Bitmap);

		bw.scale(scale_w, scale_h);

		bw.push(bartext);
		bw.push(opts);
		
		if(!BWIPJS.cvs) {
			BWIPJS.cvs = document.createElement('canvas');
			BWIPJS.cvs.style.display = 'none';
			document.body.appendChild(BWIPJS.cvs);	
		}

		try {
			bw.call(elt.sym);
		} catch(e) {
			// TODO 오류처리.
			console.error(e);

			var bm = bw.bitmap();
			return bm.error(BWIPJS.cvs, rotation);
		}

		return bw.bitmap().draw(BWIPJS.cvs, rotation);
	};

	return BWIPJS;
}));
