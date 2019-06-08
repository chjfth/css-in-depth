
function show_winwidth() {
	var ndInfo = document.querySelector('div').children[1];
	ndInfo.textContent = "window.innerWidth="+window.innerWidth;
}

document.addEventListener("DOMContentLoaded", function(){
	
	window.addEventListener("resize", show_winwidth);
	show_winwidth();
})
