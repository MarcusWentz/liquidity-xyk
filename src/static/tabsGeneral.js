// Function to open a specific tab within its container
function openTab(evt, tabName, button) {
    var container = button.closest(".tabs-container");
    var tabcontent = container.querySelectorAll(".tabcontent");
    var tablinks = container.querySelectorAll(".tablinks");

    // Hide all tab content within the container
    tabcontent.forEach(function (content) {
        content.style.display = "none";
    });

    // Remove 'active' class from all tab buttons within the container
    tablinks.forEach(function (link) {
        link.className = link.className.replace(" active", "");
    });

    // Show the selected tab content and mark the button as active
    container.querySelector(`#${tabName}`).style.display = "block";
    button.className += " active";
    }

    // Automatically open the first tab in each container
    document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tabs-container").forEach(function (container) {
        var firstTab = container.querySelector(".tablinks");
        if (firstTab) firstTab.click();
    });
});