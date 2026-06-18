(function () {
    var root = document.documentElement;
    var toggle = document.querySelector(".theme-toggle");

    if (!toggle) {
        return;
    }

    function updateToggle() {
        var isDark = root.dataset.theme !== "light";
        var targetTheme = isDark ? "light" : "dark";
        toggle.querySelector("span").textContent = isDark ? "[\u2600]" : "[\u263e]";
        toggle.setAttribute("aria-label", "Switch to " + targetTheme + " mode");
        toggle.setAttribute("title", "Switch to " + targetTheme + " mode");
    }

    toggle.addEventListener("click", function () {
        var nextTheme = root.dataset.theme === "light" ? "dark" : "light";
        root.dataset.theme = nextTheme;
        try {
            localStorage.setItem("theme", nextTheme);
        } catch (error) {}
        updateToggle();
    });

    updateToggle();
}());
