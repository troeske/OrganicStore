document.addEventListener('DOMContentLoaded', function () {
    // For opening hours
    document.getElementById('opening-hours').addEventListener('click', function () {
        var openingHours = document.getElementById('opening-hours-slideout');
        var contactDetails = document.getElementById('contact-slideout');

        if (openingHours.style.display === "none" || openingHours.style.display === "") {
            openingHours.style.display = "block"; // Show opening hours
            contactDetails.style.display = "none"; // Hide contact details
        } else {
            openingHours.style.display = "none"; // Hide opening hours
        }
    });

    // For the contact details
    document.getElementById('contact-form').addEventListener('click', function () {
        var contactDetails = document.getElementById('contact-slideout');
        var openingHours = document.getElementById('opening-hours-slideout');

        if (contactDetails.style.display === "none" || contactDetails.style.display === "") {
            contactDetails.style.display = "block"; // Show contact details
            openingHours.style.display = "none"; // Hide opening hours
        } else {
            contactDetails.style.display = "none"; // Hide contact details
        }
    });

    // For the next and previous button on the special offers carousel
    const list = document.querySelector(".list");
    const item = document.querySelector(".item");
    // Ensure item is not null and has been loaded
    if (item) {
        const itemWidth = item.offsetWidth;

        function handleClick(direction) {
            // Based on the direction we call `scrollBy` with the item width we got earlier
            if (direction === "previous") {
                list.scrollBy({
                    left: -itemWidth,
                    behavior: "smooth"
                });
            } else {
                list.scrollBy({
                    left: itemWidth,
                    behavior: "smooth"
                });
            }
        }

        // Assuming you have buttons with IDs or classes to attach these events to
        // Example:
        document.getElementById('previous-card').addEventListener('click', function() {
            handleClick('previous');
        });

        document.getElementById('next-card').addEventListener('click', function() {
            handleClick('next');
        });
    }
});