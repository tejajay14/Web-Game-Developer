//Moving Object code
var div = document.getElementById('move');
document.addEventListener('mousemove', function (e) {
    div.style.left = e.pageX + "px";
    div.style.top = e.pageY + "px";
});