function dateTimer(){
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();
    if (s < 10 ) {
        s = "0" + s;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (h < 10) {
        h = "0" + h;
    }
    document.querySelector(".timer").innerHTML = h + ":" + m + ":" + s;
}

setInterval(dateTimer, 0);