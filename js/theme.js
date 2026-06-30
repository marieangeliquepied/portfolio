/* ============================================================
   THEME — bascule clair / sombre avec persistance
   ============================================================
   Remarque : le thème est appliqué sur <html> (document.documentElement).
   Un petit script en ligne dans le <head> pose déjà le bon thème AVANT
   le premier rendu (anti-flash). Ce fichier ne gère que le bouton.
   ============================================================ */

(function () {
    const STORAGE_KEY = "theme";
    const root = document.documentElement;
    const toggle = document.getElementById("theme-toggle");

    if (!toggle) return;

    const icon = toggle.querySelector("span");

    // Met à jour l'icône selon le thème actif
    function refreshIcon() {
        const isDark = root.getAttribute("data-theme") === "dark";
        if (icon) icon.textContent = isDark ? "☀️" : "🌙";
        toggle.setAttribute(
            "aria-label",
            isDark ? "Passer en thème clair" : "Passer en thème sombre"
        );
    }

    refreshIcon();

    toggle.addEventListener("click", function () {
        const next =
            root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem(STORAGE_KEY, next);
        refreshIcon();
    });
})();
