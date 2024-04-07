window.onload = function() {
    var btnMoveFront = document.getElementById("move-front");
    var btnMoveBack = document.getElementById("move-back");
    var card = document.getElementById("card");
    var back = document.getElementById("back");

    btnMoveFront.onclick = function() {
        card.style.transform = "rotateY(0deg)";
    }
    btnMoveBack.onclick = function() {
        card.style.transform = "translate(-100%) rotateY(180deg)";
        back.style.transform = "rotateY(180deg)";
    }
}