const colorList = ["red", "green","yellow", "navy", "orange", "lime"];
let container = document.getElementById("color-container");
for (let i = 0; i < colorList.length; i++) {
	container.innerHTML = "<div class='color-pick tooltip'><div class='tooltiptext'>Candy Apple</div></div><div class='color-pick tooltip'><div class='tooltiptext'>Green</div></div><div class='color-pick tooltip'><div class='tooltiptext'>Yellow</div></div><div class='color-pick tooltip'><div class='tooltiptext'>Navy Blue</div></div><div class='color-pick tooltip'><div class='tooltiptext'>Orange</div></div><div class='color-pick tooltip'><div class='tooltiptext'>Lime Green</div></div>";
    // container.innerHTML += "<div class='color-pick tooltip'>text here</div>";
}
let colorPicker = document.getElementsByClassName("color-pick");
// let output = document.getElementById("output");

for (let i = 0; i < colorPicker.length; i++) {
	colorPicker[i].style.backgroundColor = colorList[i];
	colorPicker[i].addEventListener("click", function () {
		changeName(colorList[i], i);
	});
}
changeName = (txt, active) => {
	for (let i = 0; i < colorPicker.length; i++) {
		colorPicker[i].classList.remove("active");
	}
	colorPicker[active].classList.add("active");
	// output.style.backgroundColor = color; clicked color
    document.getElementById('output').innerHTML=txt;
};

//for size
const sizeList = [" 64mm", " 96mm"];
let container2 = document.getElementById("size_container");
for (let i = 0; i < sizeList.length; i++) {
	container2.innerHTML = "<div class='color-pic'>64mm</div><div class='color-pic'>96mm</div>";
}
let sizePicker = document.getElementsByClassName("color-pic");
// let output1 = document.getElementById("size96_64");

for (let i = 0; i < sizePicker.length; i++) {
	sizePicker[i].addEventListener("click", function () {
		changeSize(sizeList[i], i);
	});
}
changeSize = (name, active) => {
	for (let i = 0; i < sizePicker.length; i++) {
		sizePicker[i].classList.remove("active");
	}
	sizePicker[active].classList.add("active");
	// output1.style.backgroundColor = color;
    document.getElementById('size96_64').innerHTML=name;
};
//for Style
const styleList = [" Ribbed", " Plain"];
let container3 = document.getElementById("style_container");
for (let i = 0; i < styleList.length; i++) {
	container3.innerHTML = "<div class='color-pi'>Ribbed</div><div class='color-pi'>Plain</div>";
}
let stylePicker = document.getElementsByClassName("color-pi");
// let output2 = document.getElementById("styleRibPlain");

for (let i = 0; i < stylePicker.length; i++) {
	stylePicker[i].addEventListener("click", function () {
		changeStyle(styleList[i], i);
	});
}
changeStyle = (style_rp, active) => {
	for (let i = 0; i < stylePicker.length; i++) {
		stylePicker[i].classList.remove("active");
	}
	stylePicker[active].classList.add("active");
	// output2.style.backgroundColor = color;
    document.getElementById('styleRibPlain').innerHTML=style_rp;
};
