function createKey(element){

	var newElement = document.createElement("div");
	newElement.classList.add("key");
	newElement.innerText = element.char.toUpperCase();
	keyHolder.appendChild(newElement);

}