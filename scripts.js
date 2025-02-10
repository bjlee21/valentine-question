document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("question").textContent = "Yay!";
    document.getElementById("gif").src = "celebration.gif";
});

document.getElementById("no").addEventListener("mouseover", function() {
    let button = this;
    button.style.position = "absolute";
    button.style.left = Math.random() * window.innerWidth * 0.7;
    button.style.top = Math.random() * window.innerHeight * 0.7;

    document.getElementById("gif").src = "noresponse.gif";
    setTimeout(() => {
        gif.src = "askquestion.gif";
    }, 1000);
});