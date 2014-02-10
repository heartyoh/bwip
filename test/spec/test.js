/* global describe, it */

(function () {
    'use strict';

    describe('BWIPJS', function () {
        describe('generate barcode Base64 image', function () {

            it('should generate QR code', function () {
				var barcode = BWIPJS.imageUrl({
					symbol : 'qrcode',
					text : 'https://code.google.com/p/bwip-js/',
					alttext : 'https://code.google.com/p/bwip-js/',
					scale_h : 3,
					scale_w : 3,
					rotation : 'N'
				});
				
            	var image = document.createElement('img');
            	image.setAttribute('src', barcode);
            	image.setAttribute('style', 'padding:10px;display:block;');

            	document.getElementById('barcode').appendChild(image);
            });

            it('should generate code128 code', function () {
				var barcode = BWIPJS.imageUrl({
					symbol : 'code128',
					text : '1234567890ASDFGHJKL',
					alttext : '1234567890ASDFGHJKL',
					scale_h : 2,
					scale_w : 2,
					rotation : 'N'
				});
				
            	var image = document.createElement('img');
            	image.setAttribute('src', barcode);
            	image.setAttribute('style', 'padding:10px;display:block;');

            	document.getElementById('barcode').appendChild(image);
            });
        });
    });
})();
