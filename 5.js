document.getElementById("button1").addEventListener("click", function() {
    open(1);
});

document.getElementById("button2").addEventListener("click", function() {
    open(2);
});

document.getElementById("button3").addEventListener("click", function() {
    open(3);
});

function open(Number) {
    var popup = document.getElementById("popup-" + Number);
    popup.style.visibility = "visible";
}
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
    popup.addEventListener('click', ($event) => {
        if (popup.style.visibility == "visible") {
            popup.style.visibility = "hidden";
        }
    });
}); 
