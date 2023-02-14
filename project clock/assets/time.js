var hourEl = document.getElementById("hour");
var minEl = document.getElementById("minutes");
var secEl = document.getElementById("seconds");
var ampmEl = document.getElementById("ampm");

updateclock();
setInterval(() => {
    updateclock();
}, 1000);

function updateclock() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    ampmEl.innerText = ampm;
}
