function getScrollbarWidth() {
	var a = document.createElement("div");
	a.style.visibility = "hidden", a.style.width = "100px", a.style.msOverflowStyle = "scrollbar", document.body.appendChild(a);
	var b = a.offsetWidth;
	a.style.overflow = "scroll";
	var c = document.createElement("div");
	c.style.width = "100%", a.appendChild(c);
	var d = c.offsetWidth;
	return a.parentNode.removeChild(a), b - d
}
var scrollW = getScrollbarWidth();
document.body.style.paddingRight = scrollW + "px", document.body.className = "overflow-hidden";