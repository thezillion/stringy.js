/*
	Stringy.js
	Code by /thezillion/
*/

!function(str, doc, nav, win, func) {

	// An array containing the alphabet in upper and lower case.
	var alphabet = [];
	for (var _j = 65; _j <= 122; _j++) {
		if (_j < 91 || _j > 96)
			alphabet.push(str.fromCharCode(_j));
	}

	// Function to check if a passed character is an alphabet
	function isAlpha(text) {
		if (text.length === 1) {
			if (alphabet.indexOf(text) !== false)
				return true;
		} return false;
	}

	// Function to check passed character's case
	function checkCase(txt) {
		if (txt.length === 1) {
			if (txt.lcase() === txt)
				return "l";
			else if (txt.ucase() === txt)
				return "u";
		} return false;
	}

	// Check if value is null
	function isNull(f) {
		if (f === 0 || f === null || f === undefined)
			return true;
		return false;
	}

	str.prototype.lcase = function () { return this.toLowerCase(); }
	str.prototype.ucase = function () { return this.toUpperCase(); }

	// Flipping the case of each character
	str.prototype.flipCase = function () {
		var result = [];
		this.split("").forEach(function (index) {
			if (isAlpha(index)) {
				if (checkCase(index) === "u")
					result.push(index.lcase());
				else if (checkCase(index) === "l")
					result.push(index.ucase());
			}
		});
		return result.join("");
	};

	// Camel casing
	str.prototype.camelCase = function(splitter) {
		var a = this.split(splitter), result = [a[0]];
		for (var i = 1; i<a.length; i++)
			result.push([a[i].substring(0, 1).ucase(), a[i].substring(1)].join(""));
		return result.join("");
	};

	// ROT functions
	// ROT Encode function
	str.prototype.encRot = function(x) {
		var abcd = alphabet, result = [], s = this.split("");
		rot.compileDict(x);
		for (var d = 0; d < s.length; d++)
			result.push((abcd.indexOf(s[d]) === -1) ? s[d] : rotDict[abcd.indexOf(s[d])]);
		return result.join("");
	};

	// ROT Decode function
	str.prototype.decRot = function(x) {
		var abcd = alphabet, result = [], s = this.split("");
		rot.compileDict(x);
		for (var d = 0; d < s.length; d++)
			result.push((rotDict.indexOf(s[d]) === -1) ? s[d] : abcd[rotDict.indexOf(s[d])]);
		return result.join("");
	};

	// Search functions
	str.prototype.s = function(x) {
		var string = this;
		return {
			getPos: function () {
				return string.indexOf(x);
			},
			getNextChar: function (f) {
				var m = "", n = string.indexOf(x), o = x.length;
				if (n + o <= string.length) {
					if (!isNull(f) && f !== 1) {
						for (var i = 0; i<f; i++)
							m += string[n + o + i];
					}
					else
						m = string[n + o];
				return m;
				}
				else return string;
			},
			getPrevChar: function (f) {
				var m = "", n = string.indexOf(x);
				if (n - 1 >= 0) {
					if (!isNull(f) && f !== 1) {
						for (var i = f; i>0; i--)
							m += string[n - i];
					}
					else
						m = string[n - 1];
				return m;
				}
				else return string;
			},
			r: function (y) {
				return string.replace(x, y);
			},
			encRot: function (z) {
				return string.replace(x, x.encRot(z));
			},
			decRot: function (z) {
				return string.replace(x, x.decRot(z));
			}
		}
	}

	var rotDict = [], rotHalf = alphabet.length/2,
	// To Compile the ROT n dictionary where n is the passed value
	rot = {
		compileDict: function(x) {
			var abcd = alphabet;
			rotDict = [];
			for (var a = 0; a<rotHalf*2; a++) {
				var c = a + x;
				rotDict.push(c < rotHalf  ?
									(a < rotHalf ?
											abcd[c].ucase() :
							 				abcd[c].lcase())
									:
							 		(a < rotHalf ?
							 				abcd[c - rotHalf].ucase() :
							 				abcd[c - rotHalf].lcase())
							);
			}
		}
	};
}(String, document, navigator, window, Function);