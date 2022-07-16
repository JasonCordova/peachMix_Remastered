var keyHolder = document.getElementById("key_holder");

var keysDown = [];
var enabledKeys = [

	{"char": "a", "keyCode": 65, "presetElement": null, "audio": "sounds/Acoustic Kick 01.wav", "audioPlayer": null},
	{"char": "b", "keyCode": 66, "presetElement": null, "audio": "sounds/Acoustic Kick 02.wav", "audioPlayer": null},
	{"char": "c", "keyCode": 67, "presetElement": null, "audio": "sounds/Acoustic Kick 03.wav", "audioPlayer": null},
	{"char": "d", "keyCode": 68, "presetElement": null, "audio": "sounds/Acoustic Kick 04.wav", "audioPlayer": null},
	{"char": "e", "keyCode": 69, "presetElement": null, "audio": "sounds/Acoustic Kick 05.wav", "audioPlayer": null},
	{"char": "f", "keyCode": 70, "presetElement": null, "audio": "sounds/Acoustic Kick 06.wav", "audioPlayer": null},
	{"char": "g", "keyCode": 71, "presetElement": null, "audio": "sounds/Acoustic Kick 07.wav", "audioPlayer": null},
	{"char": "h", "keyCode": 72, "presetElement": null, "audio": "sounds/Acoustic Kick 08.wav", "audioPlayer": null},
	{"char": "i", "keyCode": 73, "presetElement": null, "audio": "sounds/Acoustic Kick 09.wav", "audioPlayer": null},
	{"char": "j", "keyCode": 74, "presetElement": null, "audio": "sounds/Acoustic Kick 10.wav", "audioPlayer": null},
	{"char": "k", "keyCode": 75, "presetElement": null, "audio": "sounds/Acoustic Kick 11.wav", "audioPlayer": null},
	{"char": "l", "keyCode": 76, "presetElement": null, "audio": "sounds/Acoustic Kick 12.wav", "audioPlayer": null},
	{"char": "m", "keyCode": 77, "presetElement": null, "audio": "sounds/Acoustic Kick 13.wav", "audioPlayer": null},
	{"char": "n", "keyCode": 78, "presetElement": null, "audio": "sounds/Acoustic Kick 14.wav", "audioPlayer": null},
	{"char": "o", "keyCode": 79, "presetElement": null, "audio": "sounds/Acoustic Kick 15.wav", "audioPlayer": null},
	{"char": "p", "keyCode": 80, "presetElement": null, "audio": "sounds/Acoustic Kick 16.wav", "audioPlayer": null},
	{"char": "q", "keyCode": 81, "presetElement": null, "audio": "sounds/Acoustic Kick 17.wav", "audioPlayer": null},
	{"char": "r", "keyCode": 82, "presetElement": null, "audio": "sounds/Acoustic Kick 18.wav", "audioPlayer": null},
	{"char": "s", "keyCode": 83, "presetElement": null, "audio": "sounds/Acoustic Kick 19.wav", "audioPlayer": null},
	{"char": "t", "keyCode": 84, "presetElement": null, "audio": "sounds/Acoustic Kick 20.wav", "audioPlayer": null},
	{"char": "u", "keyCode": 85, "presetElement": null, "audio": "sounds/Acoustic Kick 21.wav", "audioPlayer": null},
	{"char": "v", "keyCode": 86, "presetElement": null, "audio": "sounds/Acoustic Kick 22.wav", "audioPlayer": null},
	{"char": "w", "keyCode": 87, "presetElement": null, "audio": "sounds/Acoustic Kick 23.wav", "audioPlayer": null},
	{"char": "x", "keyCode": 88, "presetElement": null, "audio": "sounds/Acoustic Kick 24.wav", "audioPlayer": null},
	{"char": "y", "keyCode": 89, "presetElement": null, "audio": "sounds/Acoustic Kick 25.wav", "audioPlayer": null},
	{"char": "z", "keyCode": 90, "presetElement": null, "audio": "sounds/Acoustic Kick 26.wav", "audioPlayer": null},
	{"char": "1", "keyCode": 49, "presetElement": null, "audio": "sounds/Acoustic Kick 27.wav", "audioPlayer": null},
	{"char": "2", "keyCode": 50, "presetElement": null, "audio": "sounds/Acoustic Kick 28.wav", "audioPlayer": null},
	{"char": "3", "keyCode": 51, "presetElement": null, "audio": "sounds/Acoustic Kick 29.wav", "audioPlayer": null},
	{"char": "4", "keyCode": 52, "presetElement": null, "audio": "sounds/Acoustic Snare 01.wav", "audioPlayer": null},
	{"char": "5", "keyCode": 53, "presetElement": null, "audio": "sounds/Acoustic Snare 02.wav", "audioPlayer": null},
	{"char": "6", "keyCode": 54, "presetElement": null, "audio": "sounds/Acoustic Snare 03.wav", "audioPlayer": null},
	{"char": "7", "keyCode": 55, "presetElement": null, "audio": "sounds/Acoustic Snare 04.wav", "audioPlayer": null},
	{"char": "8", "keyCode": 56, "presetElement": null, "audio": "sounds/Acoustic Snare 05.wav", "audioPlayer": null},
	{"char": "9", "keyCode": 57, "presetElement": null, "audio": "sounds/Acoustic Snare 06.wav", "audioPlayer": null},
	{"char": "0", "keyCode": 48, "presetElement": null, "audio": "sounds/Acoustic Snare 07.wav", "audioPlayer": null}

]

enabledKeys.forEach(element => {

	createKey(element);

});

document.onkeydown = (e) => {

	if (e.repeat) return;
	var index = enabledKeys.findIndex(obj => obj.char === e.key);
	if (index != -1){

		var currentElement = enabledKeys[index];
		playAudio(currentElement.audioPlayer);
		currentElement.presetElement.classList.add("active_press");

	}


};

document.onkeyup = (e) => {

	if (e.repeat) return;
	var index = enabledKeys.findIndex(obj => obj.char === e.key);
	if (index != -1){

		var currentElement = enabledKeys[index];
		currentElement.presetElement.classList.remove("active_press");

	}

}

function playAudio(audio){

	audio.currentTime = 0;
	audio.play();

}
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