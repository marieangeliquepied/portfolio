/* ============================================================
   APP — point d'entrée, petites tâches transverses
   ============================================================ */

(function () {
    // Année courante dans le pied de page
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Heure locale de Martinique (UTC-4, sans changement d'heure).
    // Affichée correctement quel que soit le fuseau du visiteur.
    const timeEl = document.getElementById("local-time");
    if (timeEl) {
        const formatter = new Intl.DateTimeFormat("fr-FR", {
            timeZone: "America/Martinique",
            hour: "2-digit",
            minute: "2-digit",
        });

        const updateTime = () => {
            timeEl.textContent = formatter.format(new Date());
        };

        updateTime();
        setInterval(updateTime, 30 * 1000);
    }
})();
