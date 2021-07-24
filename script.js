console.log("page loaded...");

function mouseOver() {
    var vid = document.getElementById("video");
    vid.play();

    console.log("playing");
    
}
 
function mouseLeave() {
    var vid = document.getElementById("video");
    vid.pause();

    console.log("Paused");
}