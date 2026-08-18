(function () {
    var year = document.getElementById("footerYear");
    if (year) year.textContent = String(new Date().getFullYear());

    var toggle = document.querySelector("[data-nav-toggle]");
    var panel = document.querySelector("[data-nav-panel]");
    if (!toggle || !panel) return;

    function setOpen(open) {
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.textContent = open ? "Close" : "Menu";
        panel.hidden = !open;
        document.body.classList.toggle("nav-open", open);
    }

    toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    panel.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { setOpen(false); });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") setOpen(false);
    });
})();
