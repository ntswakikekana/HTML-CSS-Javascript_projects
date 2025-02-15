document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category-title");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const items = category.nextElementSibling;
            if (items.style.display === "none" || items.style.display === "") {
                items.style.display = "block";
            } else {
                items.style.display = "none";
            }
        });
    });
});
