window.onload = function () {
    let collapseChilds = document.querySelectorAll(".collapsible li ul")
		    .forEach(element => element.style.display = "none");

    let showChilds = document.querySelectorAll(".collapsible li > span")
		    .forEach(element => {
			element.style.cursor = "pointer";
			element.onclick = uncollapse;
		    });

    function uncollapse () {
	nextUl = this.nextElementSibling;
	if(nextUl.style.display == "block")
	    nextUl.style.display = "none";
	else
	    nextUl.style.display = "block";
    };
}
