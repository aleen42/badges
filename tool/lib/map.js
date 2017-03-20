/***********************************************************************
 *                                                                   _
 *       _____  _                           ____  _                 |_|
 *      |  _  |/ \   ____  ____ __ ___     / ___\/ \   __   _  ____  _
 *      | |_| || |  / __ \/ __ \\ '_  \ _ / /    | |___\ \ | |/ __ \| |
 *      |  _  || |__. ___/. ___/| | | ||_|\ \___ |  _  | |_| |. ___/| |
 *      |_/ \_|\___/\____|\____||_| |_|    \____/|_| |_|_____|\____||_| 
 *                                                                      
 *      ================================================================
 *                 More than a coder, More than a designer              
 *      ================================================================
 *
 *
 *      - Document: map.js
 *      - Author: aleen42
 *      - Description: a map of width value for a single characters
 *                     between [0-9a-zA-Z] with certain font-size as 11px,
 *                     but without consideration of compositing characters.
 *      - Create Time: Mar 20th, 2017
 *      - Update Time: Mar 20th, 2017
 *
 *
 **********************************************************************/

/**
function check() {
	var text = document.getElementById('text');
	var obj = {};

	for (var i = 0; i < 127; i++) {
		if ((i >= 48 && i <= 57) || (i >= 65 && i <= 90) || (i >= 97 && i <= 122)) {
			var ch = String.fromCharCode(i);
			text.innerHTML = ch;
			obj[ch] = text.clientWidth;	
		}
	}

	console.log(obj);
}
*/

module.exports = {
	0: 8,
	1: 8,
	2: 8,
	3: 8,
	4: 8,
	5: 8,
	6: 8,
	7: 8,
	8: 8,
	9: 8,
	A: 10,
	B: 9,
	C: 9,
	D: 9,
	E: 8,
	F: 7,
	G: 9,
	H: 9,
	I: 5,
	J: 6,
	K: 9,
	L: 7,
	M: 10,
	N: 9,
	O: 10,
	P: 8,
	Q: 10,
	R: 9,
	S: 8,
	T: 9,
	U: 9,
	V: 10,
	W: 12,
	X: 9,
	Y: 9,
	Z: 8,
	a: 7,
	b: 8,
	c: 7,
	d: 7,
	e: 7,
	f: 6,
	g: 7,
	h: 8,
	i: 3,
	j: 5,
	k: 8,
	l: 3,
	m: 12,
	n: 8,
	o: 7,
	p: 8,
	q: 7,
	r: 6,
	s: 7,
	t: 5,
	u: 8,
	v: 8,
	w: 10,
	x: 8,
	y: 8,
	z: 7
};
