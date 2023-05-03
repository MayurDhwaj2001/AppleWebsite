const message1 = document.querySelector(".message1");
function active() {
    message1.style.visibility = "visible";
    setTimeout(hidden,3000);
}

function hidden(){
    message1.style.visibility = "hidden";
}
