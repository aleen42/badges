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
  *		                between [0-9a-zA-Z] with certain font-size as 11px,
  *	                    but without consideration of compositing characters.
  *      - Create Time: Mar 20th, 2017
  *      - Update Time: Mar 23rd, 2017
  *
  *
  **********************************************************************/

/**
function check() {
	var text = document.getElementById('text');
	var arr = [];

	for (var i = 0; i < 127; i++) {
		try {
			var ch = String.fromCharCode(i);
			text.innerHTML = ch;
			arr[i] = text.clientWidth;
		} catch (e) {}
	}

	console.log(arr);
}
*/

module.exports = [
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	0,
	0,
	null,
	null,
	0,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	4, // 4px for space but not 0px
	5,
	6,
	10,
	8,
	13,
	null,
	3,
	5,
	5,
	8,
	10,
	4,
	5,
	4,
	7,
	8,
	8,
	8,
	8,
	8,
	8,
	8,
	8,
	8,
	8,
	5,
	5,
	null,
	10,
	10,
	7,
	12,
	10,
	9,
	9,
	9,
	8,
	7,
	9,
	9,
	5,
	6,
	9,
	7,
	10,
	9,
	10,
	8,
	10,
	9,
	8,
	9,
	9,
	10,
	12,
	9,
	9,
	8,
	5,
	6,
	5,
	10,
	9,
	8,
	7,
	8,
	7,
	7,
	7,
	6,
	7,
	8,
	3,
	5,
	8,
	3,
	12,
	8,
	7,
	8,
	7,
	6,
	7,
	5,
	8,
	8,
	10,
	8,
	8,
	7,
	8,
	5,
	8,
	10
];
