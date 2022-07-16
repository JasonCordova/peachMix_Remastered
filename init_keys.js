function createKey(element){

	var newElement = document.createElement("div");
	newElement.classList.add("key");
	newElement.innerText = element.char.toUpperCase();
	keyHolder.appendChild(newElement);

	element.presetElement = newElement;

	var newSound = document.createElement("Audio");
	var newSource = document.createElement("source");
	newSource.src = element.audio;
	newSound.appendChild(newSource);
	newElement.appendChild(newSound);

	element.audioPlayer = newSound;

}