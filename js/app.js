
function darkMode() {
    console.log("dark");
    document.body.style.background = "#090a0c";
    document.body.style.color = "white";
    var cards = document.querySelectorAll(".card");
    for (var i = 0; i < cards.length; i++) {
        console.log(i);
        cards[i].style.background = "#1d2026";
    }
}

function lightMode() {
    console.log("light");
    document.body.style.background = "#e9e9e9";
    document.body.style.color = "black";
    var cards = document.querySelectorAll(".card");
    for (var i = 0; i < cards.length; i++) {
        console.log(i);
        cards[i].style.background = "#e1e1e1";
    }
}
