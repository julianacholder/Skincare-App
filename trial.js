document.addEventListener("DOMContentLoaded", function () {
    // Get all the list items with dropdowns
    const dropdownItems = document.querySelectorAll("li");

    // Add event listeners to each list item
    dropdownItems.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            const dropdown = item.querySelector(".dropdown");
            if (dropdown) {
                dropdown.style.display = "block";
            }
        });

        item.addEventListener("mouseout", function () {
            const dropdown = item.querySelector(".dropdown");
            if (dropdown) {
                dropdown.style.display = "none";
            }
        });
    });
});
