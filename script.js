
//
//Axis
//
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var msg = document.getElementById("msg");

var WIDTH = canvas.width;
var HEIGHT = canvas.height;

function grid() {
	ctx.fillStyle = '#eee';
	ctx.strokeStyle = '#eee';
	ctx.moveTo(0, HEIGHT / 2);
	ctx.lineTo(WIDTH, HEIGHT / 2);
	ctx.closePath();
	ctx.stroke();

	ctx.moveTo(WIDTH / 2, 0);
	ctx.lineTo(WIDTH / 2, HEIGHT / 2);
	ctx.closePath();
	ctx.stroke();
}


function plot(fx, color, fill) {
	clearPlotter();
	msg.innerText = '';
	fx = fx.replace(/cos/gi, 'Math.cos');
	fx = fx.replace(/sin/gi, 'Math.sin');
	fx = fx.replace(/acos/gi, 'Math.acos');
	fx = fx.replace(/asin/gi, 'Math.asin');
	fx = fx.replace(/tan/gi, 'Math.tan');
	fx = fx.replace(/atan/gi, 'Math.atan');
	fx = fx.replace(/sqrt/gi, 'Math.sqrt');
	fx = fx.replace(/log/gi, 'Math.log');
	fx = fx.replace(/pow/gi, 'Math.pow');

	ctx.fillStyle = color;
	ctx.strokeStyle = color;

	ctx.beginPath();
	var y;

	try {
		for (var x = -(WIDTH / 2); x < (WIDTH / 2); x++) {
			y = eval(fx);

			if (y == NaN) {
				ctx.moveTo(x, HEIGHT / 2);
			}

			ctx.lineTo((WIDTH / 2) + x, (HEIGHT / 2) - y);
		}
	}
	catch (e) {
		msg.innerText = e.toString();
	}

	if (fill) {
		ctx.fill();
	}
	else {
		ctx.stroke();
	}

	ctx.closePath();
}

function clearPlotter() {
	ctx.beginPath();
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	grid();
}

function random(arr) {
	return arr[Math.round(Math.random() * 100) % arr.length - 1];
}

function generatePalette() {
	var resuls = [];
	var R, G, B;
	for (var r = 0; r < 240; r += 10) {
		for (var g = 0; g < 240; g += 40) {
			for (var b = 0; b < 240; b += 40) {
				R = r.toString(16).length < 2 ? '0' + r.toString(16) : r.toString(16);
				G = g.toString(16).length < 2 ? '0' + g.toString(16) : g.toString(16);
				B = b.toString(16).length < 2 ? '0' + b.toString(16) : b.toString(16);
				results.push('#' + R + G + B);
			}
		}
	}
	return resuls;
}
