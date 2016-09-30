function yanzheng() {
	var num2 = Math.floor(Math.random() * 26);
	s2 = zi() + "123456789"
	var str = '';
	var a = Math.floor(Math.random() * 35);
	var b = Math.floor(Math.random() * 35);
	var c = Math.floor(Math.random() * 35);
	var d = Math.floor(Math.random() * 35);
	str += s2[a] + s2[b] + s2[c] + s2[d];
	return str
}

function zi() {
	var s = '';
	for (var i = 65; i < 91; i++) {
		s += String.fromCharCode(i);
	}
	return s;
}