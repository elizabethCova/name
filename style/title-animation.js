//const text = document.querySelector(".h1");
const strText = text.textContent;
const splitText = strText.split("");

for(let i=0; 1 < splitText.length; i++){
	text.innerHTML += "<span>"+ splitText[i] + "</span>"; 
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
	const span = text.querySelectorAll("span")[char];
	span.classList.add("fade");
	char++;
	if (char === splitText.length) {
		complete();
		return;
	}
}

function complete(){
	clearInterval(timer);
}
