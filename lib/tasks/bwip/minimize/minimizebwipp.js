"use strict"

var fs = require('fs');
var path = require('path');

/* node package uglify-js 가 필요함(dependency) */
var uglify = require('uglify-js');

var version = "0.5"

var root_bwipjs = path.join(path.dirname(fs.realpathSync(__filename)), '../bwipjs');

var srcs = [
'bwip.js',
'lib/symdesc.js',
'lib/baropts.js',
'lib/needyoffset.js',
'fonts/ocrb10-01.js',
'fonts/ocrb10-02.js',
'fonts/ocrb10-03.js',
'fonts/ocrb10-04.js',
'fonts/ocrb10-05.js',
'fonts/ocrb10-06.js',
'fonts/ocrb10-07.js',
'fonts/ocrb10-08.js',
'fonts/ocrb10-09.js',
'fonts/ocrb10-10.js',
'fonts/ocrb12-01.js',
'fonts/ocrb12-02.js',
'fonts/ocrb12-03.js',
'fonts/ocrb12-04.js',
'fonts/ocrb12-05.js',
'fonts/ocrb12-06.js',
'fonts/ocrb12-07.js',
'fonts/ocrb12-08.js',
'fonts/ocrb12-09.js',
'fonts/ocrb12-10.js',
'bwipp/renlinear.js',
'bwipp/renmatrix.js',
'bwipp/auspost.js',
'bwipp/azteccode.js',
'bwipp/bc412.js',
'bwipp/channelcode.js',
'bwipp/codablockf.js',
'bwipp/code11.js',
'bwipp/code128.js',
'bwipp/code16k.js',
'bwipp/code2of5.js',
'bwipp/code39.js',
'bwipp/code32.js',
'bwipp/code39ext.js',
'bwipp/code49.js',
'bwipp/code93.js',
'bwipp/code93ext.js',
'bwipp/codeone.js',
'bwipp/daft.js',
'bwipp/pdf417.js',
'bwipp/micropdf417.js',
'bwipp/gs1-cc.js',
'bwipp/databarexpanded.js',
'bwipp/databarexpandedcomposite.js',
'bwipp/databarexpandedstacked.js',
'bwipp/databarexpandedstackedcomposite.js',
'bwipp/databarlimited.js',
'bwipp/databarlimitedcomposite.js',
'bwipp/databaromni.js',
'bwipp/databaromnicomposite.js',
'bwipp/databarstacked.js',
'bwipp/databarstackedcomposite.js',
'bwipp/databarstackedomni.js',
'bwipp/databarstackedomnicomposite.js',
'bwipp/databartruncated.js',
'bwipp/databartruncatedcomposite.js',
'bwipp/datamatrix.js',
'bwipp/ean2.js',
'bwipp/ean5.js',
'bwipp/ean8.js',
'bwipp/ean8composite.js',
'bwipp/ean13.js',
'bwipp/ean13composite.js',
'bwipp/ean14.js',
'bwipp/flattermarken.js',
'bwipp/gs1-128.js',
'bwipp/gs1-128composite.js',
'bwipp/gs1datamatrix.js',
'bwipp/hibccodablockf.js',
'bwipp/hibccode128.js',
'bwipp/hibccode39.js',
'bwipp/hibcdatamatrix.js',
'bwipp/hibcmicropdf417.js',
'bwipp/hibcpdf417.js',
'bwipp/qrcode.js',
'bwipp/hibcqrcode.js',
'bwipp/interleaved2of5.js',
'bwipp/identcode.js',
'bwipp/isbn.js',
'bwipp/ismn.js',
'bwipp/issn.js',
'bwipp/itf14.js',
'bwipp/japanpost.js',
'bwipp/kix.js',
'bwipp/leitcode.js',
'bwipp/maxicode.js',
'bwipp/msi.js',
'bwipp/onecode.js',
'bwipp/pharmacode.js',
'bwipp/pharmacode2.js',
'bwipp/planet.js',
'bwipp/plessey.js',
'bwipp/posicode.js',
'bwipp/postnet.js',
'bwipp/pzn.js',
'bwipp/rationalizedCodabar.js',
'bwipp/raw.js',
'bwipp/renmaximatrix.js',
'bwipp/royalmail.js',
'bwipp/sscc18.js',
'bwipp/symbol.js',
'bwipp/telepen.js',
'bwipp/upca.js',
'bwipp/upcacomposite.js',
'bwipp/upce.js',
'bwipp/upcecomposite.js' ].map(function(file) {
	return path.join(root_bwipjs, file);
});

// Build compressed file without canvas.js

var minfile = path.join(path.dirname(fs.realpathSync(__filename)), 'bwipjs-' + version + '-min.js');

console.log(minfile + " building ...");

var result = uglify.minify( srcs );

fs.writeFileSync(minfile, result.code);

console.log("done");

// Build compressed file with modified canvas.js
// canvas.js 수정부분 : canvas.js 가 로딩되면서 자동으로 필수 js를 로딩하는 부분을 코멘트 처리함.(전체 압축하는 경우에는 불필요하기 때문)

srcs.splice(1, 0, path.join(root_bwipjs, 'lib/canvas-modified.js'));

minfile = path.join(path.dirname(fs.realpathSync(__filename)), 'bwipjs-canvas-' + version + '-min.js');

console.log(minfile + " building ...");

result = uglify.minify( srcs );

fs.writeFileSync(minfile, result.code);

console.log("done");
