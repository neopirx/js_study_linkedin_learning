function bar(x, y) {

	var z;

	foo(x);
	return [y, z];

	function foo(x) {
		y++;
		z = x * y;
	}
}




foo(20);
z;		// 120

foo(25);
z;		// 175
