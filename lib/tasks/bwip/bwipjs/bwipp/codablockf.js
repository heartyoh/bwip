// file: bwipp/codablockf.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2013-01-25
//
// Copyright (c) 2011-2013 Mark Warren
// Copyright (c) 2004-2013 Terry Burton
//
// See the LICENSE file in the bwip.js root directory
// for the extended copyright notice.
// BEGIN codablockf
if (!BWIPJS.bwipp["renmatrix"]) BWIPJS.load("bwipp/renmatrix.js");
BWIPJS.bwipp["codablockf"]=function() {
	this.dict["renmatrix"]=BWIPJS.bwipp["renmatrix"];
	function $f0(){
		return -1;
	}
	function $f1(){
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f3(){
		var a=/^\s*([^\s]+)(\s+.*)?$/.exec(this.stk[this.ptr-1]);
		if (a) {
			this.stk[this.ptr-1]=BWIPJS.psstring(a[2]===undefined?"":a[2]);
			this.stk[this.ptr++]=BWIPJS.psstring(a[1]);
			this.stk[this.ptr++]=true;
		} else {
			this.stk[this.ptr-1]=false;
		}
		this.stk[this.ptr++]=false;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f0;
		var t0=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t0.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-2].toString();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("=");
		var h=this.stk[this.ptr-2];
		var t=h.indexOf(this.stk[this.ptr-1]);
		if (t==-1) {
			this.stk[this.ptr-1]=false;
		} else {
			this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
			this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
			this.stk[this.ptr++]=h.subset(0,t);
			this.stk[this.ptr++]=true;
		}
		this.stk[this.ptr++]=true;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f1;
		this.stk[this.ptr++]=$f2;
		var t1=this.stk[--this.ptr];
		var t2=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t2.call(this)==-1) return -1;
		} else {
			if (t1.call(this)==-1) return -1;
		}
	}
	function $f4(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]={};
		this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
		var t=this.dstk.get("options");
		if (t===undefined) throw new Error("dict: options: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f3;
		var t3=this.stk[--this.ptr];
		while (true) {
			if (t3.call(this)==-1) break;
		}
		this.stk[this.ptr++]=this.dict;
		this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
		this.stk[this.ptr++]="options"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f5(){
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f6(){
		this.stk[this.ptr++]="c"; //ident
		var t=this.dstk.get("columns");
		if (t===undefined) throw new Error("dict: columns: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f7(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=3;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	}
	function $f8(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-3].assign(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=3;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]="j"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="barcode"; //ident
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f9(){
		this.stk[this.ptr++]=BWIPJS.psstring("^");
		var h=this.stk[this.ptr-2];
		var t=h.indexOf(this.stk[this.ptr-1]);
		if (t==-1) {
			this.stk[this.ptr-1]=false;
		} else {
			this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
			this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
			this.stk[this.ptr++]=h.subset(0,t);
			this.stk[this.ptr++]=true;
		}
		this.stk[this.ptr++]=$f7;
		this.stk[this.ptr++]=$f8;
		var t9=this.stk[--this.ptr];
		var t10=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t10.call(this)==-1) return -1;
		} else {
			if (t9.call(this)==-1) return -1;
		}
	}
	function $f10(){
		this.stk[this.ptr++]="msg"; //ident
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f9;
		var t11=this.stk[--this.ptr];
		while (true) {
			if (t11.call(this)==-1) break;
		}
	}
	function $f11(){
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
	}
	function $f12(){
		this.stk[this.ptr++]="j"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("encs");
		if (t===undefined) throw new Error("dict: encs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="stringtype"; //ident
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f11;
		var t13=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t13.call(this)==-1) return -1;
		}
		var t=this.dstk.get("charvals");
		if (t===undefined) throw new Error("dict: charvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f13(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="encs"; //ident
		var t=this.dstk.get("charmaps");
		if (t===undefined) throw new Error("dict: charmaps: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=$f12;
		var t18=this.stk[--this.ptr];
		var t16=this.stk[--this.ptr];
		var t15=this.stk[--this.ptr];
		var t14=this.stk[--this.ptr];
		for (var t17=t14; t15<0 ? t17>=t16 : t17<=t16; t17+=t15) {
			this.stk[this.ptr++]=t17;
			if (t18.call(this)==-1) break;
		}
	}
	function $f14(){
		return -1;
	}
	function $f15(){
		this.stk[this.ptr++]="char"; //ident
		var t=this.dstk.get("fncvals");
		if (t===undefined) throw new Error("dict: fncvals: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f16(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f17(){
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=94;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f15;
		this.stk[this.ptr++]=$f16;
		var t25=this.stk[--this.ptr];
		var t26=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t26.call(this)==-1) return -1;
		} else {
			if (t25.call(this)==-1) return -1;
		}
	}
	function $f18(){
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t===undefined) throw new Error("dict: barlen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f14;
		var t24=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t24.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="char"; //ident
		var t=this.dstk.get("barcode");
		if (t===undefined) throw new Error("dict: barcode: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("parsefnc");
		if (t===undefined) throw new Error("dict: parsefnc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char");
		if (t===undefined) throw new Error("dict: char: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=94;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("barlen");
		if (t===undefined) throw new Error("dict: barlen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f17;
		var t27=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t27.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char");
		if (t===undefined) throw new Error("dict: char: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f19(){
		return -1;
	}
	function $f20(){
		this.ptr--;
		return -1;
	}
	function $f21(){
		this.stk[this.ptr++]="s"; //ident
		var t=this.dstk.get("s");
		if (t===undefined) throw new Error("dict: s: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f22(){
		return -1;
	}
	function $f23(){
		var t=this.dstk.get("s");
		if (t===undefined) throw new Error("dict: s: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f21;
		this.stk[this.ptr++]=$f22;
		var t31=this.stk[--this.ptr];
		var t32=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t32.call(this)==-1) return -1;
		} else {
			if (t31.call(this)==-1) return -1;
		}
	}
	function $f24(){
		var t=this.dstk.get("p");
		if (t===undefined) throw new Error("dict: p: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t===undefined) throw new Error("dict: msglen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f19;
		var t29=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t29.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("p");
		if (t===undefined) throw new Error("dict: p: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("setc");
		if (t===undefined) throw new Error("dict: setc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		this.stk[this.ptr++]=$f20;
		var t30=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t30.call(this)==-1) return -1;
		}
		var t=this.dstk.get("fn1");
		if (t===undefined) throw new Error("dict: fn1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f23;
		var t33=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t33.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="n"; //ident
		var t=this.dstk.get("n");
		if (t===undefined) throw new Error("dict: n: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="s"; //ident
		var t=this.dstk.get("s");
		if (t===undefined) throw new Error("dict: s: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p"; //ident
		var t=this.dstk.get("p");
		if (t===undefined) throw new Error("dict: p: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f25(){
		this.stk[this.ptr++]="n"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="s"; //ident
		this.stk[this.ptr++]=0;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="p"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f24;
		var t34=this.stk[--this.ptr];
		while (true) {
			if (t34.call(this)==-1) break;
		}
		var t=this.dstk.get("n");
		if (t===undefined) throw new Error("dict: n: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("s");
		if (t===undefined) throw new Error("dict: s: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f26(){
		var t=this.dstk.get("seta");
		if (t===undefined) throw new Error("dict: seta: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f27(){
		var t=this.dstk.get("setb");
		if (t===undefined) throw new Error("dict: setb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f28(){
		var t=this.dstk.get("setc");
		if (t===undefined) throw new Error("dict: setc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
	}
	function $f29(){
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=10;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	}
	function $f30(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr++]="arraytype"; //ident
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f28;
		this.stk[this.ptr++]=$f29;
		var t35=this.stk[--this.ptr];
		var t36=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t36.call(this)==-1) return -1;
		} else {
			if (t35.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f31(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("seta");
		if (t===undefined) throw new Error("dict: seta: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("setb");
		if (t===undefined) throw new Error("dict: setb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f32(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("setb");
		if (t===undefined) throw new Error("dict: setb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("seta");
		if (t===undefined) throw new Error("dict: seta: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
		else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
	}
	function $f33(){
		this.stk[this.ptr++]=0;
	}
	function $f34(){
		this.stk[this.ptr++]=0;
	}
	function $f35(){
		var t=this.dstk.get("nextanotb");
		if (t===undefined) throw new Error("dict: nextanotb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f36(){
		var t=this.dstk.get("nextanotb");
		if (t===undefined) throw new Error("dict: nextanotb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nextanotb");
		if (t===undefined) throw new Error("dict: nextanotb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f37(){
		var t=this.dstk.get("nextbnota");
		if (t===undefined) throw new Error("dict: nextbnota: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f38(){
		var t=this.dstk.get("nextbnota");
		if (t===undefined) throw new Error("dict: nextbnota: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("nextbnota");
		if (t===undefined) throw new Error("dict: nextbnota: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f39(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("anotb");
		if (t===undefined) throw new Error("dict: anotb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f35;
		this.stk[this.ptr++]=$f36;
		var t43=this.stk[--this.ptr];
		var t44=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t44.call(this)==-1) return -1;
		} else {
			if (t43.call(this)==-1) return -1;
		}
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("bnota");
		if (t===undefined) throw new Error("dict: bnota: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f37;
		this.stk[this.ptr++]=$f38;
		var t45=this.stk[--this.ptr];
		var t46=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t46.call(this)==-1) return -1;
		} else {
			if (t45.call(this)==-1) return -1;
		}
	}
	function $f40(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("nextanotb");
		if (t===undefined) throw new Error("dict: nextanotb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("nextbnota");
		if (t===undefined) throw new Error("dict: nextbnota: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
	}
	function $f41(){
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		var t=this.dstk.get("nextbnota");
		if (t===undefined) throw new Error("dict: nextbnota: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("nextanotb");
		if (t===undefined) throw new Error("dict: nextanotb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
	}
	function $f42(){
		var t=this.dstk.get("swc");
		if (t===undefined) throw new Error("dict: swc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f43(){
		var t=this.dstk.get("swc");
		if (t===undefined) throw new Error("dict: swc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f44(){
		var t=this.dstk.get("swb");
		if (t===undefined) throw new Error("dict: swb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t===undefined) throw new Error("dict: encc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f45(){
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f42;
		var t52=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t52.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f43;
		var t53=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t53.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f44;
		var t54=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t54.call(this)==-1) return -1;
		}
	}
	function $f46(){
		this.stk[this.ptr++]=$f45;
		var t55=this.stk[--this.ptr];
		while (true) {
			if (t55.call(this)==-1) break;
		}
	}
	function $f47(){
		this.stk[this.ptr++]=$f46;
		var t58=this.stk[--this.ptr];
		var t56=this.stk[--this.ptr];
		for (var t57=0; t57<t56; t57++) {
			if (t58.call(this)==-1) break;
		}
	}
	function $f48(){
		var t=this.dstk.get("rows");
		if (t===undefined) throw new Error("dict: rows: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f49(){
		this.stk[this.ptr++]=44;
	}
	function $f50(){
		return -1;
	}
	function $f51(){
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numsscr");
		if (t===undefined) throw new Error("dict: numsscr: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f52(){
		this.stk[this.ptr++]=-1;
		this.stk[this.ptr++]=-1;
	}
	function $f53(){
		var t=this.dstk.get("swb");
		if (t===undefined) throw new Error("dict: swb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f54(){
		var t=this.dstk.get("swc");
		if (t===undefined) throw new Error("dict: swc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f55(){
		var t=this.dstk.get("sft");
		if (t===undefined) throw new Error("dict: sft: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f56(){
		var t=this.dstk.get("msglen");
		if (t===undefined) throw new Error("dict: msglen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f53;
		var t64=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t64.call(this)==-1) return -1;
		}
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f54;
		var t65=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t65.call(this)==-1) return -1;
		}
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("abeforeb");
		if (t===undefined) throw new Error("dict: abeforeb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f55;
		var t66=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t66.call(this)==-1) return -1;
		}
		var t=this.dstk.get("swb");
		if (t===undefined) throw new Error("dict: swb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f57(){
		return -1;
	}
	function $f58(){
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f59(){
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f60(){
		var t=this.dstk.get("fn1");
		if (t===undefined) throw new Error("dict: fn1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t===undefined) throw new Error("dict: encc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f61(){
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encc");
		if (t===undefined) throw new Error("dict: encc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f62(){
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t===undefined) throw new Error("dict: fn1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f60;
		this.stk[this.ptr++]=$f61;
		var t71=this.stk[--this.ptr];
		var t72=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t72.call(this)==-1) return -1;
		} else {
			if (t71.call(this)==-1) return -1;
		}
	}
	function $f63(){
		var t=this.dstk.get("swc");
		if (t===undefined) throw new Error("dict: swc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f58;
		this.stk[this.ptr++]=$f59;
		var t69=this.stk[--this.ptr];
		var t70=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t70.call(this)==-1) return -1;
		} else {
			if (t69.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=$f62;
		var t75=this.stk[--this.ptr];
		var t73=this.stk[--this.ptr];
		for (var t74=0; t74<t73; t74++) {
			if (t75.call(this)==-1) break;
		}
		return -1;
	}
	function $f64(){
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f65(){
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f66(){
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f67(){
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f68(){
		var t=this.dstk.get("fn1");
		if (t===undefined) throw new Error("dict: fn1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t===undefined) throw new Error("dict: encc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f69(){
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encc");
		if (t===undefined) throw new Error("dict: encc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f70(){
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t===undefined) throw new Error("dict: fn1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f68;
		this.stk[this.ptr++]=$f69;
		var t81=this.stk[--this.ptr];
		var t82=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t82.call(this)==-1) return -1;
		} else {
			if (t81.call(this)==-1) return -1;
		}
	}
	function $f71(){
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f64;
		this.stk[this.ptr++]=$f65;
		var t77=this.stk[--this.ptr];
		var t78=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t78.call(this)==-1) return -1;
		} else {
			if (t77.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("swc");
		if (t===undefined) throw new Error("dict: swc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f66;
		this.stk[this.ptr++]=$f67;
		var t79=this.stk[--this.ptr];
		var t80=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t80.call(this)==-1) return -1;
		} else {
			if (t79.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr++]=$f70;
		var t85=this.stk[--this.ptr];
		var t83=this.stk[--this.ptr];
		for (var t84=0; t84<t83; t84++) {
			if (t85.call(this)==-1) break;
		}
		return -1;
	}
	function $f72(){
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f63;
		var t76=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t76.call(this)==-1) return -1;
		}
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f71;
		var t86=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t86.call(this)==-1) return -1;
		}
	}
	function $f73(){
		var t=this.dstk.get("sft");
		if (t===undefined) throw new Error("dict: sft: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f74(){
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("bbeforea");
		if (t===undefined) throw new Error("dict: bbeforea: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f73;
		var t88=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t88.call(this)==-1) return -1;
		}
	}
	function $f75(){
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t===undefined) throw new Error("dict: msglen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f74;
		var t89=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t89.call(this)==-1) return -1;
		}
		var t=this.dstk.get("swa");
		if (t===undefined) throw new Error("dict: swa: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f76(){
		var t=this.dstk.get("sft");
		if (t===undefined) throw new Error("dict: sft: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f77(){
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("abeforeb");
		if (t===undefined) throw new Error("dict: abeforeb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f76;
		var t91=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t91.call(this)==-1) return -1;
		}
	}
	function $f78(){
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t===undefined) throw new Error("dict: msglen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f77;
		var t92=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t92.call(this)==-1) return -1;
		}
		var t=this.dstk.get("swb");
		if (t===undefined) throw new Error("dict: swb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f79(){
		var t=this.dstk.get("swa");
		if (t===undefined) throw new Error("dict: swa: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t===undefined) throw new Error("dict: encc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f80(){
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("abeforeb");
		if (t===undefined) throw new Error("dict: abeforeb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f79;
		var t94=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t94.call(this)==-1) return -1;
		}
		var t=this.dstk.get("swb");
		if (t===undefined) throw new Error("dict: swb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t===undefined) throw new Error("dict: encc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="cset"; //ident
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f81(){
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f82(){
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("encb");
		if (t===undefined) throw new Error("dict: encb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f83(){
		var t=this.dstk.get("fn1");
		if (t===undefined) throw new Error("dict: fn1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("encc");
		if (t===undefined) throw new Error("dict: encc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f84(){
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		var t=this.dstk.get("encc");
		if (t===undefined) throw new Error("dict: encc: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="i"; //ident
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f85(){
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t===undefined) throw new Error("dict: fn1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f83;
		this.stk[this.ptr++]=$f84;
		var t98=this.stk[--this.ptr];
		var t99=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t99.call(this)==-1) return -1;
		} else {
			if (t98.call(this)==-1) return -1;
		}
		return -1;
	}
	function $f86(){
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("fn1");
		if (t===undefined) throw new Error("dict: fn1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f72;
		var t87=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t87.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("anotb");
		if (t===undefined) throw new Error("dict: anotb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f75;
		var t90=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t90.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("bnota");
		if (t===undefined) throw new Error("dict: bnota: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f78;
		var t93=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t93.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f80;
		var t95=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t95.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("seta");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("seta");
		if (t===undefined) throw new Error("dict: seta: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f81;
		var t96=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t96.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setb");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("setb");
		if (t===undefined) throw new Error("dict: setb: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1]]!==undefined; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f82;
		var t97=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t97.call(this)==-1) return -1;
		}
		var t=this.dstk.get("cset");
		if (t===undefined) throw new Error("dict: cset: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=BWIPJS.psstring("setc");
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("nums");
		if (t===undefined) throw new Error("dict: nums: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f85;
		var t100=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t100.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="endofrow"; //ident
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		return -1;
	}
	function $f87(){
		this.stk[this.ptr++]="rem"; //ident
		var t=this.dstk.get("c");
		if (t===undefined) throw new Error("dict: c: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("c");
		if (t===undefined) throw new Error("dict: c: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t===undefined) throw new Error("dict: msglen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("endofrow");
		if (t===undefined) throw new Error("dict: endofrow: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f57;
		var t68=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t68.call(this)==-1) return -1;
		}
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("numsscr");
		if (t===undefined) throw new Error("dict: numsscr: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="nums"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nchars"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f86;
		var t101=this.stk[--this.ptr];
		while (true) {
			if (t101.call(this)==-1) break;
		}
	}
	function $f88(){
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("padrow");
		if (t===undefined) throw new Error("dict: padrow: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("stp");
		if (t===undefined) throw new Error("dict: stp: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="lastrow"; //ident
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f89(){
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("padrow");
		if (t===undefined) throw new Error("dict: padrow: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("stp");
		if (t===undefined) throw new Error("dict: stp: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]="r"; //ident
		var t=this.dstk.get("r");
		if (t===undefined) throw new Error("dict: r: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f90(){
		var t=this.dstk.get("lastrow");
		if (t===undefined) throw new Error("dict: lastrow: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f50;
		var t61=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t61.call(this)==-1) return -1;
		}
		var t=this.dstk.get("sta");
		if (t===undefined) throw new Error("dict: sta: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("enca");
		if (t===undefined) throw new Error("dict: enca: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t===undefined) throw new Error("dict: msglen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]<this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f51;
		this.stk[this.ptr++]=$f52;
		var t62=this.stk[--this.ptr];
		var t63=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t63.call(this)==-1) return -1;
		} else {
			if (t62.call(this)==-1) return -1;
		}
		this.stk[this.ptr++]="nums"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="nchars"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f56;
		var t67=this.stk[--this.ptr];
		while (true) {
			if (t67.call(this)==-1) break;
		}
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="endofrow"; //ident
		this.stk[this.ptr++]=false;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=$f87;
		var t102=this.stk[--this.ptr];
		while (true) {
			if (t102.call(this)==-1) break;
		}
		var t=this.dstk.get("r");
		if (t===undefined) throw new Error("dict: r: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("rows");
		if (t===undefined) throw new Error("dict: rows: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rows");
		if (t===undefined) throw new Error("dict: rows: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=-1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("r");
		if (t===undefined) throw new Error("dict: r: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("msglen");
		if (t===undefined) throw new Error("dict: msglen: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("rem");
		if (t===undefined) throw new Error("dict: rem: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f88;
		this.stk[this.ptr++]=$f89;
		var t103=this.stk[--this.ptr];
		var t104=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t104.call(this)==-1) return -1;
		} else {
			if (t103.call(this)==-1) return -1;
		}
	}
	function $f91(){
	}
	function $f92(){
	}
	function $f93(){
	}
	function $f94(){
	}
	function $f95(){
		var t=this.dstk.get("chkmsg");
		if (t===undefined) throw new Error("dict: chkmsg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("char");
		if (t===undefined) throw new Error("dict: char: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f96(){
		var t=this.dstk.get("chkmsg");
		if (t===undefined) throw new Error("dict: chkmsg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=29;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
		this.stk[this.ptr++]="j"; //ident
		var t=this.dstk.get("j");
		if (t===undefined) throw new Error("dict: j: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f97(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="char"; //ident
		var t=this.dstk.get("msg");
		if (t===undefined) throw new Error("dict: msg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("char");
		if (t===undefined) throw new Error("dict: char: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f95;
		var t126=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t126.call(this)==-1) return -1;
		}
		var t=this.dstk.get("char");
		if (t===undefined) throw new Error("dict: char: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("fn1");
		if (t===undefined) throw new Error("dict: fn1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f96;
		var t127=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t127.call(this)==-1) return -1;
		}
	}
	function $f98(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="t1"; //ident
		var t=this.dstk.get("chkmsg");
		if (t===undefined) throw new Error("dict: chkmsg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=86;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="t2"; //ident
		var t=this.dstk.get("t1");
		if (t===undefined) throw new Error("dict: t1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("chkmsg");
		if (t===undefined) throw new Error("dict: chkmsg: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=86;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k1"; //ident
		var t=this.dstk.get("k1");
		if (t===undefined) throw new Error("dict: k1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("t2");
		if (t===undefined) throw new Error("dict: t2: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=86;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="k2"; //ident
		var t=this.dstk.get("k2");
		if (t===undefined) throw new Error("dict: k2: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("t1");
		if (t===undefined) throw new Error("dict: t1: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=86;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f99(){
		var t=this.dstk.get("abmap");
		if (t===undefined) throw new Error("dict: abmap: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f100(){
		var t=this.dstk.get("cmap");
		if (t===undefined) throw new Error("dict: cmap: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f101(){
		var t=this.dstk.get("abmap");
		if (t===undefined) throw new Error("dict: abmap: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f102(){
		var t=this.dstk.get("cmap");
		if (t===undefined) throw new Error("dict: cmap: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f103(){
		var t=this.dstk.get("abmap");
		if (t===undefined) throw new Error("dict: abmap: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f104(){
		var t=this.dstk.get("cmap");
		if (t===undefined) throw new Error("dict: cmap: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f105(){
		var t=this.dstk.get("abmap");
		if (t===undefined) throw new Error("dict: abmap: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f106(){
		var t=this.dstk.get("cmap");
		if (t===undefined) throw new Error("dict: cmap: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	}
	function $f107(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("c");
		if (t===undefined) throw new Error("dict: c: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=2;
		if (typeof(this.stk[this.ptr-1])=="number") {
			for (var n=this.stk[--this.ptr],t=this.ptr+n; this.ptr<t; this.ptr++) this.stk[this.ptr]=this.stk[this.ptr-n];
		} else if (this.stk[this.ptr-1] instanceof BWIPJS.psstring||this.stk[this.ptr-1] instanceof BWIPJS.psarray) {
			this.stk[this.ptr-1].assign(0,this.stk[this.ptr-2]);
			this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,this.stk[this.ptr-2].length);
			this.ptr--;
		} else {
			var src=this.stk[this.ptr-2]; var dst=this.stk[this.ptr-1];
			for (var i in src) dst[i]=src[i];
			this.stk[this.ptr-2]=dst;
			this.ptr--;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=99;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f105;
		this.stk[this.ptr++]=$f106;
		var t144=this.stk[--this.ptr];
		var t145=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t145.call(this)==-1) return -1;
		} else {
			if (t144.call(this)==-1) return -1;
		}
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=42;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f108(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="csum"; //ident
		var t=this.dstk.get("csum");
		if (t===undefined) throw new Error("dict: csum: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("rcws");
		if (t===undefined) throw new Error("dict: rcws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f109(){
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		var t=this.dstk.get("c");
		if (t===undefined) throw new Error("dict: c: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("c");
		if (t===undefined) throw new Error("dict: c: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=4;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]="rcws"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="csum"; //ident
		var t=this.dstk.get("rcws");
		if (t===undefined) throw new Error("dict: rcws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=0;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		var t=this.dstk.get("rcws");
		if (t===undefined) throw new Error("dict: rcws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=2;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f108;
		var t155=this.stk[--this.ptr];
		var t153=this.stk[--this.ptr];
		var t152=this.stk[--this.ptr];
		var t151=this.stk[--this.ptr];
		for (var t154=t151; t152<0 ? t154>=t153 : t154<=t153; t154+=t152) {
			this.stk[this.ptr++]=t154;
			if (t155.call(this)==-1) break;
		}
		var t=this.dstk.get("rcws");
		if (t===undefined) throw new Error("dict: rcws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("rcws");
		if (t===undefined) throw new Error("dict: rcws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("csum");
		if (t===undefined) throw new Error("dict: csum: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=103;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]%this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f110(){
		this.stk[this.ptr++]=48;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	}
	function $f111(){
		var t=this.dstk.get("encs");
		if (t===undefined) throw new Error("dict: encs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		this.stk[this.ptr++]=$f110;
		var t163=this.stk[--this.ptr];
		var t162=this.stk[--this.ptr];
		for (t161 in t162) {
			if (t162 instanceof BWIPJS.psstring || t162 instanceof BWIPJS.psarray) {
				if (t161.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t162.get(t161);
			} else {
				this.stk[this.ptr++]=t161;
				this.stk[this.ptr++]=t162[t161];
			}
			if (t163.call(this)==-1) break;
		}
	}
	function $f112(){
		this.stk[this.ptr++]=0;
	}
	function $f113(){
		this.stk[this.ptr++]=$f112;
	}
	function $f114(){
		this.stk[this.ptr++]=1;
	}
	function $f115(){
		this.stk[this.ptr++]=$f114;
	}
	function $f116(){
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-1] >= this.ptr) throw "index: underflow";
		this.stk[this.ptr-1]=this.stk[this.ptr-2-this.stk[this.ptr-1]];
		this.stk[this.ptr++]=1;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f113;
		this.stk[this.ptr++]=$f115;
		var t167=this.stk[--this.ptr];
		var t168=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t168.call(this)==-1) return -1;
		} else {
			if (t167.call(this)==-1) return -1;
		}
		var t171=this.stk[--this.ptr];
		var t169=this.stk[--this.ptr];
		for (var t170=0; t170<t169; t170++) {
			if (t171.call(this)==-1) break;
		}
	}
	function $f117(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]="sbs"; //ident
		this.stk[this.ptr++]=Infinity;
		var t=this.dstk.get("cws");
		if (t===undefined) throw new Error("dict: cws: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("c");
		if (t===undefined) throw new Error("dict: c: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
		var t=this.dstk.get("c");
		if (t===undefined) throw new Error("dict: c: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=5;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
		this.stk[this.ptr++]=$f111;
		var t166=this.stk[--this.ptr];
		var t165=this.stk[--this.ptr];
		for (t164 in t165) {
			if (t165 instanceof BWIPJS.psstring || t165 instanceof BWIPJS.psarray) {
				if (t164.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t165.get(t164);
			} else {
				this.stk[this.ptr++]=t164;
				this.stk[this.ptr++]=t165[t164];
			}
			if (t166.call(this)==-1) break;
		}
		for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
		if (i < 0) throw "array: underflow";
		var t = this.stk.splice(i+1, this.ptr-1-i);
		this.ptr = i;
		this.stk[this.ptr++]=BWIPJS.psarray(t);
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		this.stk[this.ptr++]=Infinity;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("sbs");
		if (t===undefined) throw new Error("dict: sbs: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f116;
		var t174=this.stk[--this.ptr];
		var t173=this.stk[--this.ptr];
		for (t172 in t173) {
			if (t173 instanceof BWIPJS.psstring || t173 instanceof BWIPJS.psarray) {
				if (t172.charCodeAt(0) > 57) continue;
				this.stk[this.ptr++]=t173.get(t172);
			} else {
				this.stk[this.ptr++]=t172;
				this.stk[this.ptr++]=t173[t172];
			}
			if (t174.call(this)==-1) break;
		}
		for (var i=this.ptr-1; i>=0 && this.stk[i]!==Infinity; i--);
		if (i==-1) throw "counttomark: underflow";
		this.stk[this.ptr]=this.ptr-i-1;
		this.ptr++;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-1];
		if (t.length >= this.ptr) throw "astore: underflow";
		var a=this.stk.splice(this.ptr-1-t.length,t.length);
		t.assign(0,a);
		this.ptr-=t.length;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.dstk.get("rowbits");
		if (t===undefined) throw new Error("dict: rowbits: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=3;
		this.stk[this.ptr++]=-1;
		var b=this.stk[--this.ptr]; var a=this.stk[--this.ptr];
		if (a > this.ptr) throw "roll: underflow: this.ptr="+this.ptr+",offset="+a;
		if (b < 0) var t=this.stk.splice(this.ptr-a, -b);
		else var t=this.stk.splice(this.ptr-a, a-b);
		this.stk.splice.apply(this.stk, [this.ptr-t.length, 0].concat(t));
		if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
			this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
		else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
		this.ptr-=3;
	}
	function $f118(){
		this.stk[this.ptr++]=1;
	}
	function $f119(){
		var t=this.dstk.get("rowbits");
		if (t===undefined) throw new Error("dict: rowbits: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("i");
		if (t===undefined) throw new Error("dict: i: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f120(){
		this.stk[this.ptr++]=1;
	}
	function $f121(){
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		var t=this.dstk.get("symwid");
		if (t===undefined) throw new Error("dict: symwid: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=24;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		this.stk[this.ptr++]=$f120;
		var t188=this.stk[--this.ptr];
		var t186=this.stk[--this.ptr];
		for (var t187=0; t187<t186; t187++) {
			if (t188.call(this)==-1) break;
		}
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=0;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr++]=1;
	}
	function $f122(){
		this.stk[this.ptr++]="i"; //ident
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		var t=this.dstk.get("rowheight");
		if (t===undefined) throw new Error("dict: rowheight: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f119;
		var t185=this.stk[--this.ptr];
		var t183=this.stk[--this.ptr];
		for (var t184=0; t184<t183; t184++) {
			if (t185.call(this)==-1) break;
		}
		var t=this.dstk.get("sepheight");
		if (t===undefined) throw new Error("dict: sepheight: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f121;
		var t191=this.stk[--this.ptr];
		var t189=this.stk[--this.ptr];
		for (var t190=0; t190<t189; t190++) {
			if (t191.call(this)==-1) break;
		}
	}
	function $f123(){
		var t=this.dstk.get("rowbits");
		if (t===undefined) throw new Error("dict: rowbits: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		var t=this.dstk.get("r");
		if (t===undefined) throw new Error("dict: r: undefined");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
		else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
		this.ptr--;
		var t=this.stk[this.ptr-1];
		for (var i = 0; i < t.length; i++) this.stk[this.ptr-1+i]=t.get(i);
		this.ptr += t.length;
		this.stk[this.ptr-1]=t;
		this.ptr--;
	}
	function $f124(){
		this.stk[this.ptr++]=1;
	}
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	this.stk[this.ptr++]="options"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="barcode"; //ident
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="dontdraw"; //ident
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rows"; //ident
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="columns"; //ident
	this.stk[this.ptr++]=8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowheight"; //ident
	this.stk[this.ptr++]=10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sepheight"; //ident
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encoding"; //ident
	this.stk[this.ptr++]=BWIPJS.psstring("auto");
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parse"; //ident
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="parsefnc"; //ident
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="stringtype"; //ident
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f4;
	var t4=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t4.call(this)==-1) return -1;
	}
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f5;
	var t7=this.stk[--this.ptr];
	var t6=this.stk[--this.ptr];
	for (t5 in t6) {
		if (t6 instanceof BWIPJS.psstring || t6 instanceof BWIPJS.psarray) {
			if (t5.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t6.get(t5);
		} else {
			this.stk[this.ptr++]=t5;
			this.stk[this.ptr++]=t6[t5];
		}
		if (t7.call(this)==-1) break;
	}
	this.stk[this.ptr++]="rows"; //ident
	var t=this.dstk.get("rows");
	if (t===undefined) throw new Error("dict: rows: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="columns"; //ident
	var t=this.dstk.get("columns");
	if (t===undefined) throw new Error("dict: columns: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowheight"; //ident
	var t=this.dstk.get("rowheight");
	if (t===undefined) throw new Error("dict: rowheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sepheight"; //ident
	var t=this.dstk.get("sepheight");
	if (t===undefined) throw new Error("dict: sepheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=parseInt(this.stk[this.ptr-1],10);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("columns");
	if (t===undefined) throw new Error("dict: columns: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("columns");
	if (t===undefined) throw new Error("dict: columns: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=62;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("rows");
	if (t===undefined) throw new Error("dict: rows: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]>=this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("rows");
	if (t===undefined) throw new Error("dict: rows: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=44;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]<=this.stk[this.ptr-1]; this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
	this.ptr--;
	var t=this.dstk.get("rows");
	if (t===undefined) throw new Error("dict: rows: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=-1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]||this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]|this.stk[this.ptr-1];
	this.ptr--;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-2]=this.stk[this.ptr-2]&&this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]&this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f6;
	var t8=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t8.call(this)==-1) return -1;
	}
	var t=this.dstk.get("parse");
	if (t===undefined) throw new Error("dict: parse: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f10;
	var t12=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t12.call(this)==-1) return -1;
	}
	this.stk[this.ptr++]="barlen"; //ident
	var t=this.dstk.get("barcode");
	if (t===undefined) throw new Error("dict: barcode: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="swa"; //ident
	this.stk[this.ptr++]=-1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="swb"; //ident
	this.stk[this.ptr++]=-2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="swc"; //ident
	this.stk[this.ptr++]=-3;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sft"; //ident
	this.stk[this.ptr++]=-4;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn1"; //ident
	this.stk[this.ptr++]=-5;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn2"; //ident
	this.stk[this.ptr++]=-6;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn3"; //ident
	this.stk[this.ptr++]=-7;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fn4"; //ident
	this.stk[this.ptr++]=-8;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="sta"; //ident
	this.stk[this.ptr++]=-9;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="stp"; //ident
	this.stk[this.ptr++]=-10;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charmaps"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psarray([32,32,BWIPJS.psstring("00")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("!"),BWIPJS.psstring("!"),BWIPJS.psstring("01")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("\""),BWIPJS.psstring("\""),BWIPJS.psstring("02")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("#"),BWIPJS.psstring("#"),BWIPJS.psstring("03")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("$"),BWIPJS.psstring("$"),BWIPJS.psstring("04")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("%"),BWIPJS.psstring("%"),BWIPJS.psstring("05")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("&"),BWIPJS.psstring("&"),BWIPJS.psstring("06")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("'"),BWIPJS.psstring("'"),BWIPJS.psstring("07")]);
	this.stk[this.ptr++]=BWIPJS.psarray([40,40,BWIPJS.psstring("08")]);
	this.stk[this.ptr++]=BWIPJS.psarray([41,41,BWIPJS.psstring("09")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("*"),BWIPJS.psstring("*"),BWIPJS.psstring("10")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("+"),BWIPJS.psstring("+"),BWIPJS.psstring("11")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(","),BWIPJS.psstring(","),BWIPJS.psstring("12")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("-"),BWIPJS.psstring("-"),BWIPJS.psstring("13")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("."),BWIPJS.psstring("."),BWIPJS.psstring("14")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("/"),BWIPJS.psstring("/"),BWIPJS.psstring("15")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("0"),BWIPJS.psstring("0"),BWIPJS.psstring("16")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("1"),BWIPJS.psstring("1"),BWIPJS.psstring("17")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("2"),BWIPJS.psstring("2"),BWIPJS.psstring("18")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("3"),BWIPJS.psstring("3"),BWIPJS.psstring("19")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("4"),BWIPJS.psstring("4"),BWIPJS.psstring("20")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("5"),BWIPJS.psstring("5"),BWIPJS.psstring("21")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("6"),BWIPJS.psstring("6"),BWIPJS.psstring("22")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("7"),BWIPJS.psstring("7"),BWIPJS.psstring("23")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("8"),BWIPJS.psstring("8"),BWIPJS.psstring("24")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("9"),BWIPJS.psstring("9"),BWIPJS.psstring("25")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(":"),BWIPJS.psstring(":"),BWIPJS.psstring("26")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(";"),BWIPJS.psstring(";"),BWIPJS.psstring("27")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("<"),BWIPJS.psstring("<"),BWIPJS.psstring("28")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("="),BWIPJS.psstring("="),BWIPJS.psstring("29")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring(">"),BWIPJS.psstring(">"),BWIPJS.psstring("30")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("?"),BWIPJS.psstring("?"),BWIPJS.psstring("31")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("@"),BWIPJS.psstring("@"),BWIPJS.psstring("32")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("A"),BWIPJS.psstring("A"),BWIPJS.psstring("33")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("B"),BWIPJS.psstring("B"),BWIPJS.psstring("34")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("C"),BWIPJS.psstring("C"),BWIPJS.psstring("35")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("D"),BWIPJS.psstring("D"),BWIPJS.psstring("36")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("E"),BWIPJS.psstring("E"),BWIPJS.psstring("37")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("F"),BWIPJS.psstring("F"),BWIPJS.psstring("38")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("G"),BWIPJS.psstring("G"),BWIPJS.psstring("39")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("H"),BWIPJS.psstring("H"),BWIPJS.psstring("40")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("I"),BWIPJS.psstring("I"),BWIPJS.psstring("41")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("J"),BWIPJS.psstring("J"),BWIPJS.psstring("42")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("K"),BWIPJS.psstring("K"),BWIPJS.psstring("43")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("L"),BWIPJS.psstring("L"),BWIPJS.psstring("44")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("M"),BWIPJS.psstring("M"),BWIPJS.psstring("45")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("N"),BWIPJS.psstring("N"),BWIPJS.psstring("46")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("O"),BWIPJS.psstring("O"),BWIPJS.psstring("47")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("P"),BWIPJS.psstring("P"),BWIPJS.psstring("48")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Q"),BWIPJS.psstring("Q"),BWIPJS.psstring("49")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("R"),BWIPJS.psstring("R"),BWIPJS.psstring("50")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("S"),BWIPJS.psstring("S"),BWIPJS.psstring("51")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("T"),BWIPJS.psstring("T"),BWIPJS.psstring("52")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("U"),BWIPJS.psstring("U"),BWIPJS.psstring("53")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("V"),BWIPJS.psstring("V"),BWIPJS.psstring("54")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("W"),BWIPJS.psstring("W"),BWIPJS.psstring("55")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("X"),BWIPJS.psstring("X"),BWIPJS.psstring("56")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Y"),BWIPJS.psstring("Y"),BWIPJS.psstring("57")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("Z"),BWIPJS.psstring("Z"),BWIPJS.psstring("58")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("["),BWIPJS.psstring("["),BWIPJS.psstring("59")]);
	this.stk[this.ptr++]=BWIPJS.psarray([92,92,BWIPJS.psstring("60")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("]"),BWIPJS.psstring("]"),BWIPJS.psstring("61")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("^"),BWIPJS.psstring("^"),BWIPJS.psstring("62")]);
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("_"),BWIPJS.psstring("_"),BWIPJS.psstring("63")]);
	this.stk[this.ptr++]=BWIPJS.psarray([0,BWIPJS.psstring("`"),BWIPJS.psstring("64")]);
	this.stk[this.ptr++]=BWIPJS.psarray([1,BWIPJS.psstring("a"),BWIPJS.psstring("65")]);
	this.stk[this.ptr++]=BWIPJS.psarray([2,BWIPJS.psstring("b"),BWIPJS.psstring("66")]);
	this.stk[this.ptr++]=BWIPJS.psarray([3,BWIPJS.psstring("c"),BWIPJS.psstring("67")]);
	this.stk[this.ptr++]=BWIPJS.psarray([4,BWIPJS.psstring("d"),BWIPJS.psstring("68")]);
	this.stk[this.ptr++]=BWIPJS.psarray([5,BWIPJS.psstring("e"),BWIPJS.psstring("69")]);
	this.stk[this.ptr++]=BWIPJS.psarray([6,BWIPJS.psstring("f"),BWIPJS.psstring("70")]);
	this.stk[this.ptr++]=BWIPJS.psarray([7,BWIPJS.psstring("g"),BWIPJS.psstring("71")]);
	this.stk[this.ptr++]=BWIPJS.psarray([8,BWIPJS.psstring("h"),BWIPJS.psstring("72")]);
	this.stk[this.ptr++]=BWIPJS.psarray([9,BWIPJS.psstring("i"),BWIPJS.psstring("73")]);
	this.stk[this.ptr++]=BWIPJS.psarray([10,BWIPJS.psstring("j"),BWIPJS.psstring("74")]);
	this.stk[this.ptr++]=BWIPJS.psarray([11,BWIPJS.psstring("k"),BWIPJS.psstring("75")]);
	this.stk[this.ptr++]=BWIPJS.psarray([12,BWIPJS.psstring("l"),BWIPJS.psstring("76")]);
	this.stk[this.ptr++]=BWIPJS.psarray([13,BWIPJS.psstring("m"),BWIPJS.psstring("77")]);
	this.stk[this.ptr++]=BWIPJS.psarray([14,BWIPJS.psstring("n"),BWIPJS.psstring("78")]);
	this.stk[this.ptr++]=BWIPJS.psarray([15,BWIPJS.psstring("o"),BWIPJS.psstring("79")]);
	this.stk[this.ptr++]=BWIPJS.psarray([16,BWIPJS.psstring("p"),BWIPJS.psstring("80")]);
	this.stk[this.ptr++]=BWIPJS.psarray([17,BWIPJS.psstring("q"),BWIPJS.psstring("81")]);
	this.stk[this.ptr++]=BWIPJS.psarray([18,BWIPJS.psstring("r"),BWIPJS.psstring("82")]);
	this.stk[this.ptr++]=BWIPJS.psarray([19,BWIPJS.psstring("s"),BWIPJS.psstring("83")]);
	this.stk[this.ptr++]=BWIPJS.psarray([20,BWIPJS.psstring("t"),BWIPJS.psstring("84")]);
	this.stk[this.ptr++]=BWIPJS.psarray([21,BWIPJS.psstring("u"),BWIPJS.psstring("85")]);
	this.stk[this.ptr++]=BWIPJS.psarray([22,BWIPJS.psstring("v"),BWIPJS.psstring("86")]);
	this.stk[this.ptr++]=BWIPJS.psarray([23,BWIPJS.psstring("w"),BWIPJS.psstring("87")]);
	this.stk[this.ptr++]=BWIPJS.psarray([24,BWIPJS.psstring("x"),BWIPJS.psstring("88")]);
	this.stk[this.ptr++]=BWIPJS.psarray([25,BWIPJS.psstring("y"),BWIPJS.psstring("89")]);
	this.stk[this.ptr++]=BWIPJS.psarray([26,BWIPJS.psstring("z"),BWIPJS.psstring("90")]);
	this.stk[this.ptr++]=BWIPJS.psarray([27,BWIPJS.psstring("{"),BWIPJS.psstring("91")]);
	this.stk[this.ptr++]=BWIPJS.psarray([28,BWIPJS.psstring("|"),BWIPJS.psstring("92")]);
	this.stk[this.ptr++]=BWIPJS.psarray([29,BWIPJS.psstring("}"),BWIPJS.psstring("93")]);
	this.stk[this.ptr++]=BWIPJS.psarray([30,BWIPJS.psstring("~"),BWIPJS.psstring("94")]);
	this.stk[this.ptr++]=BWIPJS.psarray([31,127,BWIPJS.psstring("95")]);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fn3");
	if (t===undefined) throw new Error("dict: fn3: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn3");
	if (t===undefined) throw new Error("dict: fn3: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("96");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fn2");
	if (t===undefined) throw new Error("dict: fn2: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn2");
	if (t===undefined) throw new Error("dict: fn2: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("97");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sft");
	if (t===undefined) throw new Error("dict: sft: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sft");
	if (t===undefined) throw new Error("dict: sft: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("98");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("swc");
	if (t===undefined) throw new Error("dict: swc: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("swc");
	if (t===undefined) throw new Error("dict: swc: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("99");
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("swb");
	if (t===undefined) throw new Error("dict: swb: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn4");
	if (t===undefined) throw new Error("dict: fn4: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("swb");
	if (t===undefined) throw new Error("dict: swb: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fn4");
	if (t===undefined) throw new Error("dict: fn4: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("swa");
	if (t===undefined) throw new Error("dict: swa: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("swa");
	if (t===undefined) throw new Error("dict: swa: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("fn1");
	if (t===undefined) throw new Error("dict: fn1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn1");
	if (t===undefined) throw new Error("dict: fn1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("fn1");
	if (t===undefined) throw new Error("dict: fn1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("sta");
	if (t===undefined) throw new Error("dict: sta: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sta");
	if (t===undefined) throw new Error("dict: sta: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sta");
	if (t===undefined) throw new Error("dict: sta: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("stp");
	if (t===undefined) throw new Error("dict: stp: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("stp");
	if (t===undefined) throw new Error("dict: stp: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("stp");
	if (t===undefined) throw new Error("dict: stp: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="charvals"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=105;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=105;
	this.stk[this.ptr-1]={};
	this.stk[this.ptr++]=105;
	this.stk[this.ptr-1]={};
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("charmaps");
	if (t===undefined) throw new Error("dict: charmaps: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f13;
	var t23=this.stk[--this.ptr];
	var t21=this.stk[--this.ptr];
	var t20=this.stk[--this.ptr];
	var t19=this.stk[--this.ptr];
	for (var t22=t19; t20<0 ? t22>=t21 : t22<=t21; t22+=t20) {
		this.stk[this.ptr++]=t22;
		if (t23.call(this)==-1) break;
	}
	this.stk[this.ptr++]="seta"; //ident
	var t=this.dstk.get("charvals");
	if (t===undefined) throw new Error("dict: charvals: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="setb"; //ident
	var t=this.dstk.get("charvals");
	if (t===undefined) throw new Error("dict: charvals: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="setc"; //ident
	var t=this.dstk.get("charvals");
	if (t===undefined) throw new Error("dict: charvals: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="fncvals"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=BWIPJS.psstring("FNC1");
	var t=this.dstk.get("fn1");
	if (t===undefined) throw new Error("dict: fn1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("FNC2");
	var t=this.dstk.get("fn2");
	if (t===undefined) throw new Error("dict: fn2: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("FNC3");
	var t=this.dstk.get("fn3");
	if (t===undefined) throw new Error("dict: fn3: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("FNC4");
	var t=this.dstk.get("fn4");
	if (t===undefined) throw new Error("dict: fn4: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
		t[this.stk[i-1]]=this.stk[i];
	}
	if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
	this.ptr = i;
	this.stk[this.ptr++]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msg"; //ident
	var t=this.dstk.get("barlen");
	if (t===undefined) throw new Error("dict: barlen: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f18;
	var t28=this.stk[--this.ptr];
	while (true) {
		if (t28.call(this)==-1) break;
	}
	this.stk[this.ptr++]="msg"; //ident
	var t=this.dstk.get("msg");
	if (t===undefined) throw new Error("dict: msg: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("j");
	if (t===undefined) throw new Error("dict: j: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="msglen"; //ident
	var t=this.dstk.get("msg");
	if (t===undefined) throw new Error("dict: msg: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="numsscr"; //ident
	this.stk[this.ptr++]=$f25;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="enca"; //ident
	this.stk[this.ptr++]=$f26;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encb"; //ident
	this.stk[this.ptr++]=$f27;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="encc"; //ident
	this.stk[this.ptr++]=$f30;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="anotb"; //ident
	this.stk[this.ptr++]=$f31;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bnota"; //ident
	this.stk[this.ptr++]=$f32;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nextanotb"; //ident
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("msg");
	if (t===undefined) throw new Error("dict: msg: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=$f33;
	var t39=this.stk[--this.ptr];
	var t37=this.stk[--this.ptr];
	for (var t38=0; t38<t37; t38++) {
		if (t39.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9999;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="nextbnota"; //ident
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("msg");
	if (t===undefined) throw new Error("dict: msg: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=$f34;
	var t42=this.stk[--this.ptr];
	var t40=this.stk[--this.ptr];
	for (var t41=0; t41<t40; t41++) {
		if (t42.call(this)==-1) break;
	}
	this.stk[this.ptr++]=9999;
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	var t=this.dstk.get("msg");
	if (t===undefined) throw new Error("dict: msg: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=$f39;
	var t51=this.stk[--this.ptr];
	var t49=this.stk[--this.ptr];
	var t48=this.stk[--this.ptr];
	var t47=this.stk[--this.ptr];
	for (var t50=t47; t48<0 ? t50>=t49 : t50<=t49; t50+=t48) {
		this.stk[this.ptr++]=t50;
		if (t51.call(this)==-1) break;
	}
	this.stk[this.ptr++]="abeforeb"; //ident
	this.stk[this.ptr++]=$f40;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="bbeforea"; //ident
	this.stk[this.ptr++]=$f41;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="padrow"; //ident
	this.stk[this.ptr++]=$f47;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cws"; //ident
	var t=this.dstk.get("c");
	if (t===undefined) throw new Error("dict: c: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=5;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("rows");
	if (t===undefined) throw new Error("dict: rows: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=-1;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f48;
	this.stk[this.ptr++]=$f49;
	var t59=this.stk[--this.ptr];
	var t60=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t60.call(this)==-1) return -1;
	} else {
		if (t59.call(this)==-1) return -1;
	}
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="i"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="r"; //ident
	this.stk[this.ptr++]=1;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="lastrow"; //ident
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=$f90;
	var t105=this.stk[--this.ptr];
	while (true) {
		if (t105.call(this)==-1) break;
	}
	this.stk[this.ptr++]="cws"; //ident
	var t=this.dstk.get("cws");
	if (t===undefined) throw new Error("dict: cws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=0;
	var t=this.dstk.get("j");
	if (t===undefined) throw new Error("dict: j: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-3]=this.stk[this.ptr-3].subset(this.stk[this.ptr-2],this.stk[this.ptr-1]); this.ptr-=2;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="abmap"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=64;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=95;
	this.stk[this.ptr++]=$f91;
	var t110=this.stk[--this.ptr];
	var t108=this.stk[--this.ptr];
	var t107=this.stk[--this.ptr];
	var t106=this.stk[--this.ptr];
	for (var t109=t106; t107<0 ? t109>=t108 : t109<=t108; t109+=t107) {
		this.stk[this.ptr++]=t109;
		if (t110.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=15;
	this.stk[this.ptr++]=$f92;
	var t115=this.stk[--this.ptr];
	var t113=this.stk[--this.ptr];
	var t112=this.stk[--this.ptr];
	var t111=this.stk[--this.ptr];
	for (var t114=t111; t112<0 ? t114>=t113 : t114<=t113; t114+=t112) {
		this.stk[this.ptr++]=t114;
		if (t115.call(this)==-1) break;
	}
	this.stk[this.ptr++]=26;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=63;
	this.stk[this.ptr++]=$f93;
	var t120=this.stk[--this.ptr];
	var t118=this.stk[--this.ptr];
	var t117=this.stk[--this.ptr];
	var t116=this.stk[--this.ptr];
	for (var t119=t116; t117<0 ? t119>=t118 : t119<=t118; t119+=t117) {
		this.stk[this.ptr++]=t119;
		if (t120.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="cmap"; //ident
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=85;
	this.stk[this.ptr++]=$f94;
	var t125=this.stk[--this.ptr];
	var t123=this.stk[--this.ptr];
	var t122=this.stk[--this.ptr];
	var t121=this.stk[--this.ptr];
	for (var t124=t121; t122<0 ? t124>=t123 : t124<=t123; t124+=t122) {
		this.stk[this.ptr++]=t124;
		if (t125.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="chkmsg"; //ident
	var t=this.dstk.get("msglen");
	if (t===undefined) throw new Error("dict: msglen: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="j"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("msglen");
	if (t===undefined) throw new Error("dict: msglen: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f97;
	var t132=this.stk[--this.ptr];
	var t130=this.stk[--this.ptr];
	var t129=this.stk[--this.ptr];
	var t128=this.stk[--this.ptr];
	for (var t131=t128; t129<0 ? t131>=t130 : t131<=t130; t131+=t129) {
		this.stk[this.ptr++]=t131;
		if (t132.call(this)==-1) break;
	}
	this.stk[this.ptr++]="t1"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="t2"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="k1"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="k2"; //ident
	this.stk[this.ptr++]=0;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("j");
	if (t===undefined) throw new Error("dict: j: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f98;
	var t137=this.stk[--this.ptr];
	var t135=this.stk[--this.ptr];
	var t134=this.stk[--this.ptr];
	var t133=this.stk[--this.ptr];
	for (var t136=t133; t134<0 ? t136>=t135 : t136<=t135; t136+=t134) {
		this.stk[this.ptr++]=t136;
		if (t137.call(this)==-1) break;
	}
	var t=this.dstk.get("cws");
	if (t===undefined) throw new Error("dict: cws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("cws");
	if (t===undefined) throw new Error("dict: cws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=4;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("cset");
	if (t===undefined) throw new Error("dict: cset: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("setc");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f99;
	this.stk[this.ptr++]=$f100;
	var t138=this.stk[--this.ptr];
	var t139=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t139.call(this)==-1) return -1;
	} else {
		if (t138.call(this)==-1) return -1;
	}
	var t=this.dstk.get("k1");
	if (t===undefined) throw new Error("dict: k1: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	var t=this.dstk.get("cws");
	if (t===undefined) throw new Error("dict: cws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("cws");
	if (t===undefined) throw new Error("dict: cws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	this.stk[this.ptr++]=3;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	var t=this.dstk.get("cset");
	if (t===undefined) throw new Error("dict: cset: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("setc");
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f101;
	this.stk[this.ptr++]=$f102;
	var t140=this.stk[--this.ptr];
	var t141=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t141.call(this)==-1) return -1;
	} else {
		if (t140.call(this)==-1) return -1;
	}
	var t=this.dstk.get("k2");
	if (t===undefined) throw new Error("dict: k2: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	var t=this.dstk.get("cws");
	if (t===undefined) throw new Error("dict: cws: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr++]=2;
	if (typeof(this.stk[this.ptr-1])=="number") {
		for (var n=this.stk[--this.ptr],t=this.ptr+n; this.ptr<t; this.ptr++) this.stk[this.ptr]=this.stk[this.ptr-n];
	} else if (this.stk[this.ptr-1] instanceof BWIPJS.psstring||this.stk[this.ptr-1] instanceof BWIPJS.psarray) {
		this.stk[this.ptr-1].assign(0,this.stk[this.ptr-2]);
		this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,this.stk[this.ptr-2].length);
		this.ptr--;
	} else {
		var src=this.stk[this.ptr-2]; var dst=this.stk[this.ptr-1];
		for (var i in src) dst[i]=src[i];
		this.stk[this.ptr-2]=dst;
		this.ptr--;
	}
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	this.stk[this.ptr++]=99;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()!=this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]!=this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f103;
	this.stk[this.ptr++]=$f104;
	var t142=this.stk[--this.ptr];
	var t143=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t143.call(this)==-1) return -1;
	} else {
		if (t142.call(this)==-1) return -1;
	}
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring || this.stk[this.ptr-2] instanceof BWIPJS.psarray)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].get(this.stk[this.ptr-1]);
	else this.stk[this.ptr-2]=this.stk[this.ptr-2][this.stk[this.ptr-1].toString()];
	this.ptr--;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f107;
	var t150=this.stk[--this.ptr];
	var t148=this.stk[--this.ptr];
	var t147=this.stk[--this.ptr];
	var t146=this.stk[--this.ptr];
	for (var t149=t146; t147<0 ? t149>=t148 : t149<=t148; t149+=t147) {
		this.stk[this.ptr++]=t149;
		if (t150.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f109;
	var t160=this.stk[--this.ptr];
	var t158=this.stk[--this.ptr];
	var t157=this.stk[--this.ptr];
	var t156=this.stk[--this.ptr];
	for (var t159=t156; t157<0 ? t159>=t158 : t159<=t158; t159+=t157) {
		this.stk[this.ptr++]=t159;
		if (t160.call(this)==-1) break;
	}
	this.stk[this.ptr++]="encs"; //ident
	this.stk[this.ptr++]=BWIPJS.psarray([BWIPJS.psstring("212222"),BWIPJS.psstring("222122"),BWIPJS.psstring("222221"),BWIPJS.psstring("121223"),BWIPJS.psstring("121322"),BWIPJS.psstring("131222"),BWIPJS.psstring("122213"),BWIPJS.psstring("122312"),BWIPJS.psstring("132212"),BWIPJS.psstring("221213"),BWIPJS.psstring("221312"),BWIPJS.psstring("231212"),BWIPJS.psstring("112232"),BWIPJS.psstring("122132"),BWIPJS.psstring("122231"),BWIPJS.psstring("113222"),BWIPJS.psstring("123122"),BWIPJS.psstring("123221"),BWIPJS.psstring("223211"),BWIPJS.psstring("221132"),BWIPJS.psstring("221231"),BWIPJS.psstring("213212"),BWIPJS.psstring("223112"),BWIPJS.psstring("312131"),BWIPJS.psstring("311222"),BWIPJS.psstring("321122"),BWIPJS.psstring("321221"),BWIPJS.psstring("312212"),BWIPJS.psstring("322112"),BWIPJS.psstring("322211"),BWIPJS.psstring("212123"),BWIPJS.psstring("212321"),BWIPJS.psstring("232121"),BWIPJS.psstring("111323"),BWIPJS.psstring("131123"),BWIPJS.psstring("131321"),BWIPJS.psstring("112313"),BWIPJS.psstring("132113"),BWIPJS.psstring("132311"),BWIPJS.psstring("211313"),BWIPJS.psstring("231113"),BWIPJS.psstring("231311"),BWIPJS.psstring("112133"),BWIPJS.psstring("112331"),BWIPJS.psstring("132131"),BWIPJS.psstring("113123"),BWIPJS.psstring("113321"),BWIPJS.psstring("133121"),BWIPJS.psstring("313121"),BWIPJS.psstring("211331"),BWIPJS.psstring("231131"),BWIPJS.psstring("213113"),BWIPJS.psstring("213311"),BWIPJS.psstring("213131"),BWIPJS.psstring("311123"),BWIPJS.psstring("311321"),BWIPJS.psstring("331121"),BWIPJS.psstring("312113"),BWIPJS.psstring("312311"),BWIPJS.psstring("332111"),BWIPJS.psstring("314111"),BWIPJS.psstring("221411"),BWIPJS.psstring("431111"),BWIPJS.psstring("111224"),BWIPJS.psstring("111422"),BWIPJS.psstring("121124"),BWIPJS.psstring("121421"),BWIPJS.psstring("141122"),BWIPJS.psstring("141221"),BWIPJS.psstring("112214"),BWIPJS.psstring("112412"),BWIPJS.psstring("122114"),BWIPJS.psstring("122411"),BWIPJS.psstring("142112"),BWIPJS.psstring("142211"),BWIPJS.psstring("241211"),BWIPJS.psstring("221114"),BWIPJS.psstring("413111"),BWIPJS.psstring("241112"),BWIPJS.psstring("134111"),BWIPJS.psstring("111242"),BWIPJS.psstring("121142"),BWIPJS.psstring("121241"),BWIPJS.psstring("114212"),BWIPJS.psstring("124112"),BWIPJS.psstring("124211"),BWIPJS.psstring("411212"),BWIPJS.psstring("421112"),BWIPJS.psstring("421211"),BWIPJS.psstring("212141"),BWIPJS.psstring("214121"),BWIPJS.psstring("412121"),BWIPJS.psstring("111143"),BWIPJS.psstring("111341"),BWIPJS.psstring("131141"),BWIPJS.psstring("114113"),BWIPJS.psstring("114311"),BWIPJS.psstring("411113"),BWIPJS.psstring("411311"),BWIPJS.psstring("113141"),BWIPJS.psstring("114131"),BWIPJS.psstring("311141"),BWIPJS.psstring("411131"),BWIPJS.psstring("211412"),BWIPJS.psstring("2331112")]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="rowbits"; //ident
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.psarray(this.stk[this.ptr-1]);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f117;
	var t179=this.stk[--this.ptr];
	var t177=this.stk[--this.ptr];
	var t176=this.stk[--this.ptr];
	var t175=this.stk[--this.ptr];
	for (var t178=t175; t176<0 ? t178>=t177 : t178<=t177; t178+=t176) {
		this.stk[this.ptr++]=t178;
		if (t179.call(this)==-1) break;
	}
	this.stk[this.ptr++]="symwid"; //ident
	var t=this.dstk.get("c");
	if (t===undefined) throw new Error("dict: c: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=11;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=57;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]+this.stk[this.ptr-1]; this.ptr--;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]="pixs"; //ident
	this.stk[this.ptr++]=Infinity;
	var t=this.dstk.get("symwid");
	if (t===undefined) throw new Error("dict: symwid: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sepheight");
	if (t===undefined) throw new Error("dict: sepheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f118;
	var t182=this.stk[--this.ptr];
	var t180=this.stk[--this.ptr];
	for (var t181=0; t181<t180; t181++) {
		if (t182.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	var t=this.dstk.get("r");
	if (t===undefined) throw new Error("dict: r: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=2;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]-this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f122;
	var t196=this.stk[--this.ptr];
	var t194=this.stk[--this.ptr];
	var t193=this.stk[--this.ptr];
	var t192=this.stk[--this.ptr];
	for (var t195=t192; t193<0 ? t195>=t194 : t195<=t194; t195+=t193) {
		this.stk[this.ptr++]=t195;
		if (t196.call(this)==-1) break;
	}
	var t=this.dstk.get("rowheight");
	if (t===undefined) throw new Error("dict: rowheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f123;
	var t199=this.stk[--this.ptr];
	var t197=this.stk[--this.ptr];
	for (var t198=0; t198<t197; t198++) {
		if (t199.call(this)==-1) break;
	}
	var t=this.dstk.get("symwid");
	if (t===undefined) throw new Error("dict: symwid: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("sepheight");
	if (t===undefined) throw new Error("dict: sepheight: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]*this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]=$f124;
	var t202=this.stk[--this.ptr];
	var t200=this.stk[--this.ptr];
	for (var t201=0; t201<t200; t201++) {
		if (t202.call(this)==-1) break;
	}
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	this.stk[this.ptr++]=Infinity;
	this.stk[this.ptr++]="ren"; //ident
	var t=this.dstk.get("renmatrix");
	if (t===undefined) throw new Error("//renmatrix: undefined");
	this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixs"; //ident
	var t=this.dstk.get("pixs");
	if (t===undefined) throw new Error("dict: pixs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixx"; //ident
	var t=this.dstk.get("symwid");
	if (t===undefined) throw new Error("dict: symwid: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]="pixy"; //ident
	var t=this.dstk.get("pixs");
	if (t===undefined) throw new Error("dict: pixs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	var t=this.dstk.get("symwid");
	if (t===undefined) throw new Error("dict: symwid: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]="height"; //ident
	var t=this.dstk.get("pixs");
	if (t===undefined) throw new Error("dict: pixs: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
	var t=this.dstk.get("symwid");
	if (t===undefined) throw new Error("dict: symwid: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-2]=Math.floor(this.stk[this.ptr-2]/this.stk[this.ptr-1]); this.ptr--;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="width"; //ident
	var t=this.dstk.get("symwid");
	if (t===undefined) throw new Error("dict: symwid: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	this.stk[this.ptr++]="opt"; //ident
	var t=this.dstk.get("options");
	if (t===undefined) throw new Error("dict: options: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
		t[this.stk[i-1]]=this.stk[i];
	}
	if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
	this.ptr = i;
	this.stk[this.ptr++]=t;
	var t=this.dstk.get("dontdraw");
	if (t===undefined) throw new Error("dict: dontdraw: undefined");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	if (typeof(this.stk[this.ptr-1])=="boolean") this.stk[this.ptr-1]=!this.stk[this.ptr-1];
	else this.stk[this.ptr-1]=~this.stk[this.ptr-1];
	var t=this.dstk.get("renmatrix");
	if (t===undefined) throw new Error("//renmatrix: undefined");
	this.stk[this.ptr++]=t;
	var t203=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t203.call(this)==-1) return -1;
	}
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
// END OF codablockf
