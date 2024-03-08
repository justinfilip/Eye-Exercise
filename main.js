var balls = document.getElementsByClassName("ball");
document.onmousemove = (e) => {
    var x = (e.clientX * 100) / window.innerWidth + "%";
    var y = (e.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
    }
};