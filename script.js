
function enroll(course) {
    alert("You enrolled in " + course + "!");
}

document.getElementById("search")
.addEventListener("input", function() {
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        card.style.display =
            card.innerText.toLowerCase().includes(value)
            ? "block" : "none";
    });
});
