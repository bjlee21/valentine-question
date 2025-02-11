document.getElementById("yes").addEventListener("click", function() {
    window.location.href = "yes.html";
});

document.getElementById("no").addEventListener("click", function() {
    let button = this;
    button.style.position = "absolute";
    const x = Math.random() * (window.innerWidth * 0.5);
    const y = Math.random() * (window.innerHeight * 0.5);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.width = "auto"; 

    document.getElementById("question").textContent = "Try again 😒";
    document.getElementById("gif").src = "noresponse.gif";
    setTimeout(() => {
        document.getElementById("gif").src = "question.gif";
        document.getElementById("question").textContent = "Will you be my Valentine? ❤️";
        document.getElementById("response").textContent = "";
        button.style.position = "relative";
    }, 1000);
});