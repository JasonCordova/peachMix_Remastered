var keyHolder = document.getElementById("key_holder");

var keysDown = [];
var enabledKeys = [

	{"char": "a", "keyCode": 65, "presetElement": null, "audio": "sounds/Acoutstic Kick 01.wav"},
	{"char": "b", "keyCode": 66, "presetElement": null, "audio": "sounds/Acoutstic Kick 02.wav"},
	{"char": "c", "keyCode": 67, "presetElement": null, "audio": "sounds/Acoutstic Kick 03.wav"},
	{"char": "d", "keyCode": 68, "presetElement": null, "audio": "sounds/Acoutstic Kick 04.wav"},
	{"char": "e", "keyCode": 69, "presetElement": null, "audio": "sounds/Acoutstic Kick 05.wav"},
	{"char": "f", "keyCode": 70, "presetElement": null, "audio": "sounds/Acoutstic Kick 06.wav"},
	{"char": "g", "keyCode": 71, "presetElement": null, "audio": "sounds/Acoutstic Kick 07.wav"},
	{"char": "h", "keyCode": 72, "presetElement": null, "audio": "sounds/Acoutstic Kick 08.wav"},
	{"char": "i", "keyCode": 73, "presetElement": null, "audio": "sounds/Acoutstic Kick 09.wav"},
	{"char": "j", "keyCode": 74, "presetElement": null, "audio": "sounds/Acoutstic Kick 10.wav"},
	{"char": "k", "keyCode": 75, "presetElement": null, "audio": "sounds/Acoutstic Kick 11.wav"},
	{"char": "l", "keyCode": 76, "presetElement": null, "audio": "sounds/Acoutstic Kick 12.wav"},
	{"char": "m", "keyCode": 77, "presetElement": null, "audio": "sounds/Acoutstic Kick 13.wav"},
	{"char": "n", "keyCode": 78, "presetElement": null, "audio": "sounds/Acoutstic Kick 14.wav"},
	{"char": "o", "keyCode": 79, "presetElement": null, "audio": "sounds/Acoutstic Kick 15.wav"},
	{"char": "p", "keyCode": 80, "presetElement": null, "audio": "sounds/Acoutstic Kick 16.wav"},
	{"char": "q", "keyCode": 81, "presetElement": null, "audio": "sounds/Acoutstic Kick 17.wav"},
	{"char": "r", "keyCode": 82, "presetElement": null, "audio": "sounds/Acoutstic Kick 18.wav"},
	{"char": "s", "keyCode": 83, "presetElement": null, "audio": "sounds/Acoutstic Kick 19.wav"},
	{"char": "t", "keyCode": 84, "presetElement": null, "audio": "sounds/Acoutstic Kick 20.wav"},
	{"char": "u", "keyCode": 85, "presetElement": null, "audio": "sounds/Acoutstic Kick 21.wav"},
	{"char": "v", "keyCode": 86, "presetElement": null, "audio": "sounds/Acoutstic Kick 22.wav"},
	{"char": "w", "keyCode": 87, "presetElement": null, "audio": "sounds/Acoutstic Kick 23.wav"},
	{"char": "x", "keyCode": 88, "presetElement": null, "audio": "sounds/Acoutstic Kick 24.wav"},
	{"char": "y", "keyCode": 89, "presetElement": null, "audio": "sounds/Acoutstic Kick 25.wav"},
	{"char": "z", "keyCode": 90, "presetElement": null, "audio": "sounds/Acoutstic Kick 26.wav"},
	{"char": "1", "keyCode": 49, "presetElement": null, "audio": "sounds/Acoutstic Kick 27.wav"},
	{"char": "2", "keyCode": 50, "presetElement": null, "audio": "sounds/Acoutstic Kick 28.wav"},
	{"char": "3", "keyCode": 51, "presetElement": null, "audio": "sounds/Acoutstic Kick 29.wav"},
	{"char": "4", "keyCode": 52, "presetElement": null, "audio": "sounds/Acoutstic Kick 30.wav"},
	{"char": "5", "keyCode": 53, "presetElement": null, "audio": "sounds/Acoutstic Kick 31.wav"},
	{"char": "6", "keyCode": 54, "presetElement": null, "audio": "sounds/Acoutstic Kick 32.wav"},
	{"char": "7", "keyCode": 55, "presetElement": null, "audio": "sounds/Acoutstic Kick 33.wav"},
	{"char": "8", "keyCode": 56, "presetElement": null, "audio": "sounds/Acoutstic Kick 34.wav"},
	{"char": "9", "keyCode": 57, "presetElement": null, "audio": "sounds/Acoutstic Kick 35.wav"},
	{"char": "0", "keyCode": 48, "presetElement": null, "audio": "sounds/Acoutstic Kick 36.wav"}

]

enabledKeys.forEach(element => {

	createKey(element);

});
/*document.addEventListener("keydown", (e) => {

	if (e.repeat) return;

	var keyCode = e.keyCode;
	var keyChar = e.key;
	keysDown.push(keyChar);
	console.log(keysDown);

});

document.body.onkeyup = (e) => {

	var arrayIndex = keysDown.indexOf(e.key);
	keysDown.splice(arrayIndex, 1);
	console.log(keysDown);

}*/

/*document.addEventListener("keydown", (e) => {

	if (e.key == "Control"){

		console.log(JSON.stringify(enabledKeys));
		return;

	}

	if (e.repeat) return;
	if (enabledKeys.findIndex(obj => obj.char == e.key)){
		var temp = {char: e.key, keyCode: e.keyCode};
		enabledKeys.push(temp);
	}

});*/