
function filterFood(category, button) {

    const items = document.querySelectorAll(".food-item");
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    items.forEach(item => {

        if (category === "all") {
            item.classList.remove("fade");
        } else if (item.classList.contains(category)) {
            item.classList.remove("fade");
        } else {
            item.classList.add("fade");
        }

    });
}