function toggleFooterElem(element) {
    var parent = element.parentNode
    parent.childNodes.forEach(child => {
        if (child.tagName == "P" && child.style != undefined && child.style.display == "") {
            child.style.display = "block"
        } else if (child.tagName == "P" && child.style != undefined && child.style.display == "block") {
            child.style.display = ""

        }
    });

}

function togglePopUp(isClosed) {
    var navPopUp = document.getElementById("navPopUp");
    if (navPopUp && isClosed) {
        navPopUp.style.display = "block";
    } else if (navPopUp) {
        navPopUp.style.display = "none";
    }
}