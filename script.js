function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

fetch('https://api.countapi.xyz/hit/mynetictech-royalspice/visits')
.then(response => response.json())
.then(data => {
    document.getElementById('visitor-count').innerText = data.value;
})
.catch(() => {
    document.getElementById('visitor-count').innerText = "N/A";
});
